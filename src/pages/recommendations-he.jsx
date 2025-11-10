import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SectionRecommendations from '../components/section-recommendations';

const RecommendationsPageHe = ({ data }) => {
  const recommendations = get(data, 'site.siteMetadata.recommendations', false);
  
  return (
    <Layout>
      <SEO title="המלצות" />
      <Header 
        metadata={data.site.siteMetadata}
        currentLanguage="he"
        alternateUrl="/recommendations"
      />
      <div className="mt-16 max-w-4xl mx-auto px-4 rtl" dir="rtl">
        <h1 className="text-4xl font-bold text-terracotta mb-6 animate-fade-in-up font-play">המלצות</h1>
        <p className="text-lg text-sage mb-4 animate-fade-in-up font-huninn">
          אוסף אקראי של דברים שאני ממליצה עליהם.
        </p>
        
        {recommendations && recommendations.length > 0 ? (
          <SectionRecommendations recommendations={recommendations} />
        ) : (
          <p className="text-text-dark animate-fade-in font-huninn">אין עדיין המלצות.</p>
        )}
      </div>
    </Layout>
  );
};

export default RecommendationsPageHe;

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
        recommendations {
          name
          description
          link
        }
      }
    }
  }
`;

