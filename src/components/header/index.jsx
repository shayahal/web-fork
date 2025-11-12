import { Link } from 'gatsby';
import React from 'react';

import profileImg from '../../images/profile.jpg';
import LanguageToggle from '../language-toggle';

const classes = {
  wrapper: 'block mb-6 md:flex font-lora animate-fade-in-up',
  imageWrapper: 'w-full max-w-150 animate-scale-in',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20 font-lora animate-fade-in-up',
  name: 'text-5xl text-terracotta font-bold leading-tight hover:text-sage font-play animated-link',
  description: 'text-sage font-lora',
  list: 'mt-6 uppercase tracking-wider font-huninn',
  item: 'inline list-none pr-4',
  link:
    'inline-block py-2 font-semibold text-xs text-nav-dark hover:text-nav-darker font-huninn animated-link',
};

const Header = ({ metadata = {}, noBlog = false, showProfileImage = true, currentLanguage = 'en', alternateUrl = null }) => {
  return (
    <div className={classes.wrapper}>
      {showProfileImage && (
        <div className={classes.imageWrapper}>
          <Link to="/">
            <img className={classes.image} src={profileImg} alt={metadata.name} />
          </Link>
        </div>
      )}
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{metadata.name}</Link>
        </h1>
        <p className={classes.description}>{metadata.description}</p>
        <div className="flex items-center justify-between">
          <ul className={classes.list}>
            <li className={classes.item}>
              <Link className={classes.link} to="/">
                About
              </Link>
            </li>
            <li className={classes.item}>
              <Link className={classes.link} to="/thoughts">
                Thoughts
              </Link>
            </li>
            <li className={classes.item}>
              <Link className={classes.link} to="/meditations">
                Tech
              </Link>
            </li>
            <li className={classes.item}>
              <Link className={classes.link} to="/cocktails">
                Cocktails
              </Link>
            </li>
            <li className={classes.item}>
              <Link className={classes.link} to="/travel">
                Travel
              </Link>
            </li>
            <li className={classes.item}>
              <Link className={classes.link} to="/top-posts">
                Top Posts
              </Link>
            </li>
          </ul>
          <LanguageToggle 
            currentLanguage={currentLanguage}
            alternateUrl={alternateUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
