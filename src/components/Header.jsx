import { Link } from "react-router-dom";
import React from "react";

function Header({ text, buttonBg, bg }) {
  return (
    <div className={`${bg}`}>
      <header
        className={`${text} container mx-auto flex justify-between items-center px-3 md:px-6 py-10 font-bold flex-wrap space-y-6 md:space-y-0 `}
      >
        <Link to="/">
          <img className="h-12 md:h-16" src="./Union.png" alt="logo" />
        </Link>

        <div className="md:space-x-10 space-x-4 text-sm md:text-md flex items-center mx-auto md:m-0">
          <Link to="/about">
            <p>ABOUT US</p>
          </Link>
          <Link to="/blog">
            <p>BLOG</p>
          </Link>
          <Link to="/github">
            <p>REPOS</p>
          </Link>
          <Link to="/contact">
            <p
              className={`md:px-6 md:py-3 ${buttonBg} rounded-full text-center`}
            >
              CONTACT US
            </p>
          </Link>
        </div>

        {/* <div className="inline-flex md:hidden">
          <Menu />
        </div> */}
      </header>

      {/* dropdown  */}
      {/* <div className="flex flex-col space-y-2 md:hidden">
        <p>ABOUT US</p>
        <p>BLOG</p>
        <p className="px-6 py-5 w- bg-blue-400 rounded-full text-center">
          CONTACT US
        </p>
      </div> */}
    </div>
  );
}

export default Header;
