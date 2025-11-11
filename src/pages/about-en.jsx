import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionLectures from '../components/section-lectures';
import SectionAskMe from '../components/section-ask-me';
import SEO from '../components/seo';
import { getSubjectsTalking, getSubjectsAskMe, getSectionTitles } from '../utils/subjectsLoader';

const AboutPage = ({ data }) => {
  const aboutPost = data.markdownRemark;
  const currentLanguage = 'en';
  const subjectsTalking = getSubjectsTalking(currentLanguage);
  const subjectsAskMe = getSubjectsAskMe(currentLanguage);
  const sectionTitles = getSectionTitles(currentLanguage);
  
  return (
    <Layout>
      <SEO title="About" />
      <Header
        metadata={data.site.siteMetadata}
        currentLanguage="en"
        alternateUrl="/about-he"
      />
      <div className="mt-16 max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 items-start animate-fade-in-up stagger-1">
          <div className="flex-1">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: aboutPost.html }}
            />
          </div>
          <div className="flex-shrink-0 relative group">
            <img 
              src="/fishing.jpg" 
              alt="Fishing Adventure" 
              className="rounded-lg shadow-lg w-56 h-auto cursor-pointer transition-transform duration-200 hover:scale-105"
            />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
              just a girl fishing pirana in the amazon
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>
        </div>
        
        <SectionLectures lectures={subjectsTalking} title={sectionTitles.talking} />
        <SectionAskMe subjects={subjectsAskMe} title={sectionTitles.askMe} />
      </div>
    </Layout>
  );
};

export default AboutPage;

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
    markdownRemark(fileAbsolutePath: { regex: "/about.md$/" }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;