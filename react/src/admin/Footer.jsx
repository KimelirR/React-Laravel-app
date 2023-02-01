import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      {/* <Link
        className="btn btn-try-builder btn-bg-gradient-x-purple-red btn-glow white"
        to="https://www.themeselection.com/layout-builder/horizontal"
        target="_blank"
      >
        Try Layout Builder
      </Link> */}
      <footer className="footer footer-static footer-light navbar-border navbar-shadow">
        <div className="clearfix blue-grey lighten-2 text-sm-center mb-0 px-2">
          <span className="float-md-left d-block d-md-inline-block">
            2023 © Copyright{" "}
            {/* <Link
              className="text-bold-800 grey darken-2"
              to="https://themeselection.com"
              target="_blank"
            >
              ThemeSelection
            </Link> */}
          </span>
          {/* <ul className="list-inline float-md-right d-block d-md-inline-blockd-none d-lg-block mb-0">
            <li className="list-inline-item">
              <Link
                className="my-1"
                to="#"
                target="_blank"
              >
                {" "}
                More themes
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                className="my-1"
                to="#"
                target="_blank"
              >
                Support
              </Link>
            </li>
          </ul> */}
        </div>
      </footer>
    </>
  );
}

export default Footer
