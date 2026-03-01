import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Header from '../components/header';
import SEO from '../components/seo';

const ALTERNATE_URLS = {
  en: '/20questions-he',
  he: '/20questions-en',
};

const AnalysisTemplate = ({ language = 'en', htmlContent, metadata }) => {
  const alternateUrl = ALTERNATE_URLS[language] || '/20questions-en';

  const titles = {
    en: '20 Questions Analysis',
    he: 'ניתוח 20 שאלות',
  };

  const descriptions = {
    en: 'A comprehensive data-driven analysis of the Israeli 20 Questions game by Yoaana Gonen',
    he: 'ניתוח מקיף מונע נתונים של משחק 20 השאלות של הארץ מאת יוענה גונן',
  };

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
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </Layout>
  );
};

AnalysisTemplate.propTypes = {
  language: PropTypes.oneOf(['en', 'he']),
  htmlContent: PropTypes.string.isRequired,
  metadata: PropTypes.object,
};

export default AnalysisTemplate;
