"use client";
import React, { useEffect } from "react";
// import WOW from 'wow.js';

function AboutOne() {
  return (
    <div>
      {/* rts about us section start */}
      <div
        className="rts-about-area rts-section-gap bg-about-sm-shape"
        id="about"
      >
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* about left */}
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-md-2 order-sm-2 order-2 mt_md--50 mt_sm--50">
              <div className="rts-title-area">
                <p className="pre-title">More About Us</p>
                <h2 className="title">Who We Are</h2>
              </div>
              <div className="about-inner">
                <p className="disc">
                  Pinnacle is a trusted multi-services provider offering
                  construction solutions, RO & water cooler installations, AC
                  chiller plant services, security and manpower support, and
                  open gym equipment supply.
                  <br />
                  With successful projects delivered for leading government and
                  corporate organizations, we combine technical expertise,
                  professionalism, and timely execution.
                  <br />
                  Our commitment to quality, safety, and long-term partnerships
                  makes us a reliable choice for clients across industries.
                </p>
                {/* start about success area */}
                <div className="row about-success-wrapper">
                  {/* left wrapper start */}
                  <div className="col-lg-6 col-md-6">
                    <div className="single">
                      <i className="far fa-check" />
                      <p className="details">
                        24/7 Support & Reliable Services
                      </p>
                    </div>
                    <div className="single">
                      <i className="far fa-check" />
                      <p className="details">
                        Skilled Security & Manpower Supply
                      </p>
                    </div>
                    <div className="single">
                      <i className="far fa-check" />
                      <p className="details">
                        Expert Team for Installation & Maintenance
                      </p>
                    </div>
                  </div>
                  {/* left wrapper end */}
                  <div className="col-lg-6 col-md-6">
                    <div className="single">
                      <i className="far fa-check" />
                      <p className="details">
                        Construction & Infrastructure Solutions
                      </p>
                    </div>
                    <div className="single">
                      <i className="far fa-check" />
                      <p className="details">RO & Water Cooler Installations</p>
                    </div>
                    <div className="single">
                      <i className="far fa-check" />
                      <p className="details">
                        AC Chiller Plant & Gym Equipment Services
                      </p>
                    </div>
                  </div>
                </div>

                {/* start about success area */}
                {/* about founder & get in touch start */}
                <div className="row about-founder-wrapper align-items-center mt--40">
                  {/* left area start */}
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="author-inner">
                      <a className="thumbnail" href="#">
                        <img
                          src="assets/images/about/sm-01.png"
                          alt="finbiz_founder"
                        />
                      </a>
                      <div className="founder-details">
                        <a href="team-details.html">
                          <h6 className="title" style={{ fontSize: "12px" }}>
                            Mr. Shivanand Pandey
                          </h6>
                        </a>
                        <span>CEO &amp; Founder</span>
                      </div>
                    </div>
                  </div>
                  {/* left area end */}
                  {/* right founder area */}
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_sm--20">
                    <div className="author-call-option">
                      <img
                        className="authore-call"
                        src="assets/images/about/call.svg"
                        alt="call_founder"
                      />
                      <div className="call-details">
                        <span>Call us anytime</span>
                        <a href="tel:+919999653855">
                          <h6 className="title">+91 9999653855</h6>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* left founder area */}
                </div>
                {/* about founder & get in touch end */}
              </div>
            </div>
            {/* about right */}
            {/* about-right Start*/}
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-md-1 order-sm-1 order-1">
              <div className="about-one-thumbnail">
                <img
                  src=" assets/images/about/main/about-01.png"
                  alt="about-finbiz"
                />
                <img
                  className="small-img"
                  src="assets/images/about/main/about-02.png"
                  alt="finbiz-small"
                />
                <div className="experience">
                  <div className="left single">
                    <h2 className="title">25+</h2>
                    <p className="time">Years</p>
                  </div>
                  <div className="right single">
                    <p className="disc">Of experience in consulting service</p>
                  </div>
                </div>
              </div>
            </div>
            {/* about-right end */}
          </div>
        </div>
      </div>
      {/* rts about us section end */}
    </div>
  );
}

export default AboutOne;
