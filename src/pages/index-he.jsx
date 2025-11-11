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
import { getSubjectsTalking, getSubjectsAskMe, getSectionTitles } from '../utils/subjectsLoader';

const IndexHeb = ({ data }) => {
  const projects = get(data, 'site.siteMetadata.projects', false);
  const posts = data.allMarkdownRemark.edges;
  const currentLanguage = 'he'; // Index page is in Hebrew
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
        currentLanguage="he"
        alternateUrl="/index-en"
      />
      <div className="rtl" dir="rtl">
        {aboutContent && <SectionAbout aboutContent={aboutContent} title={sectionTitles.about} />}
        {projects && projects.length && <SectionProjects projects={projects} title={sectionTitles.projects} />}
        {lectures && lectures.length && <SectionLectures lectures={lectures} title={sectionTitles.talking} />}
        {askMe && askMe.length && <SectionAskMe subjects={askMe} title={sectionTitles.askMe} />}
        {!noBlog && <SectionBlog posts={posts} title={sectionTitles.latestPosts} />}
      </div>
    </Layout>
  );
};

export default IndexHeb;

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
      filter: { frontmatter: { language: { eq: "he" } } }
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
        fileAbsolutePath: { regex: "/about.he.md$/" }
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

