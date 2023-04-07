import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';

function App() {
  const location = useLocation();

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
    </>
  );
}

export default App;
