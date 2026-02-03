import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SeniorItPageHe = ({ data }) => {
  return (
    <Layout>
      <SEO title="Senior-it" />
      <Header
        metadata={data.site.siteMetadata}
        currentLanguage="he"
        alternateUrl="/senior-it"
      />
      <div className="mt-16 max-w-4xl mx-auto px-4 rtl" dir="rtl">
        <h1 className="text-4xl font-bold text-terracotta mb-6 font-play">Senior-it</h1>
        <div className="prose prose-lg max-w-none font-hebrew">
          <p className="text-lg text-sage mb-4 font-hebrew">
            מחקר על ההבדלים בין מסלולי הקריירה של גברים ונשים בתעשיית ההייטק הישראלית
          </p>
          <p className="text-text-dark mb-6 font-hebrew">
            Senior-it הוא מחקר הבוחן את ההבדלים בין מסלולי הקריירה של גברים ונשים בתעשיית ההייטק הישראלית.
          </p>
          <div className="mt-8">
            <a
              href="https://www.mako.co.il/nexter-news/Article-75518b5b5f2c681027.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-sage text-cream rounded-lg font-medium hover:bg-terracotta transition-colors font-hebrew"
            >
              לקריאת הכתבה ←
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SeniorItPageHe;

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


