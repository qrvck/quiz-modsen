import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'widgets/Header';
import { Navigation } from 'widgets/Navigation';

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />

      <Navigation />
    </>
  );
}
