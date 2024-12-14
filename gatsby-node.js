const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.jsx`);
  const cabinetPost = path.resolve(`./src/templates/cabinet-post.jsx`);

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              parent {
                ... on File {
                  sourceInstanceName
                }
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMarkdownRemark.edges;

  const blogPosts = posts.filter(
    post => post.node.parent.sourceInstanceName === 'blog'
  );
  const cabinetPosts = posts.filter(
    post => post.node.parent.sourceInstanceName === 'my-cabinet'
  );

  blogPosts.forEach((post, index) => {
    const previous = index === blogPosts.length - 1 ? null : blogPosts[index + 1].node;
    const next = index === 0 ? null : blogPosts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  cabinetPosts.forEach((post, index) => {
    const previous = index === cabinetPosts.length - 1 ? null : cabinetPosts[index + 1].node;
    const next = index === 0 ? null : cabinetPosts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: cabinetPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;
    
    let prefix = '/blog';
    if (source === 'my-cabinet') {
      prefix = '/cabinet';
    }
    
    createNodeField({
      name: `slug`,
      node,
      value: `${prefix}${value}`,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type SiteSiteMetadata {
      siteUrl: String
      name: String
      title: String
      description: String
      author: String
      github: String
      linkedin: String
      about: String
      projects: [SectionItem]
      recommendation: [SectionItem]
      skills: [SectionItem]
    }

    type SectionItem {
      name: String!
      description: String!
      link: String!
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }
    
    type Fields {
      slug: String
    }
  `;
  createTypes(typeDefs);
};
