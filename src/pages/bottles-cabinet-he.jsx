import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BottlesCabinet from '../components/BottlesCabinet';
import { graphql } from 'gatsby';

const BottlesCabinetPageHe = ({ data }) => {
  return (
    <Layout>
      <SEO title="ארון המשקאות שלי | שי יהל" />
      <Header
        metadata={data.site.siteMetadata}
        currentLanguage="he"
        alternateUrl="/bottles-cabinet"
      />
      <div className="mt-8 relative max-w-full" dir="rtl">
        <BottlesCabinet />
      </div>
    </Layout>
  );
};

export default BottlesCabinetPageHe;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        author
        github
        linkedin
      }
    }
  }
`;
