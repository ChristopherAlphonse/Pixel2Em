import { Location, Route, Routes, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

import Dashboard from './pages/Dashboard';
import GoogleAnalytics from './GoogleAnalytics';
import PageNotFound from './pages/PageNotFound';

function App(): JSX.Element {
  const location: Location = useLocation();

  useEffect(() => {
    document.querySelector('html')!.style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html')!.style.scrollBehavior = '';
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <GoogleAnalytics />
    </>
  );
}

export default App;
