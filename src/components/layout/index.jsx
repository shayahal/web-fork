import React from 'react';

const classes = {
  wrapper: 'p-8 relative max-w-screen-xl xs:p-24 font-huninn animate-fade-in bg-cream min-h-screen',
  outerWrapper: 'relative font-huninn bg-cream',
  // Simplified decorative element using CSS instead of complex SVG
  decoration: 'hidden fixed transform right-0 top-5 z-0 xl:block w-96 h-full opacity-30',
};

const Layout = ({ children }) => {
  return (
    <div className={classes.outerWrapper}>
      {/* Simplified decorative background using CSS pattern */}
      <div 
        className={classes.decoration}
        style={{
          background: `repeating-linear-gradient(
            45deg,
            #EBD9D1,
            #EBD9D1 4px,
            transparent 4px,
            transparent 20px
          )`
        }}
      />
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
};

export default Layout;
