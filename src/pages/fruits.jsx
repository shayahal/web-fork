import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const FruitsPage = ({ data }) => {
  const fruits = [
    'Apricot',
    'Lime (the juice)',
    'Mango',
    'Strawberries',
    'Grapefruits',
    'Dates'
  ];
  
  return (
    <Layout>
      <SEO title="Fruits" />
      <Header
        metadata={data.site.siteMetadata}
        currentLanguage="en"
      />
      <div className="mt-16 max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 items-start animate-fade-in-up stagger-1">
          <div className="flex-1">
            <div className="prose prose-lg max-w-none">
              <p className="text-text-dark font-lora mb-4">inspire by Yoav</p>
              <ul className="list-none space-y-2 font-lora">
                {fruits.map((fruit, index) => (
                  <li key={fruit} className="text-text-dark">
                    {index + 1}. {fruit}
                  </li>
                ))}
              </ul>
              <p className="text-text-dark font-lora mt-4">
                the true inspiration for this website, <a href="https://web.stanford.edu/~cm5/fruit.html" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Ciprian Manolescu</a>
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 relative group">
            <img 
              src="/fishing.jpg" 
              alt="Fishing Adventure" 
              className="rounded-lg shadow-lg w-56 h-auto cursor-pointer transition-transform duration-200 hover:scale-105"
            />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
              just a girl fishing pirana in the amazon
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FruitsPage;

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

