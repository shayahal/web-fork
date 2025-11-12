import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';

const classes = {
  wrapper: 'flex items-center space-x-2 ml-4',
  toggle: 'relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2',
  toggleActive: 'bg-sage',
  toggleInactive: 'bg-blush',
  toggleDisabled: 'bg-gray-300 cursor-not-allowed opacity-50',
  slider: 'inline-block w-4 h-4 transform bg-white rounded-full transition-transform',
  sliderLeft: 'translate-x-1',
  sliderRight: 'translate-x-6',
  label: 'text-xs font-semibold text-nav-dark font-lora',
  labelActive: 'text-sage',
  labelInactive: 'text-nav-dark opacity-60',
};

const LanguageToggle = ({ currentLanguage = 'en', alternateUrl = null, showLabels = true }) => {
  const [isHebrew, setIsHebrew] = useState(currentLanguage === 'he');

  useEffect(() => {
    setIsHebrew(currentLanguage === 'he');
  }, [currentLanguage]);

  const handleToggle = () => {
    if (alternateUrl) {
      // Navigate to alternate language version using Gatsby's navigate
      navigate(alternateUrl);
    } else {
      // Just toggle the visual state if no alternate URL
      setIsHebrew(!isHebrew);
    }
  };

  return (
    <div className={classes.wrapper}>
      {showLabels && (
        <span className={`${classes.label} ${!isHebrew ? classes.labelActive : classes.labelInactive}`}>
          EN
        </span>
      )}
      
      <button
        className={`${classes.toggle} ${
          !alternateUrl 
            ? classes.toggleDisabled 
            : isHebrew 
              ? classes.toggleActive 
              : classes.toggleInactive
        }`}
        onClick={handleToggle}
        aria-label={`Switch to ${isHebrew ? 'English' : 'Hebrew'}`}
        disabled={!alternateUrl}
      >
        <span className={`${classes.slider} ${isHebrew ? classes.sliderRight : classes.sliderLeft}`} />
      </button>
      
      {showLabels && (
        <span className={`${classes.label} ${isHebrew ? classes.labelActive : classes.labelInactive}`}>
          עב
        </span>
      )}
    </div>
  );
};

export default LanguageToggle;