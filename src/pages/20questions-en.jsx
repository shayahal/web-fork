import React from 'react';
import { graphql } from 'gatsby';
import AnalysisTemplate from '../templates/20questions-template';
import { analysisHTML } from '../data/20questions-html';

const TwentyQuestionsEnPage = ({ data }) => {
  return (
    <AnalysisTemplate
      language="en"
      htmlContent={analysisHTML}
      metadata={data.site.siteMetadata}
    />
  );
};

export default TwentyQuestionsEnPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        author
      }
    }
  }
`;
