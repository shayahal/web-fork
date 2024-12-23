import { graphql } from 'gatsby';
import moment from 'moment';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../css/styles.css'; 

const classes = {
  wrapper: 'mt-16 blog-content',
  title: 'mt-16 text-4xl text-gray-900 font-bold',
  date: 'text-gray-600 font-light',
};

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const isRTL = post.frontmatter.language === 'he'; 

  return (
    <Layout>
      <Header metadata={data.site.siteMetadata} />
      <SEO title={post.frontmatter.title} />
      <div className={`blog-post ${isRTL ? 'rtl' : ''}`}>
        <h1 className={classes.title}>{post.frontmatter.title}</h1>
        <p className={classes.date}>
          Posted on {moment(post.frontmatter.date).format('MMMM D, YYYY')}
        </p>
        <div
          className={classes.wrapper}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        language
      }
    }
  }
`;
