import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = ({ data }) => {
  const aboutPost = data.markdownRemark;
  
  return (
    <Layout>
      <SEO title="About" />
      <Header metadata={data.site.siteMetadata} />
      <div className="mt-16 max-w-4xl mx-auto px-4">
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: aboutPost.html }}
        />
      </div>
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
      }
    }
    markdownRemark(fileAbsolutePath: { regex: "/about.md$/" }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;