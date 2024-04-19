import React from "react";
import "./css/App.css";
import "./css/aos.css";
import "./css/bootstrap.min.css";
import "./css/feather.css";
import "./css/slick.css";
import "./css/slick.theme.css";
import indexImage from "./images/preview/index-1.png";
import indexImage2 from "./images/preview/index-2.png";
import indexImage3 from "./images/preview/index-3.png";
import previewBg from "./images/preview/Bug_Loader.gif";
import logo from "./images/logo/logo.png";
import { ReactComponent as ActivityIcon } from "./images/svg/activity.svg";
import { ReactComponent as SmartPhone } from "./images/svg/smartphone.svg";
import { ReactComponent as HeadPhones } from "./images/svg/headphones.svg";
import { ReactComponent as Terminal } from "./images/svg/terminal.svg";
import { ReactComponent as Code } from "./images/svg/code.svg";
import { useEffect, useState } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js"
import { TypeAnimation } from "react-type-animation";
// import Upload from "./Upload.js";

function App() {
  return (
    <body
      class="template-color-1 spybody"
      data-spy="scroll"
      data-target=".navbar-example2"
      data-offset="150"
    >
      <img
        src={previewBg}
        style={{
          position: "fixed",
          top: "-200px",
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: "0.1",
        }}
      />

      <div className="active-dark">
        {/* Start Header */}
        <Navbar />
        {/* End Header Area */}
        {/* Start Popup Mobile Menu  */}
        <div className="popup-mobile-menu">
          <div className="inner">
            <div className="menu-top">
              <div className="menu-header">
                <a className="logo" href="../../public/index.html">
                  <span style={{ color: "white", fontSize: "x-large" }}>
                    LoGiThon
                  </span>
                </a>
                <div className="close-button">
                  <button className="close-menu-activation close">
                    <i data-feather="x" />
                  </button>
                </div>
              </div>
              <p className="discription">
                Fully Feautured NFT Marketplace, It’s come with a creative
                design.
              </p>
            </div>
            <div className="content">
              <ul className="primary-menu nav nav-pills">
                <li className="nav-item">
                  <a className="nav-link smoth-animation active" href="#demo">
                    View Demo
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smoth-animation" href="#feature">
                    Feature
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smoth-animation" href="#faq">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    target="_blank"
                    href="http://rainbowit.net/docs/nuron-react/"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    target="_blank"
                    href="https://support.rainbowit.net/support/login"
                  >
                    Friendly Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Header Area */}
        {/* Start Popup Mobile Menu  */}
        <div className="popup-mobile-menu">
          <div className="inner">
            <div className="menu-top">
              <div className="menu-header">
                <a className="logo" href="../../public/index.html">
                  <img src={logo} alt="nuron logo" />
                </a>
                <div className="close-button">
                  <button className="close-menu-activation close">
                    <i data-feather="x" />
                  </button>
                </div>
              </div>
              <p className="discription">
                Fully Feautured NFT Marketplace, It’s come with a creative
                design.
              </p>
            </div>
            <div className="content">
              <ul className="primary-menu nav nav-pills">
                <li className="nav-item">
                  <a className="nav-link smoth-animation active" href="#demo">
                    View Demo
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smoth-animation" href="#feature">
                    Feature
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smoth-animation" href="#faq">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    target="_blank"
                    href="http://rainbowit.net/docs/nuron-html/"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    target="_blank"
                    href="https://support.rainbowit.net/support/login"
                  >
                    Friendly Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Popup Mobile Menu  */}
        {/* Pv Slider Area Start */}
        <div className="pv-slider-area slider-wrapper">
          <div className="slider-activation">
            <div className="slide slide-style-1 slider-fixed--height d-flex align-items-center">
              <div className="container position-relative">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="inner-content">
                      <h1 className="title mt--60">
                        Smart PDF To <br />
                        Data Coverter
                        <br />
                        <TypeAnimation
                          sequence={[
                            "UPLOAD",
                            1000,
                            "EXTRACT",
                            1000,
                            "EDIT",
                            1000,
                            "EXPORT",
                            1000,
                          ]}
                          speed={30}
                          wrapper="span"
                          repeat={Infinity}
                          style={{
                            fontSize: "1em",
                            color: "#00a3ff",
                            fontFamily: "Poppins",
                            fontWeight: "700",
                            animation: "ease-in"
                          }}
                        />
                        <span className="header-caption" id="page-top">
                          {/* type headline start*/}
                          <span className="cd-headline clip is-full-width"></span>
                          <div className="nav-btn mt--39">
                            <a
                              className="rn-btn"
                              target="_blank"
                              href="Upload.html"
                            >
                              <a className="rn-btn" to="/Upload">
                                <span>Get Started</span>
                              </a>
                              {/* <span>Get Started</span> */}
                              {/* <Router>
                                <div>
                                  <Route exact path="/" component={HomePage} />
                                  {/* <Route path="/about" component={AboutPage} /> */}
                              {/* </div> */}
                              {/* </Router> */}
                            </a>
                          </div>
                          {/* type headline end */}
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="service-wrapper service-white">
                  <div className="row row--25">
                    {/* Start Single Service */}
                    <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_lg--30 mt_md--30 mt_sm--30">
                      <div className="rn-service">
                        <div className="inner">
                          <div className="icon">
                            <ActivityIcon />
                          </div>
                          <div className="content">
                            <h4 className="title">Fast Performance</h4>
                            <p className="description">
                              Optimized for a smaller build size, faster dev
                              compilation and dozens of other improvements.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End SIngle Service */}
                    {/* Start Single Service */}
                    <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_lg--30 mt_md--30 mt_sm--30">
                      <div className="rn-service">
                        <div className="inner">
                          <div className="icon">
                            <SmartPhone />
                          </div>
                          <div className="content">
                            <h4 className="title">Perfect Responsive</h4>
                            <p className="description">
                              Our Template is full Perfect for all device. You
                              can visit our template all device easily.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End SIngle Service */}
                    {/* Start Single Service */}
                    <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_lg--30 mt_md--30 mt_sm--30">
                      <div className="rn-service">
                        <div className="inner">
                          <div className="icon">
                            <HeadPhones />
                          </div>
                          <div className="content">
                            <h4 className="title">
                              Fast &amp; Friendly Support
                            </h4>
                            <p className="description">
                              We are provide 24 hours support for all
                              clients.You can purchase without hesitation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End SIngle Service */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pv Slider Area End */}
        <div className="main-wrapper">
          {/* Portfolio area Start */}
          <div id="demo" className="home-demo-area pt--60 pb--120">
            <div className="wrapper plr--120">
              <div className="row mb--20">
                <div className="col-12">
                  <h3 className="text-center title">Demo</h3>
                  {/* <h3 class="text-center title"><span>16</span> Demo Pages</h3> */}
                  {/* <p class="text-center title-subtit">
            Choose one of styles or cutomize easily your site following
            your ideas. More demos are comeing soon
          </p> */}
                </div>
              </div>
              <div className="row row--20 mt_dec--60">
                {/* Start Single Demo  */}
                <div className="col-xl-4 col-md-6 col-12">
                  <div className="single-demo">
                    <div className="thumbnail">
                      <img
                        className="w-100"
                        src={indexImage}
                        alt="NFT Images"
                      />
                      <a target="_blank" href="" className="preview-btn">
                        <span className="rn-btn">Live Preview</span>
                      </a>
                    </div>
                    <div className="content">
                      <h3 className="title">
                        <a href="">
                          Demo One
                          <i className="feather feather-arrow-up-right" />
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* End Single Demo  */}
                {/* Start Single Demo  */}
                <div className="col-xl-4 col-md-6 col-12">
                  <div className="single-demo">
                    <div className="thumbnail">
                      <img
                        className="w-100"
                        src={indexImage2}
                        alt="NFT Images"
                      />
                      <a target="_blank" href="" className="preview-btn">
                        <span className="rn-btn">Live Preview</span>
                      </a>
                    </div>
                    <div className="content">
                      <h3 className="title">
                        <a href="">
                          Demo Two
                          <i className="feather-arrow-up-right" />
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* End Single Demo  */}
                {/* Start Single Demo  */}
                <div className="col-xl-4 col-md-6 col-12">
                  <div className="single-demo">
                    <div className="thumbnail">
                      <img
                        className="w-100"
                        src={indexImage3}
                        alt="NFT Images"
                      />
                      <a target="_blank" href="" className="preview-btn">
                        <span className="rn-btn">Live Preview</span>
                      </a>
                    </div>
                    <div className="content">
                      <h3 className="title">
                        <a href="">
                          Demo Three
                          <i className="feather-arrow-up-right" />
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* End Single Demo  */}
                {/* Start Single Demo  */}
                {/* <div class="col-xl-4 col-md-6 col-12"> */}
                {/* <div class="single-demo">
            <div class="thumbnail">
              <img
                class="w-100"
                src="assets/images/preview/index-4.png"
                alt="NFT Images"
              />
              <a target="_blank" href="" class="preview-btn">
                <span class="rn-btn">Live Preview</span>
              </a>
            </div>
            <div class="content">
              <h3 class="title">
                <a href=""
                  >Demo Four<i class="feather-arrow-up-right"></i
                ></a>
              </h3>
            </div>
          </div> */}
                {/* </div> */}
                {/* End Single Demo  */}
                {/* Start Single Demo  */}
                {/* <div class="col-xl-4 col-md-6 col-12">
          <div class="single-demo">
            <div class="thumbnail">
              <img
                class="w-100"
                src="assets/images/preview/index-5.png"
                alt="NFT Images"
              />
              <a target="_blank" href="" class="preview-btn">
                <span class="rn-btn">Live Preview</span>
              </a>
            </div>
            <div class="content">
              <h3 class="title">
                <a href=""
                  >Demo Five<i class="feather-arrow-up-right"></i
                ></a>
              </h3>
            </div>
          </div>
        </div> */}
                {/* End Single Demo  */}
                {/* Start Single Demo  */}
                {/* <div class="col-xl-4 col-md-6 col-12">
          <div class="single-demo">
            <div class="thumbnail">
              <img
                class="w-100"
                src="assets/images/preview/index-6.png"
                alt="NFT Images"
              />
              <a target="_blank" href="" class="preview-btn">
                <span class="rn-btn">Live Preview</span>
              </a>
            </div>
            <div class="content">
              <h3 class="title">
                <a href=""
                  >Demo Six<i class="feather-arrow-up-right"></i
                ></a>
              </h3>
            </div>
          </div> */}
                {/* </div> */}
                {/* End Single Demo  */}
                {/* Start Single Demo  */}
                {/* <div class="col-xl-4 col-md-6 col-12">
          <div class="single-demo">
            <div class="thumbnail">
              <img
                class="w-100"
                src="assets/images/preview/index-7.png"
                alt="NFT Images"
              />
              <a
                target="_blank"
                href="https://nuron-nextjs.vercel.app/index-07"
                class="preview-btn"
              >
                <span class="rn-btn">Live Preview</span>
              </a>
            </div>
            <div class="content">
              <h3 class="title">
                <a href="https://nuron-nextjs.vercel.app/index-07"
                  >Demo Seven<i class="feather-arrow-up-right"></i
                ></a>
              </h3>
            </div>
          </div>
        </div> */}
                {/* End Single Demo  */}
                {/* Start Single Demo  */}
                {/* <div class="col-xl-4 col-md-6 col-12">
          <div class="single-demo">
            <div class="thumbnail">
              <img
                class="w-100"
                src="assets/images/preview/index-8.png"
                alt="NFT Images"
              />
              <a
                target="_blank"
                href="https://nuron-nextjs.vercel.app/index-08"
                class="preview-btn"
              >
                <span class="rn-btn">Live Preview</span>
              </a>
            </div>
            <div class="content">
              <h3 class="title">
                <a href="https://nuron-nextjs.vercel.app/index-08"
                  >Demo Eight<i class="feather-arrow-up-right"></i
                ></a>
              </h3>
            </div>
          </div>
        </div> */}
                {/* End Single Demo  */}
                {/* Start Single Demo  */}
                {/* <div class="col-xl-4 col-md-6 col-12">
          <div class="single-demo">
            <div class="thumbnail">
              <img
                class="w-100"
                src="assets/images/preview/index-9.png"
                alt="NFT Images"
              />
              <a
                target="_blank"
                href="https://nuron-nextjs.vercel.app/index-09"
                class="preview-btn"
              >
                <span class="rn-btn">Live Preview</span>
              </a>
            </div>
            <div class="content">
              <h3 class="title">
                <a href="https://nuron-nextjs.vercel.app/index-09"
                  >Demo Nine<i class="feather-arrow-up-right"></i
                ></a>
              </h3>
            </div>
          </div>
        </div> */}
                {/* End Single Demo  */}
                {/* Start Single Demo  */}
                {/* <div class="col-xl-4 col-md-6 col-12">
          <div class="single-demo">
            <div class="thumbnail">
              <img
                class="w-100"
                src="assets/images/preview/index-10.png"
                alt="NFT Images"
              />
              <a
                target="_blank"
                href="https://nuron-nextjs.vercel.app/index-10"
                class="preview-btn"
              >
                <span class="rn-btn">Live Preview</span>
              </a>
            </div>
            <div class="content">
              <h3 class="title">
                <a href="https://nuron-nextjs.vercel.app/index-10"
                  >Demo Ten<i class="feather-arrow-up-right"></i
                ></a>
              </h3>
            </div>
          </div>
        </div> */}
                {/* End Single Demo  */}
                {/* Start Single Demo  */}
                {/* <div class="col-xl-4 col-md-6 col-12">
          <div class="single-demo">
            <div class="thumbnail">
              <img
                class="w-100"
                src="assets/images/preview/index-11.png"
                alt="NFT Images"
              />
              <a
                target="_blank"
                href="https://nuron-nextjs.vercel.app/index-11"
                class="preview-btn"
              >
                <span class="rn-btn">Live Preview</span>
              </a>
            </div>
            <div class="content">
              <h3 class="title">
                <a href="https://nuron-nextjs.vercel.app/index-11"
                  >Demo Eleven<i class="feather-arrow-up-right"></i
                ></a>
              </h3>
            </div>
          </div>
        </div> */}
                {/* End Single Demo  */}
                {/* Start Single Demo  */}
                {/* <div class="col-xl-4 col-md-6 col-12">
          <div class="single-demo">
            <div class="thumbnail">
              <img
                class="w-100"
                src="assets/images/preview/index-12.png"
                alt="NFT Images"
              />
              <a
                target="_blank"
                href="https://nuron-nextjs.vercel.app/index-12"
                class="preview-btn"
              >
                <span class="rn-btn">Live Preview</span>
              </a>
            </div>
            <div class="content">
              <h3 class="title">
                <a href="https://nuron-nextjs.vercel.app/index-12"
                  >Demo Twelve<i class="feather-arrow-up-right"></i
                ></a>
              </h3>
            </div>
          </div>
        </div> */}
                {/* End Single Demo  */}
                {/* Start Single Demo  */}
                {/* <div class="col-xl-4 col-md-6 col-12">
          <div class="single-demo">
            <div class="thumbnail">
              <img
                class="w-100"
                src="assets/images/preview/index-13.png"
                alt="NFT Images"
              />
              <a
                target="_blank"
                href="https://nuron-nextjs.vercel.app/index-13"
                class="preview-btn"
              >
                <span class="rn-btn">Live Preview</span>
              </a>
            </div>
            <div class="content">
              <h3 class="title">
                <a href="https://nuron-nextjs.vercel.app/index-13"
                  >Demo Thirteen<i class="feather-arrow-up-right"></i
                ></a>
              </h3>
            </div>
          </div>
        </div> */}
                {/* End Single Demo  */}
                {/* Start Single Demo  */}
                {/* <div class="col-xl-4 col-md-6 col-12">
          <div class="single-demo">
            <div class="thumbnail">
              <img
                class="w-100"
                src="assets/images/preview/index-14.png"
                alt="NFT Images"
              />
              <a
                target="_blank"
                href="https://nuron-nextjs.vercel.app/index-14"
                class="preview-btn"
              >
                <span class="rn-btn">Live Preview</span>
              </a>
            </div>
            <div class="content">
              <h3 class="title">
                <a href="https://nuron-nextjs.vercel.app/index-14"
                  >Demo Fourteen<i class="feather-arrow-up-right"></i
                ></a>
              </h3>
            </div>
          </div>
        </div> */}
                {/* End Single Demo  */}
                {/* Start Single Demo  */}
                {/* <div class="col-xl-4 col-md-6 col-12">
          <div class="single-demo">
            <div class="thumbnail">
              <img
                class="w-100"
                src="assets/images/preview/index-15.png"
                alt="NFT Images"
              />
              <a
                target="_blank"
                href="https://nuron-nextjs.vercel.app/index-15"
                class="preview-btn"
              >
                <span class="rn-btn">Live Preview</span>
              </a>
            </div>
            <div class="content">
              <h3 class="title">
                <a href="https://nuron-nextjs.vercel.app/index-15"
                  >Demo Fifteen<i class="feather-arrow-up-right"></i
                ></a>
              </h3>
            </div>
          </div>
        </div> */}
                {/* End Single Demo  */}
                {/* Start Single Demo  */}
                {/* <div class="col-xl-4 col-md-6 col-12">
          <div class="single-demo">
            <div class="thumbnail">
              <img
                class="w-100"
                src="assets/images/preview/index-16.png"
                alt="NFT Images"
              />
              <a
                target="_blank"
                href="https://nuron-nextjs.vercel.app/index-16"
                class="preview-btn"
              >
                <span class="rn-btn">Live Preview</span>
              </a>
            </div>
            <div class="content">
              <h3 class="title">
                <a href="https://nuron-nextjs.vercel.app/index-16"
                  >Demo Sixteen<i class="feather-arrow-up-right"></i
                ></a>
              </h3>
            </div>
          </div>
        </div> */}
                {/* End Single Demo  */}
                {/* Start Single Demo  */}
                {/* <div class="col-xl-4 col-md-6 col-12">
          <div class="single-demo coming-soon">
            <div class="thumbnail">
              <img
                class="w-100"
                src="assets/images/preview/coming-soon.png"
                alt="NFT Images"
              />
              <a
                target="_blank"
                href="https://nuron-nextjs.vercel.app/index-02"
                class="preview-btn"
              >
                <span class="rn-btn">Live Preview</span>
              </a>
            </div>
            <div class="content">
              <h3 class="title">
                <a href="https://nuron-nextjs.vercel.app/index-02"
                  >Coming Soon<i class="feather-arrow-up-right"></i
                ></a>
              </h3>
            </div>
          </div>
        </div> */}
                {/* End Single Demo  */}
                {/* Start Single Demo  */}
                {/* <div class="col-xl-4 col-md-6 col-12">
          <div class="single-demo coming-soon">
            <div class="thumbnail">
              <img
                class="w-100"
                src="assets/images/preview/coming-soon.png"
                alt="NFT Images"
              />
              <a
                target="_blank"
                href="https://nuron-nextjs.vercel.app/index-02"
                class="preview-btn"
              >
                <span class="rn-btn">Live Preview</span>
              </a>
            </div>
            <div class="content">
              <h3 class="title">
                <a href="https://nuron-nextjs.vercel.app/index-02"
                  >Coming Soon<i class="feather-arrow-up-right"></i
                ></a>
              </h3>
            </div>
          </div>
        </div> */}
                {/* End Single Demo  */}
              </div>
            </div>
          </div>
          {/* Portfolio Area End */}
          {/* inner Pages area start */}
          <div className="inner-page-area">
            <div className="wrapper plr--120">
              <div className="row mb--60">
                {/* <div class="col-lg-12">
          <h3 class="title text-center"><span>60</span> Inner Pages</h3>
          <p class="text-center title-subtit">
            Choose one of styles or cutomize easily your site following
            your ideas
          </p>
        </div>
      </div> */}
              </div>
            </div>
            {/* Enner pages area End */}
            {/* Feature Pages Starts */}
            <div id="feature" className="service-area pb--120">
              <div className="wrapper plr--120">
                <hr className="section-separator" />
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center pb--30">
                      <span className="subtitle">Our Nuron Feature</span>
                      <h2 className="title">Workflow</h2>
                    </div>
                  </div>
                </div>
                <div className="row g-5 service-main-wrapper">
                  {/* Start Single Service */}
                  <div className="col-lg-4 col-xl-4 col-xxl-3 col-md-6 col-sm-12 col-12 mt--50 mt_lg--30 mt_md--30 mt_sm--30">
                    <div className="rn-service">
                      <div className="inner">
                        <div className="icon">
                          <SmartPhone />
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <a href="#">Perfect Responsive</a>
                          </h4>
                          <p className="description">
                            Our Template is full Perfect for all device. You can
                            visit our template all device easily.
                          </p>
                          <a className="read-more-button" href="#"></a>
                        </div>
                      </div>
                      <a className="over-link" href="#" />
                    </div>
                  </div>
                  {/* End SIngle Service */}
                  {/* Start Single Service */}
                  <div className="col-lg-4 col-xl-4 col-xxl-3 col-md-6 col-sm-12 col-12 mt--50 mt_lg--30 mt_md--30 mt_sm--30">
                    <div className="rn-service">
                      <div className="inner">
                        <div className="icon">
                          <Code />
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <a href="#">Next JS</a>
                          </h4>
                          <p className="description">
                            Our Template is full Perfect for all device.It is
                            made by React &amp; Next JS Structure.
                          </p>
                          <a className="read-more-button" href="#">
                            <i className="feather-arrow-right" />
                          </a>
                        </div>
                      </div>
                      <a className="over-link" href="#" />
                    </div>
                  </div>
                  {/* End SIngle Service */}
                  {/* Start Single Service */}
                  <div className="col-lg-4 col-xl-4 col-xxl-3 col-md-6 col-sm-12 col-12 mt--50 mt_lg--30 mt_md--30 mt_sm--30">
                    <div className="rn-service">
                      <div className="inner">
                        <div className="icon">
                          <Terminal />
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <a href="#">Well Documented Codes</a>
                          </h4>
                          <p className="description">
                            The Nuron code is awesome well documented code. And
                            Its customization is very easily
                          </p>
                          <a className="read-more-button" href="#">
                            <i className="feather-arrow-right" />
                          </a>
                        </div>
                      </div>
                      <a className="over-link" href="#" />
                    </div>
                  </div>
                  {/* End SIngle Service */}
                  {/* Start Single Service */}
                  <div className="col-lg-4 col-xl-4 col-xxl-3 col-md-6 col-sm-12 col-12 mt--50 mt_lg--30 mt_md--30 mt_sm--30">
                    <div className="rn-service">
                      <div className="inner">
                        <div className="icon">
                          <ActivityIcon />
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <a href="#">Sass Available</a>
                          </h4>
                          <p className="description">
                            The tamplate has Sass available for css. You can
                            Change css by sass
                          </p>
                          <a className="read-more-button" href="#">
                            <i className="feather-arrow-right" />
                          </a>
                        </div>
                      </div>
                      <a className="over-link" href="#" />
                    </div>
                  </div>
                  {/* End SIngle Service */}
                  {/* Start Single Service */}
                  <div className="col-lg-4 col-xl-4 col-xxl-3 col-md-6 col-sm-12 col-12 mt--50 mt_lg--30 mt_md--30 mt_sm--30">
                    {/* <div class="rn-service">
            <div class="inner">
              <div class="icon">
                <i data-feather="repeat"></i>
              </div>
              <div class="content">
                <h4 class="title"><a href="#">Fast Loading Speed</a></h4>
                <p class="description">
                  Nuron is faster loading speed.Nuron create your theme so
                  much faster
                </p>
                <a class="read-more-button" href="#"
                  ><i class="feather-arrow-right"></i
                ></a>
              </div>
            </div>
            <a class="over-link" href="#"></a>
          </div> */}
                  </div>
                  {/* End SIngle Service */}
                  {/* Start Single Service */}
                  <div className="col-lg-4 col-xl-4 col-xxl-3 col-md-6 col-sm-12 col-12 mt--50 mt_lg--30 mt_md--30 mt_sm--30">
                    {/* <div class="rn-service">
            <div class="inner">
              <div class="icon">
                <i data-feather="pen-tool"></i>
              </div>
              <div class="content">
                <h4 class="title"><a href="#">Modern Design</a></h4>
                <p class="description">
                  Nuron is a modern creatuve design for Creative Agency ,
                  NFT etc....
                </p>
                <a class="read-more-button" href="#"
                  ><i class="feather-arrow-right"></i
                ></a>
              </div>
            </div>
            <a class="over-link" href="#"></a>
          </div> */}
                  </div>
                  {/* End SIngle Service */}
                  {/* Start Single Service */}
                  <div className="col-lg-4 col-xl-4 col-xxl-3 col-md-6 col-sm-12 col-12 mt--50 mt_lg--30 mt_md--30 mt_sm--30">
                    {/* <div class="rn-service">
            <div class="inner">
              <div class="icon">
                <i data-feather="music"></i>
              </div>
              <div class="content">
                <h4 class="title"><a href="#">24 Support System</a></h4>
                <p class="description">
                  We are provide 24 hours support for all clients.You can
                  purchase without hesitation.
                </p>
                <a class="read-more-button" href="#"
                  ><i class="feather-arrow-right"></i
                ></a>
              </div>
            </div>
            <a class="over-link" href="#"></a>
          </div> */}
                  </div>
                  {/* End SIngle Service */}
                  {/* Start Single Service */}
                  <div
                    data-aos-delay={800}
                    className="col-lg-4 col-xl-4 col-xxl-3 col-md-6 col-sm-12 col-12 mt--50 mt_lg--30 mt_md--30 mt_sm--30"
                  >
                    {/* <div class="rn-service">
            <div class="inner">
              <div class="icon">
                <i data-feather="bold"></i>
              </div>
              <div class="content">
                <h4 class="title">
                  <a href="#">Bootstrap 5 Comfortable</a>
                </h4>
                <p class="description">
                  Bootstrap 5 comfortable is available in Nuron. So layout
                  changes is so much easily
                </p>
                <a class="read-more-button" href="#"
                  ><i class="feather-arrow-right"></i
                ></a>
              </div>
            </div>
            <a class="over-link" href="#"></a>
          </div> */}
                  </div>
                  {/* End SIngle Service */}
                </div>
              </div>
            </div>
            {/* Feature Pages End */}
            {/* customer feedback */}
            {/* <div class="cuctomer-feedback-area">
    <div class="container plr_sm--20">
      <div class="row pb--50">
        <div class="col-lg-12">
          <div class="section-title text-center text-white mb--30">
            <span>Our Fantastic Envato Customers Reviews</span>
            <h2 class="title">Our Customer feedback</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mb--160">
          <div class="inner_page-slick_activation wide-control">
            <div class="tes-inner">
              <div class="single-testimonial">
                <div class="testimonial">
                  <div class="inner">
                    <div class="inner-top">
                      <div class="thumbnail">
                        <img
                          src="assets/images/icons/download.png"
                          alt="Download Images"
                        />
                      </div>
                      <div class="info">
                        <h4 class="title">RobertBalint1993</h4>
                        <p>@RobertBalint1993</p>
                      </div>
                    </div>
                    <div class="content">
                      <h5>Design Quality</h5>
                      <p>
                        Theme is really amazing, I love it because I can
                        customize it how I want and my shop looks amazing
                        with this template, for this price is totally
                        worth buying, fast loading speed and support is
                        really nice, thank you for creating this powerful
                        template and keep it up...
                      </p>
                      <div class="rating">
                        <img
                          src="assets/images/icons/rating.png"
                          alt="Rating Images"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tes-inner">
              <div class="single-testimonial">
                <div class="testimonial">
                  <div class="inner">
                    <div class="inner-top">
                      <div class="thumbnail">
                        <img
                          src="assets/images/icons/download.png"
                          alt="Download Images"
                        />
                      </div>
                      <div class="info">
                        <h4 class="title">bradensimpson1984</h4>
                        <p>@bradensimpson1984</p>
                      </div>
                    </div>
                    <div class="content">
                      <h5>Customer Support</h5>
                      <p>
                        I was having issues figuring out the light and
                        dark mode switcher and once I got some initial
                        feedback it helped me figure out the issue and we
                        are working well now. Service rep said he would
                        help me with building my site whenever needed so I
                        appreciate that.
                      </p>
                      <div class="rating">
                        <img
                          src="assets/images/icons/rating.png"
                          alt="Rating Images"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tes-inner">
              <div class="single-testimonial">
                <div class="testimonial">
                  <div class="inner">
                    <div class="inner-top">
                      <div class="thumbnail">
                        <img
                          src="assets/images/icons/download.png"
                          alt="Download Images"
                        />
                      </div>
                      <div class="info">
                        <h4 class="title">boc96</h4>
                        <p>@boc96</p>
                      </div>
                    </div>
                    <div class="content">
                      <h5>Customizability</h5>
                      <p>
                        I had been looking for a theme for weeks, I fell
                        in love with this at first glance. I waited a few
                        days before buying it, today a few weeks after the
                        purchase I confirm the quality of the product.
                        Extremely beautiful, customizable, with great
                        pre-set elements that help you with creativity.
                        Buy it!
                      </p>
                      <div class="rating">
                        <img
                          src="assets/images/icons/rating.png"
                          alt="Rating Images"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tes-inner">
              <div class="single-testimonial">
                <div class="testimonial">
                  <div class="inner">
                    <div class="inner-top">
                      <div class="thumbnail">
                        <img
                          src="assets/images/icons/download.png"
                          alt="Download Images"
                        />
                      </div>
                      <div class="info">
                        <h4 class="title">idnil</h4>
                        <p>@idnil</p>
                      </div>
                    </div>
                    <div class="content">
                      <h5>Design Quality</h5>
                      <p>
                        It is optimized perfectly and easy to use: I
                        created my landing page in less than one day, and
                        the result is astonishing. I am going to rate also
                        5 stars to the Customer Support: I asked for a
                        help and they replied to me in a very clear and
                        very fast (they helped me even if it's
                        Christmas!).
                      </p>
                      <div class="rating">
                        <img
                          src="assets/images/icons/rating.png"
                          alt="Rating Images"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
            {/* customer feedback End*/}
            {/* Accordion Area Start */}
            {/* <div id="faq" class="pv-feaq-area pb--120">
    <div class="container plr_sm--25">
      <div class="row g-5">
        <div class="col-lg-8">
          <div class="section-title mb--50 text-left">
            <span class="subtitle"
              >Check out our FAQ section to see if we can help.</span
            >
            <h2 class="title mb_sm--0">Have a<span>Question?</span></h2>
          </div>
          <div class="faq-area">
            <div
              class="accodion-style--1 pr--25 mt--20 mt_sm--0"
              id="accordionExample"
            >
              <div class="accordion__item">
                <h2 class="accordion__heading" id="headingOne">
                  <button
                    class="accordion__button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is Nuron ? How does it work?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="collapse show accordion__panel"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="rn-card-body">
                    Nuron is the NFT Marketplace for traders and creators.
                    It brings together collectors and creators, allowing
                    them to trade and exchange works as non-fungible
                    tokens. For creators, the work with the marketplace is
                    really simple; it all starts with uploading an item on
                    a blockchain, and then it can be traded as a
                    non-fungible asset. This theme offers various
                    personalization options to help you give the look you
                    require on your website. It is very easy to navigate
                    and fits various screen sizes.
                  </div>
                </div>
              </div>

              <div class="accordion__item">
                <h2 class="accordion__heading" id="headingTwo">
                  <button
                    class="accordion__button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How can I get the customer support?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="collapse accordion__panel"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="rn-card-body">
                    After purchasing the product need you any support you
                    can be share with us with sending mail to .
                  </div>
                </div>
              </div>

              <div class="accordion__item">
                <h2 class="accordion__heading" id="headingThree">
                  <button
                    class="accordion__button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Can I get update regularly and For how long do I get
                    updates?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="collapse accordion__panel"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="rn-card-body">
                    Yes, We will get update the Nuron. And you can get it
                    any time. Next time we will comes with more feature.
                    You can be get update for unlimited times. Our
                    dedicated team works for update.
                  </div>
                </div>
              </div>

              <div class="accordion__item">
                <h2 class="accordion__heading" id="headingFour">
                  <button
                    class="accordion__button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Can I change any Elements as I like?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="collapse accordion__panel"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="rn-card-body">
                    Yes, You can change any Elements as you like. And By
                    the way you can build your website which you are
                    choose.
                  </div>
                </div>
              </div>

              <div class="accordion__item">
                <h2 class="accordion__heading" id="headingFive">
                  <button
                    class="accordion__button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Can I build a complete project with this template?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="collapse accordion__panel"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div class="rn-card-body">
                    Yes, Why not. You can build a project and complete
                    website as you are like.More component are available
                    include in this templete. And you can be use it
                    following documentation.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card-box text-left">
            <div class="service">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-book"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path
                    d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                  ></path>
                </svg>
              </div>
              <div class="content">
                <h3 class="title">Online Documentation</h3>
                <p>Well organized and up to date</p>
                <a
                  target="_blank"
                  href="http://rainbowit.net/docs/nuron-react/"
                  class="rbt-button rn-button-style--2 btn_border btn-size-sm btn-theme"
                  ><span class="button-text"
                    >Online Documentation</span
                  ></a
                >
              </div>
            </div>
          </div>
          <div class="card-box text-left mt--40 support">
            <div class="service">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-headphones"
                >
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path
                    d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
                  ></path>
                </svg>
              </div>
              <div class="content">
                <h3 class="title">Dedicated Support</h3>
                <p>
                  Need support ? Submit a ticket. We will be happy to
                  assist you.
                </p>
                <a
                  target="_blank"
                  href="https://support.rainbowit.net/support/"
                  class="rbt-button btn_border rn-button-style--2 btn-size-sm btn-theme"
                  ><span class="button-text">Get Support</span></a
                >
                <ul class="liststyle">
                  <li><span>Support Time:</span> Monday – Friday</li>
                  <li><span>Response Time:</span> Maximum 24 hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
            {/* Accordion Area End */}
            {/* Start Footer Area */}
            <Footer />
            {/* ENd Footer Area */}
          </div>
          <div className="mouse-cursor cursor-outer" />
          <div className="mouse-cursor cursor-inner" />
        </div>
      </div>
    </body>
  );
}

export default App;
