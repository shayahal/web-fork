import { Link } from 'gatsby';
import React from 'react';

import profileImg from '../../images/profile.jpg';

const classes = {
  wrapper: 'block mb-6 md:flex font-huninn animate-fade-in-up',
  imageWrapper: 'w-full max-w-150 animate-scale-in',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20 font-huninn animate-fade-in-up',
  name: 'text-5xl text-terracotta font-bold leading-tight hover:text-sage font-play animated-link',
  description: 'text-sage font-huninn',
  list: 'mt-6 uppercase tracking-wider font-huninn',
  item: 'inline list-none pr-4',
  link:
    'inline-block py-2 font-semibold text-xs text-sage hover:text-terracotta font-huninn animated-link',
};

const Header = ({ metadata = {}, noBlog = false, showProfileImage = true }) => {
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
        <ul className={classes.list}>
          <li className={classes.item}>
            <Link className={classes.link} to="/">
              About
            </Link>
          </li>
          {!noBlog && (
            <li className={classes.item}>
              <Link className={classes.link} to="/blog">
                Blog
              </Link>
            </li>
          )}
          <li className={classes.item}>
            <Link className={classes.link} to="/meditations">
              Meditations
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
          <li className={classes.item}>
            <Link className={classes.link} to="/recommendations">
              Recommendations
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
