import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6 font-heebo',
  name: 'font-semibold text-gray-900 pb-1 font-heebo',
  description: 'text-md text-gray-600 font-light font-heebo',
};

const SummaryItem = ({ name, description, link = false, internal = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default SummaryItem;
