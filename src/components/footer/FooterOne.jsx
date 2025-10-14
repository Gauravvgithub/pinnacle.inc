"use client";
import React from "react";
import Link from "next/link";

function FooterOne() {
  return (
    <div>
      {/* rts footer area start */}
      <div className="rts-footer-area footer-one bg-footer-one" id="f-contact">
        <div className="container bg-shape-f1">
          <div className="row pt--120 pt_sm--80 pb--80 pb_sm--40">
            {/* Company Logo + About */}
            <div className="col-xl-4 col-md-6 col-sm-12 col-12">
              <div className="footer-one-single-wized">
                <div className="footer-logo mb-4">
                  <Link href="/">
                    <img
                      src="/assets/images/logo/logo-light.png"
                      alt="Company Logo"
                      style={{
                        maxWidth: "180px",
                        height: "auto",
                        borderRadius: "10px",
                      }}
                    />
                    {/* <span>Logo here</span>
                    <br />
                    <span>Pinnacle Inc</span> */}
                  </Link>
                </div>
                <p className="text-light small">
                  We are Pinnacle Inc – delivering excellence in construction,
                  innovation, and customer satisfaction.
                </p>
                <div className="footer-one-single-wized">
                  <div className="quick-link-inner">
                    <ul className="links">
                      <li>
                        <Link
                          href="https://maps.app.goo.gl/DVYvrv2v5Er8rSxC9"
                          target="_blank"
                        >
                          <i className="fas fa-map-marker-alt" /> Unit no. 889,
                          Vegas Mall, Plot no. 6, Dwarka Sec-14, New Delhi -
                          110075
                        </Link>
                      </li>
                      <li>
                        <Link href="tel:+919999653855">
                          <i className="fas fa-phone" /> +91 9999653855
                        </Link>
                      </li>
                      <li>
                        <Link href="tel:+918376070809">
                          <i className="fas fa-phone" /> +91 8376070809
                        </Link>
                      </li>
                      <li>
                        <Link href="mailto:info@pinnacleinc.in">
                          <i className="fas fa-envelope" /> info@pinnacleinc.in
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="social mt-3 gap-3 d-flex">
                  {/* <Link
                    href="https://www.facebook.com"
                    target="_blank"
                    className="me-3 text-light"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link> */}
                  <Link
                    href="https://wa.me/919999653855?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services"
                    target="_blank"
                    className="me-3 text-light"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </Link>
                  {/* <Link
                    href="https://www.linkedin.com"
                    target="_blank"
                    className="me-3 text-light"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </Link> */}
                  <Link
                    href="https://www.instagram.com/pinnaclesellerservices/?igsh=dXIwMDl4d2ZucWRk#"
                    target="_blank"
                    className="text-light"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-xl-4 col-md-6 col-sm-12 col-12" style={{width:"25%"}}>
              <div className="footer-one-single-wized">
                <div className="wized-title">
                  <h5 className="title">Quick Links</h5>
                  <img
                    src="/assets/images/footer/under-title.png"
                    alt="pinnacle_footer"
                  />
                </div>
                <div className="quick-link-inner">
                  <ul className="links">
                    <li>
                      <Link href="/about-us">
                        <i className="far fa-arrow-right" /> About Us
                      </Link>
                    </li>

                    <li>
                      <Link href="/contactus">
                        <i className="far fa-arrow-right" /> Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-service">
                        <i className="far fa-arrow-right" /> Our Services
                      </Link>
                    </li>
                    
                  {/* </ul>
                  <ul className="links margin-left-70"> */}
                  <li>
                      <Link href="/team">
                        <i className="far fa-arrow-right" /> Our Team
                      </Link>
                    </li>
                    <li>
                      <Link href="/blogs">
                        <i className="far fa-arrow-right" /> Blogs
                      </Link>
                    </li>
                    <li>
                      <Link href="/project">
                        <i className="far fa-arrow-right" /> Projects
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Get In Touch */}
            <div className="col-xl-4 col-md-6 col-sm-12 col-12" style={{width:"40%"}}>
              {/* <div className="footer-one-single-wized">
                <div className="wized-title">
                  <h5 className="title">Get In Touch</h5>
                  <img
                    src="/assets/images/footer/under-title.png"
                    alt="pinnacle_footer"
                  />
                </div>
                <div className="quick-link-inner">
                  <ul className="links">
                    <li>
                      <Link
                        href="https://maps.app.goo.gl/DVYvrv2v5Er8rSxC9"
                        target="_blank"
                      >
                        <i className="fas fa-map-marker-alt" /> Unit no. 889,
                        Vegas Mall, Plot no. 6, Dwarka Sec-14, New Delhi -
                        110075
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:+919999653855">
                        <i className="fas fa-phone" /> +91 9999653855
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:+918376070809">
                        <i className="fas fa-phone" /> +91 8376070809
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:info@pinnacleinc.in">
                        <i className="fas fa-envelope" /> info@pinnacleinc.in
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9676462340926!2d77.029572!3d28.6007474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dd61eb460af%3A0xe89377d97456bc5e!2sVegas%20Mall!5e0!3m2!1sen!2sin!4v1758619246139!5m2!1sen!2sin"
                width={650}
                height={300}
                style={{ borderRadius: "25px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* copyright area start */}
        <div className="rts-copyright-area">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-6 col-12 text-center text-md-start mb-2 mb-md-0">
                <p className="text-sm text-gray-600">
                  Pinnacle Inc - Copyright {new Date().getFullYear()}. All
                  rights reserved. Managed and Developed By{" "}
                  <a
                    href="https://nationalmarketingprojects.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:underline color-white"
                  >
                    National Marketing Projects
                  </a>
                </p>
              </div>
              <div className="col-md-6 col-12 text-center">
                <Link
                  href="/terms-and-conditions"
                  className="me-3 text-sm hover:underline"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-sm hover:underline"
                >
                  Privacy Policy
                </Link>
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
