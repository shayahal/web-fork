import { graphql, Link } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { getAlternateLanguageSlug, detectLanguage } from '../utils/languageUtils';
import '../css/styles.css'; 

const classes = {
  wrapper: 'mt-16 blog-content font-lora animate-fade-in-up text-text-dark',
  title: 'mt-16 text-4xl text-terracotta font-bold font-play animate-slide-in-left',
  date: 'text-sage font-light font-lora',
  tags: 'mt-4 flex flex-wrap gap-2',
  tag: 'px-3 py-1 bg-blush text-terracotta text-sm rounded-full font-medium hover:bg-sage hover:text-cream transition-colors',
  navigation: 'mt-12 pt-8 border-t border-blush flex justify-between items-center',
  navLink: 'flex items-center space-x-2 text-sage hover:text-terracotta transition-colors font-lora',
  navLinkRTL: 'flex items-center space-x-reverse space-x-2 text-sage hover:text-terracotta transition-colors font-lora',
  navText: 'text-sm',
  navTitle: 'font-medium',
};

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const allPosts = data.allMarkdownRemark.edges;
  const currentLanguage = detectLanguage(post);
  const isRTL = currentLanguage === 'he';

  // Find current post index
  const currentIndex = allPosts.findIndex(edge => edge.node.id === post.id);
  
  // Get previous and next posts
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  // Get alternate language version
  const currentSlug = post.fields?.slug;
  const alternateSlug = getAlternateLanguageSlug(currentSlug, currentLanguage, allPosts);

  return (
    <Layout>
      <Header 
        metadata={data.site.siteMetadata} 
        currentLanguage={currentLanguage}
        alternateUrl={alternateSlug}
      />
      <SEO title={post.frontmatter.title} />
      <div className={`blog-post ${isRTL ? 'rtl' : ''}`}>
        <h1 className={classes.title}>{post.frontmatter.title}</h1>
        <p className={classes.date}>
          {post.frontmatter.date}
        </p>
        {post.frontmatter.tags && (
          <div className={classes.tags}>
            {post.frontmatter.tags.map((tag, index) => (
              <span key={index} className={classes.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <div
          className={classes.wrapper}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        
        {/* Navigation */}
        <div className={classes.navigation}>
          {previousPost && previousPost.node && previousPost.node.fields?.slug ? (
            <Link 
              to={previousPost.node.fields.slug} 
              className={isRTL ? classes.navLinkRTL : classes.navLink}
            >
              <span className={classes.navText}>
                {isRTL ? '← הפוסט הקודם' : '← Previous Post'}
              </span>
              <div>
                <div className={classes.navTitle}>
                  {previousPost.node.frontmatter.title}
                </div>
              </div>
            </Link>
          ) : (
            <div></div>
          )}
          
          {nextPost && nextPost.node && nextPost.node.fields?.slug ? (
            <Link 
              to={nextPost.node.fields.slug} 
              className={isRTL ? classes.navLinkRTL : classes.navLink}
            >
              <div>
                <div className={classes.navTitle}>
                  {nextPost.node.frontmatter.title}
                </div>
              </div>
              <span className={classes.navText}>
                {isRTL ? 'הפוסט הבא →' : 'Next Post →'}
              </span>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
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
        tags
      }
      fields {
        slug
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            language
            tags
          }
        }
      }
    }
  }
`;
