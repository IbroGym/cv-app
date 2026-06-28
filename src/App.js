import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Panel from './components/Panel';
import Home from './pages/Home';
import Inner from './pages/Inner';
import './App.scss';

function AppLayout() {
  const location = useLocation();
  const isInnerPage = location.pathname === '/inner';

  return (
    <div className="app">
      {isInnerPage && <Panel />}
      <main className={isInnerPage ? 'main-content with-panel' : 'main-content'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inner" element={<Inner />} />
        </Routes>
      </main>
    </div>
  );
}

export default AppLayout;
