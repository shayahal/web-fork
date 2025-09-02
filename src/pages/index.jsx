import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionBlog from '../components/section-blog';

import SectionProjects from '../components/section-projects';


import SEO from '../components/seo';

const Index = ({ data }) => {
  const projects = get(data, 'site.siteMetadata.projects', false);
  const posts = data.allMarkdownRemark.edges;
  const aboutContent = data.aboutMarkdown ? data.aboutMarkdown.html : null;

  const noBlog = !posts || !posts.length;

  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
      {aboutContent && <SectionAbout aboutContent={aboutContent} />}
      {projects && projects.length && <SectionProjects projects={projects} />}

      {!noBlog && <SectionBlog posts={posts} />}


    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        author
        github
        linkedin
        projects {
          name
          description
          link
        }
      }
    }
    aboutMarkdown: markdownRemark(
      fileAbsolutePath: { regex: "/content/about.md$/" }
      parent: { sourceInstanceName: { eq: "content" } }
    ) {
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
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
