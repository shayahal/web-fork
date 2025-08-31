import React from 'react';

import BlogNavigation from '../components/blog-navigation';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const TravelPage = () => {
  return (
    <Layout>
      <SEO title="Travel" />
      <BlogNavigation currentPage="travel" />
      <Header metadata={{}} />
      <div className="mt-16 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Travel</h1>
        <p className="text-lg text-gray-600 mb-4">
          Explore travel adventures, tips, and experiences from around the world.
        </p>
        <p className="text-gray-600">
          Content coming soon...
        </p>
      </div>
    </Layout>
  );
};

export default TravelPage; 