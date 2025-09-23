"use client";
import React from "react";
import Link from "next/link";
function FooterOne() {
  return (
    <div>
      {/* rts footer area start */}
      <div className="rts-footer-area footer-one bg-footer-one" id="f-contact">
        <div className="container bg-shape-f1">
          {/* rts footer area */}
          <div className="row pt--120 pt_sm--80 pb--80 pb_sm--40">
            {/* Quick Links */}
            <div className="col-xl-4 col-md-6 col-sm-12 col-12">
              <div className="footer-one-single-wized">
                <div className="wized-title">
                  <h5 className="title">Quick Links</h5>
                  <img
                    src="/assets/images/footer/under-title.png"
                    alt="finbiz_footer"
                  />
                </div>
                <div className="quick-link-inner">
                  <ul className="links">
                    <li>
                      <Link href={"#"}>
                        <i className="far fa-arrow-right" /> Forum Support
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"}>
                        <i className="far fa-arrow-right" /> Help &amp; FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"}>
                        <i className="far fa-arrow-right" /> Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"}>
                        <i className="far fa-arrow-right" /> Pricing &amp; Plans
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"}>
                        <i className="far fa-arrow-right" /> Cookie Policy
                      </Link>
                    </li>
                  </ul>
                  <ul className="links margin-left-70">
                    <li>
                      <Link href={"#"}>
                        <i className="far fa-arrow-right" /> About Us
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"}>
                        <i className="far fa-arrow-right" /> My Account
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"}>
                        <i className="far fa-arrow-right" /> Our Company
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"}>
                        <i className="far fa-arrow-right" /> Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="col-xl-4 col-md-6 col-sm-12 col-12">
              <div className="footer-one-single-wized mid-bg">
                <div className="wized-title">
                  <h5 className="title">Opening Hours</h5>
                  <img
                    src="/assets/images/footer/under-title.png"
                    alt="finbiz_footer"
                  />
                </div>
                <div className="opening-time-inner">
                  <div className="single-opening">
                    <p className="day">Week Days</p>
                    <p className="time">09.00 - 24:00</p>
                  </div>
                  <div className="single-opening">
                    <p className="day">Saturday</p>
                    <p className="time">08:00 - 03.00</p>
                  </div>
                  <div className="single-opening mb--30 mb_sm--10">
                    <p className="day">Sunday</p>
                    <p className="time">Day Off</p>
                  </div>
                  <Link
                    href={"/contactus"}
                    className="rts-btn btn-primary contact-us"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Get In Touch */}
            <div className="col-xl-4 col-md-6 col-sm-12 col-12">
              <div className="footer-one-single-wized">
                <div className="wized-title">
                  <h5 className="title">Get In Touch</h5>
                  <img
                    src="/assets/images/footer/under-title.png"
                    alt="finbiz_footer"
                  />
                </div>
                <div className="contact-info">
                  <p>
                    <i className="fas fa-map-marker-alt me-2"></i> Unit no. 889,
                    Vegas Mall, Plot no. 6, Dwarka Sec-14, New Delhi - 110075
                  </p>
                  <p>
                    <i className="fas fa-phone me-2"></i>{" "}
                    <a href="tel:+919999653855">+91 9999653855</a>
                  </p>
                  <p>
                    <i className="fas fa-phone me-2"></i>{" "}
                    <a href="tel:+918376070809">+91 8376070809</a>
                  </p>
                  <p>
                    <i className="fas fa-envelope me-2"></i>{" "}
                    <a href="mailto:Info.pinnacleinc@gmail.com">
                      Info.pinnacleinc@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* rts footer area End */}
        </div>

        {/* copyright area start */}
        <div className="rts-copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-center">
                  <p className="text-center text-sm text-gray-600">
                    Pinnacle Inc - Copyright {new Date().getFullYear()}. All
                    rights reserved. Managed and Developed By{" "}
                    <a
                      href="https://nationalmarketingprojects.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary hover:underline color-white"
                    >
                      NMPI
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* copyright area end */}
      </div>
      {/* rts footer area end */}
    </div>
  );
}

export default FooterOne;
