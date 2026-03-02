import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
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
  const [isClient, setIsClient] = useState(false);
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

  // Mark as client-side only after first mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Execute embedded JavaScript after hydration
  useEffect(() => {
    if (!isClient || !containerRef.current || !script || !htmlContent) {
      return;
    }

    // Wait a bit longer to ensure all hydration is done
    const timer = setTimeout(() => {
      try {
        // Execute the script in page context
        const fn = new Function(script);
        fn();
      } catch (e) {
        // Log only non-socket-related errors
        if (!e?.message?.includes?.('socket') && !e?.message?.includes?.('emit')) {
          console.debug('20questions script note:', e?.message);
        }
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [isClient, script, htmlContent]);

  if (!htmlContent) {
    return (
      <>
        <SEO title={titles[language]} description="Analysis not available" />
        <div className="px-4 py-8 text-center">
          <p>Content not available</p>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title={titles[language]}
        description={descriptions[language]}
      />
      <div ref={containerRef} dangerouslySetInnerHTML={{ __html: contentWithStyles }} />
    </>
  );
};

AnalysisTemplate.propTypes = {
  language: PropTypes.oneOf(['en', 'he']),
  htmlContent: PropTypes.string.isRequired,
  metadata: PropTypes.object,
};

export default AnalysisTemplate;
