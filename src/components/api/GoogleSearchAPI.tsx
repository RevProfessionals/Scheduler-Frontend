import React, { useEffect } from 'react';

const GoogleSearch: React.FC = () => {
  useEffect(() => {
    const loadGoogleSearch = () => {
      const gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = 'https://cse.google.com/cse.js?cx=e13e4c7bc233a4a45';
      const s = document.getElementsByTagName('script')[0];
      s.parentNode?.insertBefore(gcse, s);
    };

    loadGoogleSearch();
  }, []);

  return <div className="gcse-search"></div>;
};

export default GoogleSearch;