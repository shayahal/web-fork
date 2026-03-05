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

        {/* Section 1: What is a now page? */}
        <h2>What is a now page?</h2>
        <p>
          This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">/now page</a> — an idea by{' '}
          <a href="https://sive.rs/nowff" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Derek Sivers</a>.
          Unlike an "about" page that covers who you are, a /now page covers what you're
          focused on <em>right now</em> — updated occasionally, not hourly.
        </p>

        {/* Section 2: Current activities */}
        <h2>What I'm doing now</h2>
        <p><em>Last updated: March 2026</em></p>
        <ul>
          <li>Building autonomous AI agents and tools for creative content generation</li>
          <li>Analyzing trivia question datasets to develop categorization and taxonomy frameworks</li>
          <li>Exploring the intersection of AI-assisted design and content creation</li>
          <li>Learning about deployment patterns and infrastructure for full-stack applications</li>
        </ul>

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
  }
`;
