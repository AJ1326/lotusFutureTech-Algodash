import React from 'react';
import logo from '../src/images/lotus-logo1.png';
import coin from '../src/images/profits.png';
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
              <a className="navbar-brand" href="http://www.themesindustry.com/html/xeone/index.html">
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
                    <a className="nav-link pagescroll" href="#home">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pagescroll" href="#creative">Creative</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pagescroll" href="#corporate">Corporate</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pagescroll" href="#social">Social</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pagescroll" href="#seo">SEO</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pagescroll" href="#marketing">Marketing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pagescroll" href="#agency">agency</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pagescroll" href="#site-footer">Contact</a>
                  </li>
                </ul>
              </nav>

              <div className="side-footer w-100">
                <ul className="social-icons-simple white top40">
                  <li><a ><i className="fa fa-facebook"></i> </a></li>
                  <li><a ><i className="fa fa-instagram"></i> </a></li>
                  <li><a ><i className="fa fa-twitter"></i> </a></li>
                </ul>
                <p className="whitecolor">&copy; 2020 Lotus Futuretech.</p>
              </div>
            </div>
          </div>
          <a id="close_side_menu"></a>
        </header>

        <canvas className='connecting-dots'></canvas>

        <section className="single-items center-block center-block item-one parallaxie full-screen" id="home">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="item-titles whitecolor text-center">
                  <h2 className="font-xlight wow fadeInUp" data-wow-delay="300ms">
                    <a href="http://www.themesindustry.com/html/xeone/gallery-detail.html">Lotus <span>Futuretech</span>
                    </a>
                  </h2>
                  <p className="top25 bottom25 wow fadeInUp" data-wow-delay="350ms">graphics, branding, development</p>
                  <a className="button btnwhite btn-gradient-hvr"
                     href="http://www.themesindustry.com/html/xeone/gallery-detail.html wow fadeInUp"
                     data-wow-delay="400ms">View More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="single-items center-block item-two parallaxie full-screen" id="creative">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-8">
                <div className="item-titles darkcolor">
                  <h2 className="font-xlight wow fadeInUp" data-wow-delay="300ms">
                    <a data-fancybox="group-two"
                       href="http://www.themesindustry.com/html/xeone/images/gallery-flat1.jpg"><span>Bringing The Cloud Closer To You</span></a>
                  </h2>
                  <p className="top25 bottom25 wow fadeInUp" data-wow-delay="350ms">Decentralised edge Kubernetes
                    compute and S3 storage for faster, more secure, more sustainable applications.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="single-items center-block item-three parallaxie full-screen" id="corporate">
          <div className="container">
            <div className="row">
              <div className="col-md-5 offset-md-7 col-sm-8 offset-sm-4">
                <div className="item-titles whitecolor text-right">
                  <h2 className="font-xlight wow fadeInUp" data-wow-delay="300ms">
                    <a data-fancybox="group-three"
                       href="http://www.themesindustry.com/html/xeone/images/gallery-flat1.jpg">XeOne <span>Corporate</span></a>
                  </h2>
                  <p className="top25 bottom25 wow fadeInUp" data-wow-delay="350ms">media, culture, colors</p>
                  <a className="button btnprimary btn-gradient-hvr wow fadeInUp" data-wow-delay="400ms"
                     data-fancybox="group-three"
                     href="http://www.themesindustry.com/html/xeone/images/gallery-flat1.jpg">View More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="single-items center-block item-four parallaxie full-screen" id="social">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-8">
                <div className="item-titles darkcolor">
                  <h2 className="font-xlight wow fadeInUp" data-wow-delay="300ms">
                    <a data-fancybox="group-four"
                       href="http://www.themesindustry.com/html/xeone/images/gallery-flat1.jpg">Social <span> Media</span></a>
                  </h2>
                  <p className="top25 bottom25 wow fadeInUp" data-wow-delay="350ms">creative, brandind, graphics</p>
                  <a className="button btnprimary btn-gradient-hvr wow fadeInUp" data-wow-delay="400ms"
                     data-fancybox="group-four"
                     href="http://www.themesindustry.com/html/xeone/images/gallery-flat1.jpg">View More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="single-items center-block item-five parallaxie full-screen" id="seo">
          <div className="container">
            <div className="row">
              <div className="col-md-5 offset-md-7 col-sm-8 offset-sm-4">
                <div className="item-titles whitecolor text-right">
                  <h2 className="font-xlight wow fadeInUp" data-wow-delay="300ms">
                    <a data-fancybox="group-five"
                       href="http://www.themesindustry.com/html/xeone/images/gallery-flat1.jpg">Optimized <span>SEO</span></a>
                  </h2>
                  <p className="top25 bottom25 wow fadeInUp" data-wow-delay="350ms">The integration of web fonts has
                    always been one of the largest contributing factors to diversity in the overall look and feel of
                    websites today vs, yesterday. Fonts, just like images.</p>
                  <p className=" wow fadeInUp" data-wow-delay="400ms">fashion,graphics</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="single-items center-block item-six parallaxie full-screen" id="marketing">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-8">
                <div className="item-titles darkcolor">
                  <h2 className="font-xlight wow fadeInUp" data-wow-delay="300ms">
                    <a data-fancybox="group-six"
                       href="http://www.themesindustry.com/html/xeone/images/gallery-flat1.jpg">XeOne <span>Marketing</span>
                    </a>
                  </h2>
                  <p className="top25 bottom25 wow fadeInUp" data-wow-delay="350ms">fashion, brands, colors</p>
                  <a className="button btnprimary btn-gradient-hvr wow fadeInUp" data-wow-delay="400ms"
                     data-fancybox="group-six" href="http://www.themesindustry.com/html/xeone/images/gallery-flat1.jpg">View
                    More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="single-items center-block item-seven parallaxie full-screen" id="agency">
          <div className="container">
            <div className="row">
              <div className="col-md-5 offset-md-7 col-sm-8 offset-sm-4">
                <div className="item-titles whitecolor text-right">
                  <h2 className="font-xlight wow fadeInUp" data-wow-delay="300ms">
                    <a data-fancybox="group-seven"
                       href="http://www.themesindustry.com/html/xeone/images/gallery-flat1.jpg">Cultivate &amp;
                      <span>Inspired</span></a>
                  </h2>
                  <p className="top25 bottom25 wow fadeInUp" data-wow-delay="350ms">The integration of web fonts has
                    always been one of the largest contributing factors to diversity in the overall look and feel of
                    websites today vs, yesterday. Fonts, just like images. </p>
                  <p className="wow fadeInUp" data-wow-delay="300ms">fruits,vegetables</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="single-items center-block item-eight parallaxie full-screen">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-8">
                <div className="item-titles darkcolor">
                  <h2 className="font-xlight wow fadeInUp" data-wow-delay="300ms">
                    <a data-fancybox="group-eight"
                       href="http://www.themesindustry.com/html/xeone/images/gallery-flat1.jpg">Best <span>Solutions</span></a>
                  </h2>
                  <p className="top25 bottom25"></p>
                  <a className="button btnprimary btn-gradient-hvr wow fadeInUp" data-wow-delay="350ms"
                     data-fancybox="group-eight"
                     href="http://www.themesindustry.com/html/xeone/images/gallery-flat1.jpg">View More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="single-items center-block item-nine parallaxie full-screen">
          <div className="container">
            <div className="row">
              <div className="col-md-5 offset-md-7 col-sm-8 offset-sm-4">
                <div className="item-titles whitecolor text-right">
                  <h2 className="font-xlight wow fadeInUp" data-wow-delay="300ms">
                    <a data-fancybox="group-nine"
                       href="http://www.themesindustry.com/html/xeone/images/gallery-flat1.jpg">Small <span>Businesses</span></a>
                  </h2>
                  <p className="top25 bottom25 wow fadeInUp" data-wow-delay="350ms">The integration of web fonts has
                    always been one of the largest contributing factors to diversity in the overall look and feel of
                    websites today vs, yesterday. Fonts, just like images. </p>
                  <p className=" wow fadeInUp" data-wow-delay="400ms">fruits,vegetables</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <a href="#" className="back-top">
          <img className="tothetop" src={coin} />
        </a>

        <footer id="site-footer" className="padding_half">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 text-center">
                <img className="lotusFooter" src={lotus} alt="Lotus Futuretech" />
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
