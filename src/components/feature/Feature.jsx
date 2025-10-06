"use client";
import React from "react";

function Feature() {
  return (
    <div>
      {/* rts features area start */}
      <div className="rts-feature-area rts-section-gap">
        <div className="container-fluid padding-controler plr--120">
          <div className="row bg-white-feature  pt--120 pb--120">
            <div className="col-xl-6 col-lg-12">
              <div className="feature-left-area">
                <img src="assets/images/feature/01.png" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="rts-title-area feature text-start pl--30 pl_sm--0">
                <p className="pre-title">Empowering Your Growth</p>
                <h2 className="title feature-title">
                  Trusted & Efficient <br />
                  Industrial Solutions Partner
                </h2>
                <p>
                  At Pinnacle, we combine innovation, expertise, and precision
                  to deliver projects that exceed expectations. Our commitment
                  to quality and timely execution has made us a trusted name in
                  the construction and infrastructure industry. From planning to
                  completion, we ensure excellence at every stage.
                </p>
              </div>
              <div className="feature-one-wrapper pl--30 mt--40 pl_sm--0">
                <div className="single-feature-one">
                  <i className="fal fa-check" />
                  <p>On-Time Project Delivery</p>
                </div>
                <div className="single-feature-one">
                  <i className="fal fa-check" />
                  <p>Reliable & Quality Workmanship</p>
                </div>
                <div className="single-feature-one">
                  <i className="fal fa-check" />
                  <p>Experienced Engineering Team</p>
                </div>
                <div className="single-feature-one">
                  <i className="fal fa-check" />
                  <p>Customer-Centric Approach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts features area end */}
    </div>
  );
}

export default Feature;
