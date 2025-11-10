// Utility functions for loading translated subjects

import talkingEn from '../../content/subjects/talking.en.json';
import talkingHe from '../../content/subjects/talking.he.json';
import askmeEn from '../../content/subjects/askme.en.json';
import askmeHe from '../../content/subjects/askme.he.json';

/**
 * Get subjects for "I'm talking about" section based on language
 * @param {string} language - Language code ('en' or 'he')
 * @returns {Array} - Array of subject objects
 */
export const getSubjectsTalking = (language = 'en') => {
  return language === 'he' ? talkingHe : talkingEn;
};

/**
 * Get subjects for "Ask me about" section based on language
 * @param {string} language - Language code ('en' or 'he')
 * @returns {Array} - Array of subject objects
 */
export const getSubjectsAskMe = (language = 'en') => {
  return language === 'he' ? askmeHe : askmeEn;
};

/**
 * Get section titles based on language
 * @param {string} language - Language code ('en' or 'he')
 * @returns {Object} - Object with translated section titles
 */
export const getSectionTitles = (language = 'en') => {
  return language === 'he' 
    ? {
        talking: 'נושאים שאני מרצה עליהם',
        askMe: 'נושאים שכדאי לכם לבקש ממני להרצות עליהם',
        about: 'אודות',
        projects: 'פרויקטים',
        latestPosts: 'פוסטים אחרונים'
      }
    : {
        talking: 'Subjects I\'m talking about',
        askMe: 'Subjects you should ask me to talk about',
        about: 'About',
        projects: 'Projects',
        latestPosts: 'Latest Posts'
      };
};