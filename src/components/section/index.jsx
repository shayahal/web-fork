import React from 'react';

const classes = {
  wrapper: 'block pt-12 md:flex font-huninn animate-fade-in-up',
  title: 'pb-6 md:w-full md:max-w-150 md:p-0 animate-slide-in-left',
  heading:
    'font-xs font-light tracking-widest text-sm text-sage leading-normal uppercase font-play',
  content: 'flex-none text-lg text-text-dark font-light md:flex-1 md:pl-20 font-huninn',
};

const Section = ({ title, children }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <h2 className={classes.heading}>{title}</h2>
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Section;
