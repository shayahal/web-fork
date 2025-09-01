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
      <Header metadata={data.site.siteMetadata} />
      <div className="mt-16 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">Travel</h1>
        <p className="text-lg text-gray-600 mb-4 animate-fade-in-up">
          Explore travel adventures, tips, and experiences from around the world.
        </p>
        
        {posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map((post, index) => (
              <article 
                key={post.node.fields.slug} 
                className="border-b border-gray-200 pb-6 post-card animate-fade-in-up"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  <Link 
                    to={post.node.fields.slug} 
                    className="animated-link hover:text-blue-600 transition-colors"
                  >
                    {post.node.frontmatter.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-3">{post.node.frontmatter.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">{post.node.frontmatter.date}</p>
                  {post.node.frontmatter.tags && (
                    <div className="flex gap-2">
                      {post.node.frontmatter.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-2 py-2 bg-blue-100 text-blue-800 text-xs rounded-full tag-item"
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
          <p className="text-gray-600 animate-fade-in">No travel posts found yet.</p>
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
      filter: { frontmatter: { tags: { in: ["travel", "adventure", "places"] } } }
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