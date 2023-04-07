import React, { useEffect } from 'react';

const { VITE_GA } = import.meta.env;

declare global {
  interface Window {
    _gaq: Array<Array<string>> | undefined;
  }
}

const GoogleAnalytics: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src =
      ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') +
      '.google-analytics.com/ga.js';

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode?.insertBefore(script, firstScript);

    window._gaq = window._gaq || [];
    window._gaq.push(['_setAccount', VITE_GA]);
    window._gaq.push(['_trackPageview']);
  }, []);

  return null;
};

export default GoogleAnalytics;
