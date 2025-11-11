import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionBlog from '../components/section-blog';

import SectionProjects from '../components/section-projects';
import SectionAskMe from '../components/section-ask-me';
import SectionLectures from '../components/section-lectures';
import SEO from '../components/seo';
import { getSubjectsTalking, getSubjectsAskMe, getSectionTitles, getProjects } from '../utils/subjectsLoader';

const Index = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const currentLanguage = 'en'; // Index page is in English
  const projects = getProjects(currentLanguage);
  const lectures = getSubjectsTalking(currentLanguage);
  const askMe = getSubjectsAskMe(currentLanguage);
  const sectionTitles = getSectionTitles(currentLanguage);
  const aboutContent = data.allAboutMarkdown && data.allAboutMarkdown.edges.length > 0 
    ? data.allAboutMarkdown.edges[0].node.html 
    : null;

  const noBlog = !posts || !posts.length;

  return (
    <Layout>
      <SEO />
      <Header
        metadata={data.site.siteMetadata}
        noBlog={noBlog}
        currentLanguage="en"
        alternateUrl="/index-he"
      />
      {aboutContent && <SectionAbout aboutContent={aboutContent} title={sectionTitles.about} />}
      {projects && projects.length && <SectionProjects projects={projects} title={sectionTitles.projects} />}
      {lectures && lectures.length && <SectionLectures lectures={lectures} title={sectionTitles.talking} />}
      {askMe && askMe.length && <SectionAskMe subjects={askMe} title={sectionTitles.askMe} />}
      {!noBlog && <SectionBlog posts={posts} title={sectionTitles.latestPosts} />}
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
      filter: { frontmatter: { language: { eq: "en" } } }
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
            language
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
