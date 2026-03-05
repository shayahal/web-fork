import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NowPageHe = ({ data }) => (
  <Layout>
    <SEO title="עכשיו" />
    <Header
      metadata={data.site.siteMetadata}
      currentLanguage="he"
      alternateUrl="/now"
    />
    <div className="mt-16 max-w-4xl mx-auto px-4 rtl" dir="rtl">
      <div className="prose prose-lg max-w-none font-hebrew text-text-dark animate-fade-in-up">
        <div dangerouslySetInnerHTML={{ __html: data.file.childMarkdownRemark.html }} />
      </div>
    </div>
  </Layout>
);

export default NowPageHe;

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
    file(sourceInstanceName: { eq: "content" }, name: { eq: "now.he" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;
