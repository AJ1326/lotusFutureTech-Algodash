import React from 'react';
import logo from '../src/images/logo-lotus.png';
import service_1 from '../src/images/connect-idea.jpg';
import service_2 from '../src/images/connect-world.jpg';
import coin from '../src/images/cloud-computing.png';
import lotus from '../src/images/lotus-flower.png';
import './App.css';
import './particles/particle.css';

function App() {
  return (
      <div>
        <div className="loader">
          <div className="loader-inner">
            <div className="loader-blocks">
              <span className="block-1"></span>
              <span className="block-2"></span>
              <span className="block-3"></span>
              <span className="block-4"></span>
              <span className="block-5"></span>
              <span className="block-6"></span>
              <span className="block-7"></span>
              <span className="block-8"></span>
              <span className="block-9"></span>
              <span className="block-10"></span>
              <span className="block-11"></span>
              <span className="block-12"></span>
              <span className="block-13"></span>
              <span className="block-14"></span>
              <span className="block-15"></span>
              <span className="block-16"></span>
            </div>
          </div>
        </div>

        <header className="site-header transparent-sidemenu">
          <nav className="navbar navbar-expand-lg transparent-bg static-nav">
            <div className="container">
              <a className="navbar-brand" href="https://www.themesindustry.com/html/xeone/index.html">
                <img src={logo} alt="logo" />
              </a>
            </div>

            <a  className="d-lg-inline-block sidemenu_btn" id="sidemenu_toggle">
              <span></span> <span></span> <span></span>
            </a>
          </nav>

          <div className="side-menu">
            <div className="inner-wrapper">
              <span className="btn-close" id="btn_sideNavClose"><i></i><i></i></span>
              <nav className="side-nav">
                <ul className="navbar-nav w-100">
                  <li className="nav-item active">
                    <a className="nav-link pagescroll" href="#section1">Lotus Futuretech</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pagescroll" href="#section2">FreeFlow</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pagescroll" href="#section3">Bitcheck.network</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pagescroll" href="#section4">Energy as a service</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pagescroll" href="#section5">Consulting and developement</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pagescroll" href="#section6">Design and PR</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pagescroll" href="#section7">About the graph</a>
                  </li>
                  {/*<li className="nav-item">*/}
                  {/*  <a className="nav-link pagescroll" href="#agency">agency</a>*/}
                  {/*</li>*/}
                  {/*<li className="nav-item">*/}
                  {/*  <a className="nav-link pagescroll" href="#site-footer">Contact</a>*/}
                  {/*</li>*/}
                </ul>
              </nav>

              <div className="side-footer w-100">
                {/*<img className="lotusFooter" src={lotus} alt="Lotus Futuretech" />*/}
                {/*<ul className="social-icons-simple white top40">*/}
                {/*  <li><a ><i className="fa fa-facebook"></i> </a></li>*/}
                {/*  <li><a ><i className="fa fa-instagram"></i> </a></li>*/}
                {/*  <li><a ><i className="fa fa-twitter"></i> </a></li>*/}
                {/*</ul>*/}
                <p className="whitecolor mt20">&copy; 2020 Lotus Futuretech.</p>
              </div>
            </div>
          </div>
          <a id="close_side_menu"></a>
        </header>

        <canvas className='connecting-dots'></canvas>

        <section className="single-items center-block center-block item-one parallaxie full-screen" id="section1">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="item-titles whitecolor text-center colorShift">
                  <h2 className="font-xlight wow fadeInUp" data-wow-delay="300ms">
                    <a className="company-name">Lotus <span>Futuretech</span>
                    </a>
                  </h2>
                  {/*<p className="top25 bottom25 wow fadeInUp intro-text company-txt-section" data-wow-delay="350ms">*/}
                    {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.*/}
                  {/*</p>*/}
                  {/*<a className="button btnwhite btn-gradient-hvr"*/}
                     {/*href="https://www.themesindustry.com/html/xeone/gallery-detail.html wow fadeInUp"*/}
                     {/*data-wow-delay="400ms">View More</a>*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="single-items center-block item-two parallaxie full-screen" id="section2">
          <div className="section-container">
            <div className="row">
              <div className="col-md-6 col-sm-8 background-dark-text-section company-container-section">
                <div className="item-titles whitecolor">
                  <h2 className="font-xlight wow fadeInUp" data-wow-delay="300ms">
                    <a>FreeFlow</a>
                  </h2>
                  <p className="top25 bottom25 wow fadeInUp company-txt-section" data-wow-delay="350ms">
                      Decentralised edge Kubernetes compute and S3 storage for faster, more secure, more sustainable applications.
                  </p>
                  <a className="button btnprimary btn-gradient-hvr wow fadeInUp" data-wow-delay="400ms"
                     href="">View
                    More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="single-items center-block item-three parallaxie full-screen" id="section3">
          <div className="section-container">
            <div className="row">
              <div className="col-md-6 offset-md-6 col-sm-8 offset-sm-4 background-dark-text-section company-container-section">
                <div className="item-titles whitecolor text-right">
                  <h2 className="font-xlight" data-wow-delay="300ms">
                    <a>Bitcheck.network</a>
                  </h2>
                  <p className="top25 bottom25 company-txt-section" data-wow-delay="350ms">
                      According to Medici, “Banking-as-a-service (BaaS) is an end-to-end process where third parties – FinTech, non-FinTech, developers, etc. – can access and execute financial services capabilities without having to develop them organically.”
                  </p>
                  <p className="top25 bottom25 company-txt-section" data-wow-delay="350ms">
                    The BitCheck™️ feature lets you write a ‘digital check’ that other users can ‘deposit’, instantly transferring the stipulated currency and amount into their account.
                  </p>
                  <button className="button btnprimary btn-gradient-hvr" data-wow-delay="400ms"
                  >View More</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="single-items center-block item-four parallaxie full-screen" id="section4">
          <div className="section-container">
            <div className="row">
              <div className="col-md-6 col-sm-8 background-dark-text-section company-container-section">
                <div className="item-titles whitecolor">
                  <h2 className="font-xlight wow fadeInUp" data-wow-delay="300ms">
                    <a
                       href="">Energy<span> as a service</span></a>
                  </h2>
                  <p className="top25 bottom25 wow fadeInUp company-txt-section" data-wow-delay="350ms">
                      Our mission is to establish the most comprehensive community-owned clean energy generator, energy transfer and energy storage network in the world.
                  </p>
                  <p className="top25 bottom25 wow fadeInUp company-txt-section" data-wow-delay="350ms">
                      We aim to supply consistent, affordable, clean, renewable energy directly to the world community and to enable third party energy generators worldwide, to supply power to our network. Ultimately, we want to create a community in control of their future with real profits from tangible assets generating clean, renewable energy and share those benefits with communities.
                  </p>
                  <a className="button btnprimary btn-gradient-hvr wow fadeInUp" data-wow-delay="400ms"
                     href="">View More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="single-items center-block item-five parallaxie full-screen" id="section5">
          <div className="section-container">
            <div className="row">
              <div className="col-md-6 offset-md-6 col-sm-8 background-light-text-section company-container-section">
                <div className="item-titles darkcolor">
                  <h2 className="font-xlight wow fadeInUp" data-wow-delay="300ms">
                    <a
                       href="">IT Consulting and Development</a>
                  </h2>
                  <p className="top25 bottom25 wow fadeInUp company-txt-section" data-wow-delay="350ms">
                      After truly understanding the needs of each client, our team of consultants apply their extensive experience with existing and new technologies to recommend the best solution for each specific situation.
                  </p>
                  <a className="button btnprimary btn-gradient-hvr wow fadeInUp" data-wow-delay="400ms"
                     href="">View More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="single-items center-block item-six parallaxie full-screen" id="section6">
          <div className="section-container">
            <div className="row">
              <div className="col-md-6 col-sm-8 background-dark-text-section company-container-section">
                <div className="item-titles whitecolor">
                  <h2 className="font-xlight wow fadeInUp" data-wow-delay="300ms">
                    <a>Blockchain For All</a>
                  </h2>
                  <p className="top25 bottom25 wow fadeInUp company-txt-section" data-wow-delay="350ms">
                      We delivers enterprise-grade blockchain solutions, consultancy, proofs-of-concept and custom blockchain development services to help businesses in blockchain adoption. Our team of experts provide secure decentralized solutions for various domains, and integration of blockchain-based modules into existing software to ensure data integrity and compliance, and reduce fraud.
                  </p>
                  <a className="button btnprimary btn-gradient-hvr wow fadeInUp" data-wow-delay="400ms"
                     href="">View
                    More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="single-items center-block item-seven parallaxie full-screen" id="section7">
          <div className="section-container">
            <div className="row">
              <div className="col-md-6 offset-md-6 col-sm-8 offset-sm-4 background-light-text-section company-container-section">
                <div className="item-titles darkcolor text-right">
                  <h2 className="font-xlight wow fadeInUp" data-wow-delay="300ms">
                    <a
                       >About the
                      <span> group</span></a>
                  </h2>
                  <p className="top25 bottom25 wow fadeInUp company-txt-section" data-wow-delay="350ms">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <a className="button btnprimary btn-gradient-hvr wow fadeInUp" data-wow-delay="400ms"
                     href="">View
                    More</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*<section className="single-items center-block item-eight parallaxie full-screen">*/}
        {/*  <div className="container">*/}
        {/*    <div className="row">*/}
        {/*      <div className="col-md-5 col-sm-8">*/}
        {/*        <div className="item-titles darkcolor">*/}
        {/*          <h2 className="font-xlight wow fadeInUp" data-wow-delay="300ms">*/}
        {/*            <a data-fancybox="group-eight"*/}
        {/*               href="https://www.themesindustry.com/html/xeone/images/gallery-flat1.jpg">Best <span>Solutions</span></a>*/}
        {/*          </h2>*/}
        {/*          <p className="top25 bottom25"></p>*/}
        {/*          <a className="button btnprimary btn-gradient-hvr wow fadeInUp" data-wow-delay="350ms"*/}
        {/*             data-fancybox="group-eight"*/}
        {/*             href="https://www.themesindustry.com/html/xeone/images/gallery-flat1.jpg">View More</a>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
        {/*<section className="single-items center-block item-nine parallaxie full-screen">*/}
        {/*  <div className="container">*/}
        {/*    <div className="row">*/}
        {/*      <div className="col-md-5 offset-md-7 col-sm-8 offset-sm-4">*/}
        {/*        <div className="item-titles whitecolor text-right">*/}
        {/*          <h2 className="font-xlight wow fadeInUp" data-wow-delay="300ms">*/}
        {/*            <a data-fancybox="group-nine"*/}
        {/*               href="https://www.themesindustry.com/html/xeone/images/gallery-flat1.jpg">Small <span>Businesses</span></a>*/}
        {/*          </h2>*/}
        {/*          <p className="top25 bottom25 wow fadeInUp" data-wow-delay="350ms">The integration of web fonts has*/}
        {/*            always been one of the largest contributing factors to diversity in the overall look and feel of*/}
        {/*            websites today vs, yesterday. Fonts, just like images. </p>*/}
        {/*          <p className=" wow fadeInUp" data-wow-delay="400ms">fruits,vegetables</p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/*<a href="#" className="back-top">*/}
        {/*  <img className="tothetop" src={coin} />*/}
        {/*</a>*/}

        <footer id="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 text-center">
                {/*<img className="lotusFooter" src={lotus} alt="Lotus Futuretech" />*/}
                <p className="copyrights wow fadeInUp" data-wow-delay="350ms"> &copy; 2020 Lotus Futuretech
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
}

export default App;
