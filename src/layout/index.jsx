import React from 'react';
import Header from './header';
import Sidebar from './sidebar';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-white">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
