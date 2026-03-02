import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Header from '../components/header';
import SEO from '../components/seo';

const ALTERNATE_URLS = {
  en: '/20questions-he',
  he: '/20questions-en',
};

const extractHTMLParts = (fullHTML) => {
  // Extract CSS from <style> tag
  const styleMatch = fullHTML.match(/<style>([\s\S]*?)<\/style>/i);
  const css = styleMatch ? styleMatch[1] : '';

  // Extract body content (everything between <body> tags)
  const bodyMatch = fullHTML.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : '';

  // Extract script content (everything in <script> tag)
  const scriptMatch = fullHTML.match(/<script>([\s\S]*?)<\/script>/i);
  const script = scriptMatch ? scriptMatch[1] : '';

  return { css, bodyContent, script };
};

const AnalysisTemplate = ({ language = 'en', htmlContent, metadata }) => {
  const containerRef = useRef(null);
  const alternateUrl = ALTERNATE_URLS[language] || '/20questions-en';

  const titles = {
    en: '20 Questions Analysis',
    he: 'ניתוח 20 שאלות',
  };

  const descriptions = {
    en: 'A comprehensive data-driven analysis of the Israeli 20 Questions game by Yoaana Gonen',
    he: 'ניתוח מקיף מונע נתונים של משחק 20 השאלות של הארץ מאת יוענה גונן',
  };

  const { css, bodyContent, script } = htmlContent ? extractHTMLParts(htmlContent) : { css: '', bodyContent: '', script: '' };

  // Create content with proper styling wrapper
  const contentWithStyles = htmlContent ? `
    <style>${css}</style>
    <div dir="rtl" style="direction: rtl; text-align: right;">
      ${bodyContent}
    </div>
  ` : '';

  useEffect(() => {
    // Execute the embedded JavaScript after content renders
    if (containerRef.current && script && htmlContent) {
      try {
        // Create a function with the script code and execute it
        // This gives the script access to DOM elements and global scope
        const fn = new Function(script);
        fn();
      } catch (e) {
        console.warn('Script execution error in 20questions:', e);
      }
    }
  }, [script, bodyContent, htmlContent]);

  if (!htmlContent) {
    return (
      <Layout>
        <SEO title={titles[language]} description="Analysis not available" />
        <div className="px-4 py-8 text-center">
          <p>Content not available</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={titles[language]}
        description={descriptions[language]}
      />
      <Header
        metadata={metadata}
        currentLanguage={language}
        alternateUrl={alternateUrl}
      />
      <div ref={containerRef} dangerouslySetInnerHTML={{ __html: contentWithStyles }} />
    </Layout>
  );
};

AnalysisTemplate.propTypes = {
  language: PropTypes.oneOf(['en', 'he']),
  htmlContent: PropTypes.string.isRequired,
  metadata: PropTypes.object,
};

export default AnalysisTemplate;
