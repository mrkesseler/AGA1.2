import React from 'react';
import { Outlet } from 'react-router-dom';
import { Squares } from './Squares';

export function Layout() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Squares direction="diagonal" speed={0.3} borderColor="#1e40af" hoverFillColor="#1e40af" squareSize={50} />
      </div>
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
}