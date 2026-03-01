import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import SEO from '../components/seo';

const AnalysisTemplate = ({ language = 'en', htmlContent, metadata }) => {
  const getAlternateUrl = () => {
    if (language === 'en') return '/20questions-he';
    if (language === 'he') return '/20questions-en';
    return '/20questions-en';
  };

  const titles = {
    en: '20 Questions Analysis',
    he: 'ניתוח 20 שאלות',
  };

  const descriptions = {
    en: 'A comprehensive data-driven analysis of the Israeli 20 Questions game by Yoaana Gonen',
    he: 'ניתוח מקיף מונע נתונים של משחק 20 השאלות של הארץ מאת יוענה גונן',
  };

  return (
    <Layout>
      <SEO
        title={titles[language]}
        description={descriptions[language]}
      />
      <Header
        metadata={metadata}
        currentLanguage={language}
        alternateUrl={getAlternateUrl()}
      />
      <div className="analysis-container">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </Layout>
  );
};

export default AnalysisTemplate;
