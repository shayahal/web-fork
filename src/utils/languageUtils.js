// Utility functions for language switching

/**
 * Get the alternate language version of a blog post
 * @param {string} currentSlug - Current post slug (e.g., "/blog/start/")
 * @param {string} currentLanguage - Current language ('en' or 'he')
 * @param {Array} allPosts - Array of all posts from GraphQL query
 * @returns {string|null} - Alternate language slug or null if not found
 */
export const getAlternateLanguageSlug = (currentSlug, currentLanguage, allPosts) => {
  if (!currentSlug || !allPosts) return null;
  
  // Extract the post name from the slug (e.g., "/blog/start/" -> "start" or "/blog/start-en/" -> "start")
  let postName = currentSlug.replace('/blog/', '').replace(/\/$/, '');
  
  // Remove language suffix if present
  if (postName.endsWith('-en')) {
    postName = postName.replace('-en', '');
  }
  
  // Target language is opposite of current
  const targetLanguage = currentLanguage === 'he' ? 'en' : 'he';
  
  if (targetLanguage === 'en') {
    // Look for the English version (with -en suffix in directory name)
    const alternatePost = allPosts.find(edge => {
      const postSlug = edge.node.fields?.slug || '';
      return postSlug === `/blog/${postName}-en/`;
    });
    return alternatePost?.node?.fields?.slug || null;
  } else {
    // Look for the Hebrew version (without -en suffix)
    const alternatePost = allPosts.find(edge => {
      const postSlug = edge.node.fields?.slug || '';
      return postSlug === `/blog/${postName}/`;
    });
    return alternatePost?.node?.fields?.slug || null;
  }
};

/**
 * Get the alternate language version for the about page
 * @param {string} currentLanguage - Current language ('en' or 'he')
 * @returns {string} - Alternate language path
 */
export const getAlternateAboutPath = (currentLanguage) => {
  return currentLanguage === 'he' ? '/about' : '/about-heb';
};

/**
 * Detect language from post frontmatter or content
 * @param {Object} post - Post object with frontmatter
 * @returns {string} - Language code ('en' or 'he')
 */
export const detectLanguage = (post) => {
  return post?.frontmatter?.language || 'en';
};

/**
 * Get language display name
 * @param {string} languageCode - Language code ('en' or 'he')
 * @returns {string} - Display name
 */
export const getLanguageDisplayName = (languageCode) => {
  const names = {
    'en': 'English',
    'he': 'עברית'
  };
  return names[languageCode] || 'English';
};