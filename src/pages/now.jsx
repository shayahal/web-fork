import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NowPage = ({ data }) => (
  <Layout>
    <SEO title="Now" />
    <Header
      metadata={data.site.siteMetadata}
      currentLanguage="en"
    />
    <div className="mt-16 max-w-4xl mx-auto px-4">
      <div className="prose prose-lg max-w-none font-lora text-text-dark animate-fade-in-up">
        <div dangerouslySetInnerHTML={{ __html: data.file.childMarkdownRemark.html }} />
      </div>
    </div>
  </Layout>
);

export default NowPage;

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
    file(sourceInstanceName: { eq: "content" }, name: { eq: "now" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;
