import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SeniorItPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Senior-it" />
      <Header
        metadata={data.site.siteMetadata}
        currentLanguage="en"
        alternateUrl="/senior-it-he"
      />
      <div className="mt-16 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-terracotta mb-6 font-play">Senior-it</h1>
        <div className="prose prose-lg max-w-none font-lora">
          <p className="text-lg text-sage mb-4 font-lora">
            Research the differences between men and women's career paths in the Israeli Tech industry
          </p>
          <p className="text-text-dark mb-6 font-lora">
            Senior-it is a research project examining the differences between men and women's career paths in the Israeli Tech industry.
          </p>
          <div className="mt-8">
            <a
              href="https://www.mako.co.il/nexter-news/Article-75518b5b5f2c681027.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-sage text-cream rounded-lg font-medium hover:bg-terracotta transition-colors font-lora"
            >
              Read the Article →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SeniorItPage;

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
  }
`;


