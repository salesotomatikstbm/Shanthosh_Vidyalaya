import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-inner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="widget-footer">
                <div className="widget widget-logo">
                  <div className="logo-bottom" id="logo-footer">
                    <Link href="/">
                      <a>
                        <img
                          src="assets/images/logo/logofootert.png"
                          alt="new-logo"
                        />
                      </a>
                    </Link>
                  </div>
                  <p className="wrap f-mulish">
                    Welcome to Shanthosh Vidyalaya, dedicated to providing
                    quality education and nurturing young minds for a brighter
                    future. Learn more about our academic programs, infrastructure,
                    and values.
                  </p>
                  <div className="list-contact">
                    <ul>
                      <li className="fx">
                        <span>
                          <i className="far fa-map-marker-alt" />
                          Tambaram East, Chennai
                        </span>
                      </li>
                      <li className="fx">
                        <a href="mailto:info@santoshvidyalaya.com">
                          <i className="far fa-envelope" /> info@Shanthoshvidyalaya.com
                        </a>
                      </li>
                      <li className="fx">
                        <a href="tel:0444003321">
                          <i className="fal fa-phone" /> +044 4003321
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget widget-business">
                  <div className="inner">
                    <div className="op-time">
                      <h4 className="title-widget">Operating Hours</h4>
                      <ul>
                        <li>
                          <span className="f-mulish">Monday - Friday</span>
                        </li>
                        <li>
                          <span className="f-mulish">09 am - 03 pm</span>
                        </li>
                      </ul>
                    </div>
                    <div className="cls-time">
                      <p>Closed on Saturdays and Public Holidays</p>
                      {/* <h4 className="title-widget">Closed</h4> */}
                    </div>
                  </div>
                </div>
                <div className="widget widget-link">
                  <h4 className="title-widget">Explore Our Website</h4>
                  <ul className="list-link">
                    <li className="fx">
                      <Link href="/">
                        <a className="wd-ctm f-mulish">Home</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/about">
                        <a className="wd-ctm f-mulish">About</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/classes">
                        <a className="wd-ctm f-mulish">Academics</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/gallery">
                        <a className="wd-ctm f-mulish">Infrastructure</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/contact">
                        <a className="wd-ctm f-mulish">Contacts</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <div className="widget widget-news st-3">
                  <h4 className="title-widget">Latest News</h4>
                  <ul className="list-news">
                    <li className="fx">
                      <img
                        src="assets/images/thumbnails/widget9.jpg"
                        alt="Image"
                        className="feature"
                      />
                      <ul className="box-content">
                        <li>
                          <h6 className="title">
                            <Link href="/blog-grid">
                              <a>Upcoming School Events for 2025</a>
                            </Link>
                          </h6>
                        </li>
                        <li>
                          <Link href="/blog-grid">
                            <a className="fx meta-news clr-pri-6">
                              <i className="far fa-calendar-alt" />
                              15 Jan 2025
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="fx">
                      <img
                        src="assets/images/thumbnails/widget10.jpg"
                        alt="Image"
                        className="feature"
                      />
                      <ul className="box-content">
                        <li>
                          <h6 className="title">
                            <Link href="/blog-grid">
                              <a>Admission Updates for New Academic Year</a>
                            </Link>
                          </h6>
                        </li>
                        <li>
                          <Link href="/blog-grid">
                            <a className="fx meta-news clr-pri-6">
                              <i className="far fa-calendar-alt" />
                              10 Jan 2025
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="col-12">
              <div className="footer-bottom jus-ct">
                <p className="copy-right">
                  Copyright © {new Date().getFullYear()}, Shanthosh Vidyalaya
                  Matriculation Higher Secondary School. Designed by{" "}
                  <a href="https://www.otomatiks.com/">
                    Otomatiks
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
