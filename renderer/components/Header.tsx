
import React, { useEffect, useState } from "react";
import Link from "next/link"
import { FaBars } from "react-icons/fa";



const Header = () => {

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
          <Link href="/home">
            <a><img src="./images/logo.png" width={40} height={40} alt="Logo" loading="lazy" /></a>
          </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link href="/home"><a className="nav-link" href="#">Home</a></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Flight</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Packages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Visa</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};





export default Header;
