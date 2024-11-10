import { Outlet } from 'react-router-dom';

import './Layout.css';

function Layout() {
  return (
    <>
      <div className="banner">
        <div className="content">
          <a className="logo" href="/">
            Movies database
          </a>
        </div>
      </div>
      <div className="layout">
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
