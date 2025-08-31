import React from 'react';

import BlogNavigation from '../components/blog-navigation';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const TopPostsPage = () => {
  return (
    <Layout>
      <SEO title="Top Posts" />
      <BlogNavigation currentPage="top-posts" />
      <Header metadata={{}} />
      <div className="mt-16 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Top Posts</h1>
        <p className="text-lg text-gray-600 mb-4">
          Discover the most popular and highly-rated blog posts.
        </p>
        <p className="text-gray-600">
          Content coming soon...
        </p>
      </div>
    </Layout>
  );
};

export default TopPostsPage; 