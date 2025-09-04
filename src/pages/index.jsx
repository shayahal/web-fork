import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionBlog from '../components/section-blog';

import SectionProjects from '../components/section-projects';
import SectionAskMe from '../components/section-ask-me';
import SectionLectures from '../components/section-lectures';


import SEO from '../components/seo';

const Index = ({ data }) => {
  const projects = get(data, 'site.siteMetadata.projects', false);
  const posts = data.allMarkdownRemark.edges;
  const lectures = get(data, 'site.siteMetadata.subjectsTalking', false);
  const askMe = get(data, 'site.siteMetadata.subjectsAskMe', false);
  const aboutContent = data.allAboutMarkdown && data.allAboutMarkdown.edges.length > 0 
    ? data.allAboutMarkdown.edges[0].node.html 
    : null;

  const noBlog = !posts || !posts.length;

  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
      {aboutContent && <SectionAbout aboutContent={aboutContent} />}
      {projects && projects.length && <SectionProjects projects={projects} />}
      {lectures && lectures.length && <SectionLectures lectures={lectures} />}
      {askMe && askMe.length && <SectionAskMe subjects={askMe} />}
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
        subjectsTalking {
          name
          description
          link
        }
        subjectsAskMe {
          name
          description
          link
        }
    }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
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
    allAboutMarkdown: allMarkdownRemark(
      filter: { 
        fileAbsolutePath: { regex: "/about.md$/" }
      }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
