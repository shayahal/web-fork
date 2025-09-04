import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionLectures from '../components/section-lectures';
import SectionAskMe from '../components/section-ask-me';
import SEO from '../components/seo';

const AboutPage = ({ data }) => {
  const aboutPost = data.markdownRemark;
  const subjectsTalking = data.site.siteMetadata.subjectsTalking;
  const subjectsAskMe = data.site.siteMetadata.subjectsAskMe;
  
  return (
    <Layout>
      <SEO title="About" />
      <Header metadata={data.site.siteMetadata} />
      <div className="mt-16 max-w-4xl mx-auto px-4">
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: aboutPost.html }}
        />
        
        <SectionLectures lectures={subjectsTalking} />
        <SectionAskMe subjects={subjectsAskMe} />
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
        subjectsTalking {
          name
          description
          link
        }
        subjectsAskMe {
          name
          description
          link
        }
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