import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BottlesCabinet from '../components/BottlesCabinet';
import { graphql } from 'gatsby';

const BottlesCabinetPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="My Bottles Cabinet | Shay Yahal" />
      <Header
        metadata={data.site.siteMetadata}
        currentLanguage="en"
        alternateUrl="/bottles-cabinet-he"
      />
      <div className="mt-8 relative max-w-full">
        <BottlesCabinet />
      </div>
    </Layout>
  );
};

export default BottlesCabinetPage;

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
