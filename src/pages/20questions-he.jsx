import React from 'react';
import { graphql } from 'gatsby';
import AnalysisTemplate from '../templates/20questions-template';
import { analysisHTML } from '../data/20questions-html';

const TwentyQuestionsHePage = ({ data }) => {
  return (
    <AnalysisTemplate
      language="he"
      htmlContent={analysisHTML}
      metadata={data.site.siteMetadata}
    />
  );
};

export default TwentyQuestionsHePage;

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
