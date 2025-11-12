import React from 'react';
import { Link } from 'gatsby';
import { getAlternateLanguageSlug } from '../../utils/languageUtils';

const TranslateSection = ({ 
  posts = [], 
  currentLanguage = 'en',
  currentSlug = null,
  title = null 
}) => {
  // Get ALL posts in the current page's language only (excluding posts in other languages completely)
  const getPostsInCurrentLanguage = () => {
    if (!posts || posts.length === 0) return [];
    
    const filteredPosts = [];
    
    posts.forEach(edge => {
      const post = edge.node;
      const postSlug = post.fields?.slug;
      const postLanguage = post.frontmatter?.language || (postSlug?.includes('-en') ? 'en' : 'he');
      
      if (!postSlug) return;
      
      // STRICT FILTER: Only include posts that exactly match the current page's language
      // Hebrew pages show ONLY Hebrew posts, English pages show ONLY English posts
      if (postLanguage === currentLanguage) {
        filteredPosts.push(post);
      }
    });
    
    return filteredPosts.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);
      return dateB - dateA;
    });
  };
  
  const postsInLanguage = getPostsInCurrentLanguage();
  
  if (postsInLanguage.length === 0) {
    return null;
  }
  
  const sectionTitle = title || (currentLanguage === 'he' 
    ? 'פוסטים נוספים' 
    : 'More Posts');
  
  return (
    <div className="mt-12 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-terracotta mb-6 animate-fade-in-up font-lora">
        {sectionTitle}
      </h2>
      <div className="space-y-6">
        {postsInLanguage.map((post, index) => (
          <article 
            key={post.fields?.slug || post.id} 
            className="pb-6 post-card animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2 py-1 text-cream text-xs rounded font-medium ${
                currentLanguage === 'he' ? 'bg-sage' : 'bg-terracotta'
              }`}>
                {currentLanguage === 'he' ? 'עברית' : 'English'}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-terracotta mb-2 font-lora">
              <Link 
                to={post.fields?.slug || '#'} 
                className="animated-link hover:text-sage transition-colors"
              >
                {post.frontmatter.title}
              </Link>
            </h2>
            <p className="text-text-dark mb-3 font-lora">{post.frontmatter.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-sm text-text-dark font-lora">{post.frontmatter.date}</p>
              {post.frontmatter.tags && (
                <div className="flex gap-2">
                  {post.frontmatter.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-blush text-terracotta text-sm rounded-full font-medium hover:bg-sage hover:text-cream transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TranslateSection;
