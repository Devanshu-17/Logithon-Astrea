import React, { useEffect } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  useEffect(() => {
    const navbar = document.querySelector(".rn-header");
    const sticky = navbar.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="rn-header haeder-default black-logo-version header--fixed header--sticky">
      <div className="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
        {/* Start Header Left */}
        <div className="col-lg-2 col-6">
          <div className="header-left">
            <div className="logo">
            <Link to="/">
              <a>
                <span style={{ color: "white", fontSize: "x-large" }}>
                Astrea
                </span>
                {/* <img src="assets/images/logo/logo.png" alt="Nuron logo" /> */}
              </a>
              </Link>
            </div>
          </div>
        </div>
        {/* End Header Left */}
        {/* Start Header Center */}
        <div className="col-lg-10 col-6">
          <div className="header-center">
            <nav
              id="sideNav"
              className="mainmenu-nav navbar-example2 d-none d-xl-block"
            >
              {/* Start Mainmanu Nav */}
             
                {/* <li class="nav-item">
              <a class="nav-link smoth-animation" href="#faq">FAQ</a>
            </li> */}
                {/* <li class="nav-item">
              <a
                class="nav-link"
                target="_blank"
                href="http://rainbowit.net/docs/nuron-react/"
                >Documentation</a
              >
            </li> */}
                {/* <li class="nav-item">
              <a
                class="nav-link"
                target="_blank"
                href="https://support.rainbowit.net/support/login"
                >Friendly Support</a
              >
            </li> */}
              {/* End Mainmanu Nav */}
            </nav>
            {/* Start Header Right  */}
            <div className="header-right">
            <Link to="/">
              <a className="rn-btn" target="_blank" href="Upload.html">
                <span>Home!</span>
              </a>
              </Link>
              <div className="hamberger-menu d-block d-xl-none">
                <i id="menuBtn" className="feather-menu humberger-menu" />
              </div>
              <div className="close-menu d-block">
                <span className="closeTrigger">
                  <i data-feather="x" />
                </span>
              </div>
            </div>
            {/* End Header Right  */}
          </div>
        </div>
        {/* End Header Center */}
      </div>
    </header>
  );
}
