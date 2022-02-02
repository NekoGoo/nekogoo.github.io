import React from 'react';
import { Link } from 'react-router-dom';

// import '../../styles/index.scss';
// import '../../styles/main.scss';
// import '../../styles/fonts.scss';

function NavHeader() {
  return (
    <header className="p-2 mb-4 border-bottom nav-main-bg">
      <nav className="container d-flex flex-wrap">
        <ul className="nav justify-content-lg-start col-12 col-lg-auto me-lg-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 candy-shop nekogoo-header">
              NekoGoo
            </Link>
          </li>
        </ul>
        <ul className="nav justify-content-center col-12 col-lg-auto me-lg-auto mb-2 mb-md-0">
          <li className="nav-item">
            <Link to="/" className="nav-link ml-5 px-2 link-secondary">
              Home
            </Link>
          </li>
          {/* <li className="nav-item"><a className="nav-link px-2 link-dark">Blog</a></li> */}
          <li className="nav-item">
            <Link to="./about" className="nav-link ml-5 px-2 link-dark">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavHeader;
