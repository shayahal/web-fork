import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SectionRecommendations from '../components/section-recommendations';

const RecommendationsPage = ({ data }) => {
  const recommendations = get(data, 'site.siteMetadata.recommendations', false);
  
  return (
    <Layout>
      <SEO title="Recommendations" />
      <Header metadata={data.site.siteMetadata} />
      <div className="mt-16 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-terracotta mb-6 animate-fade-in-up font-play">Recommendations</h1>
        <p className="text-lg text-text-dark mb-4 animate-fade-in-up font-huninn">
          Random collection of things I recommend.
        </p>
        
        {recommendations && recommendations.length > 0 ? (
          <SectionRecommendations recommendations={recommendations} />
        ) : (
          <p className="text-text-dark animate-fade-in font-huninn">No recommendations found yet.</p>
        )}
      </div>
    </Layout>
  );
};

export default RecommendationsPage;

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