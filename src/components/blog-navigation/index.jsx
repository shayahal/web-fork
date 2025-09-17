import { Link, useStaticQuery, graphql } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'w-full bg-blue-100 border-b border-blue-200 animate-fade-in-up',
  container: 'max-w-6xl mx-auto px-4 py-3',
  nav: 'flex items-center justify-between',
  name: 'text-xl font-bold text-blue-700',
  links: 'flex items-center space-x-6',
  link: 'text-blue-700 hover:text-blue-900 font-medium transition-colors duration-200 animated-link',
  activeLink: 'text-blue-900 underline',
  linkWithCount: 'flex items-center space-x-2',
  count: 'bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full font-medium tag-item',
  icons: 'flex items-center space-x-4',
  icon: 'text-blue-700 hover:text-blue-900 transition-colors duration-200',
};

const BlogNavigation = ({ currentPage = 'blog', metadata = {} }) => {
  const data = useStaticQuery(graphql`
    query NavigationPostCounts {
      cocktails: allMarkdownRemark(
        filter: { frontmatter: { tags: { in: ["cocktails"] } } }
      ) {
        totalCount
      }
      ai: allMarkdownRemark(
        filter: { frontmatter: { tags: { in: ["ai", "artificial-intelligence", "technology"] } } }
      ) {
        totalCount
      }
      travel: allMarkdownRemark(
        filter: { frontmatter: { tags: { in: ["travel", "adventure", "places"] } } }
      ) {
        totalCount
      }
      allPosts: allMarkdownRemark {
        totalCount
      }
    }
  `);

  const navigationItems = [
    { title: 'About', path: '/', key: 'about' },
    { title: 'All Posts', path: '/blog', key: 'blog', count: data.allPosts.totalCount },
    { title: 'AI', path: '/meditations', key: 'meditations', count: data.ai.totalCount },
    { title: 'Cocktails', path: '/cocktails', key: 'cocktails', count: data.cocktails.totalCount },
    { title: 'Travel', path: '/travel', key: 'travel', count: data.travel.totalCount },
    { title: 'Top Posts', path: '/top-posts', key: 'top-posts' },
    { title: 'Recommendations', path: '/recommendations', key: 'recommendations' },
  ];

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <div className={classes.links}>
            {navigationItems.map((item, index) => (
              <div key={item.key} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <Link
                  to={item.path}
                  className={`${classes.link} ${
                    currentPage === item.key ? classes.activeLink : ''
                  }`}
                >
                  {item.title}
                </Link>
                {item.count !== undefined && (
                  <span className={classes.count}>{item.count}</span>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BlogNavigation; 