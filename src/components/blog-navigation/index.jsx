import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'w-full bg-blue-100 border-b border-blue-200',
  container: 'max-w-6xl mx-auto px-4 py-3',
  nav: 'flex items-center justify-between',
  name: 'text-xl font-bold text-blue-700',
  links: 'flex items-center space-x-6',
  link: 'text-blue-700 hover:text-blue-900 font-medium transition-colors duration-200',
  activeLink: 'text-blue-900 underline',
  icons: 'flex items-center space-x-4',
  icon: 'text-blue-700 hover:text-blue-900 transition-colors duration-200',
};

const BlogNavigation = ({ currentPage = 'blog' }) => {
  const navigationItems = [
    { title: 'About', path: '/', key: 'about' },
    { title: 'Blog', path: '/blog', key: 'blog' },
    { title: 'Meditations', path: '/meditations', key: 'meditations' },
    { title: 'Cocktails', path: '/cocktails', key: 'cocktails' },
    { title: 'Travel', path: '/travel', key: 'travel' },
    { title: 'Top Posts', path: '/top-posts', key: 'top-posts' },
  ];

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <div className={classes.name}>
            <Link to="/">Neel Nanda</Link>
          </div>
          
          <div className={classes.links}>
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`${classes.link} ${
                  currentPage === item.key ? classes.activeLink : ''
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          
          <div className={classes.icons}>
            <a href="mailto:contact@example.com" className={classes.icon}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
            <a href="https://youtube.com" className={classes.icon}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
            </a>
            <a href="https://twitter.com" className={classes.icon}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BlogNavigation; 