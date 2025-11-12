import { graphql, Link } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const TravelPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  
  return (
    <Layout>
      <SEO title="Travel" />
      <Header
        metadata={data.site.siteMetadata}
        currentLanguage="en"
        alternateUrl="/travel-he"
      />
      <div className="mt-16 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-terracotta mb-6 animate-fade-in-up font-lora">Travel</h1>
        <p className="text-lg text-sage mb-4 animate-fade-in-up font-huninn">
          I love to travel. Always wanted to put all my recommendations somewhere - enjoy.
        </p>
        
        {posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map((post, index) => (
              <article 
                key={post.node.fields?.slug || post.node.id} 
                className="border-b border-blush pb-6 post-card animate-fade-in-up"
              >
                <h2 className="text-2xl font-bold text-terracotta mb-2 font-lora">
                  <Link 
                    to={post.node.fields?.slug || '#'} 
                    className="animated-link hover:text-sage transition-colors"
                  >
                    {post.node.frontmatter.title}
                  </Link>
                </h2>
                <p className="text-text-dark mb-3 font-huninn">{post.node.frontmatter.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-text-dark font-huninn">{post.node.frontmatter.date}</p>
                  {post.node.frontmatter.tags && (
                    <div className="flex gap-2">
                      {post.node.frontmatter.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-3 py-1 bg-blush text-terracotta text-sm rounded-full font-medium hover:bg-sage hover:text-cream transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-text-dark animate-fade-in font-huninn">No travel posts found yet.</p>
        )}
      </div>
    </Layout>
  );
};

export default TravelPage;

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
      filter: {
        frontmatter: {
          tags: { in: ["travel", "adventure", "places"] }
          language: { eq: "en" }
        }
      }
      sort: { frontmatter: { date: DESC } }
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
            tags
          }
        }
      }
    }
  }
`; 