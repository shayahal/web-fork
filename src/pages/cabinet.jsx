import { graphql } from 'gatsby';
import React from 'react';

import BlogPosts from '../components/blog-posts';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NotFound from './404';

const CabinetPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const noCabinet = !posts || !posts.length;

  if (!posts || !posts.length) {
    return <NotFound />;
  }

  return (
    <Layout>
      <SEO title="My Cabinet" />
      <Header metadata={data.site.siteMetadata} />
      {!noCabinet && <BlogPosts posts={posts} />}
    </Layout>
  );
};

export default CabinetPage;

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
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/my-cabinet/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`; 