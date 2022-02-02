import React from 'react';
import { Outlet } from 'react-router-dom';

import NavHeader from './NavHeader';
import NavFooter from './NavFooter';

function Layout() {
  return (
    <>
      <NavHeader />

      <Outlet />

      <NavFooter />
    </>
  );
}

export default Layout;
