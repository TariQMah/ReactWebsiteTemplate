function Footer() {
  return (
    <footer id="footer-1">
      <div className="scroll-top">
        <i className="fas fa-angle-up" />
      </div>
      <div className="container">
        <div className="subcribe-form-area">
          <div className="subsriber-form-tittle">
            <h2>
              Subscribe <br />
              <span> to Our</span> Newsletter
            </h2>
            <span className="subsriber-form-tittle__line-under"></span>
          </div>
          <div className="subsriber-form">
            <div className="col-lg-8">
              <form className="subsriber-form--padding" action="index.html">
                <input
                  className="subsriber-form__text-input"
                  value="Your Email..."
                  type="text"
                />
                <input
                  className="subsriber-form__submit"
                  type="submit"
                  value="SUBSCRIBE"
                />
              </form>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-5">
            <div className="row">
              <div className="col-lg-8">
                <div className="footer-widget-1 footer-widget-1--margin ">
                  <a href="index.html">
                    <img
                      src="/static/assets/images/footerlogo.png"
                      alt="footerlogo"
                    />
                  </a>
                  <div className="footer-widget-1__text">
                    <p>
                      Sed vel molestie libero, ac vestibulum nunc. Vivamus quis
                      nibh Lorem, ipsum dolor sit amet consectetur adipisicing
                      elit. Ad, neque? <br />
                      Molestie mauris, vitae dictum erat quam vel felis.
                      Vestibulum ante ispum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="remove-padding" className="col-lg-6 col-md-7">
            <div className="footer-widget-1">
              <div className="footer-widget-1__lists">
                <div className="footer-widget-1__list">
                  <div className="footer-widget-1__tittle">
                    <h5>Solutions</h5>
                    <div className="footer-widget-1__tittle__line-under"></div>
                  </div>
                  <ul>
                    <li>
                      <a href="index.html#">Tours</a>
                    </li>
                    <li>
                      <a href="index.html#">Destinations</a>
                    </li>
                    <li>
                      <a href="index.html#">Pricing</a>
                    </li>
                    <li>
                      <a href="index.html#">Testimonials</a>
                    </li>
                  </ul>
                </div>

                <div className="footer-widget-1__list">
                  <div className="footer-widget-1__tittle">
                    <h5>quick links</h5>
                    <div className="footer-widget-1__tittle__line-under"></div>
                  </div>
                  <ul>
                    <li>
                      <a href="index.html#">Discover</a>
                    </li>
                    <li>
                      <a href="index.html#">Upcoming Tours</a>
                    </li>
                    <li>
                      <a href="index.html#">Payment Options</a>
                    </li>
                    <li>
                      <a href="index.html#">FAQs</a>
                    </li>
                  </ul>
                </div>

                <div className="footer-widget-1__list">
                  <div className="footer-widget-1__tittle">
                    <h5>resources</h5>
                    <div className="footer-widget-1__tittle__line-under"></div>
                  </div>
                  <ul>
                    <li>
                      <a href="index.html#">Terms of Use</a>
                    </li>
                    <li>
                      <a href="index.html#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="index.html#">Security</a>
                    </li>
                    <li>
                      <a href="index.html#">Information</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="copyright__area">
            <div className="copyright__license">
              Copyright <i className="far fa-copyright"></i> 2019 Wunderlust.
              All Rights Reserved.
            </div>
            <div className="copyright__social">
              <a href="index.html#">
                <img
                  src="/static/assets/images/socials/copytight-instar.png"
                  alt="instar-copyright"
                />
              </a>
              <a href="index.html#">
                <img
                  src="/static/assets/images/socials/copytight-facebook.png"
                  alt="facebook-copyright"
                />
              </a>
              <a href="index.html#">
                <img
                  src="/static/assets/images/socials/copytight-twitter.png"
                  alt="twitter-copytight"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
