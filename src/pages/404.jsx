import React from 'react';
import { Link } from 'gatsby';

import BlogNavigation from '../components/blog-navigation';
import Layout from '../components/layout';
import SEO from '../components/seo';

const classes = {
  title: 'text-lg font-bold font-heebo',
  link: 'underline font-heebo',
};

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />
    <BlogNavigation currentPage="about" />
    <h1 className={classes.title}>404: Not Found</h1>
    <p>
      You just hit a route that doesn't exist.{' '}
      <Link className={classes.link} to="/">
        Return to safety
      </Link>
      .
    </p>
  </Layout>
);

export default NotFoundPage;
