"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ErrorBoundary from "@/components/ErrorBoundary";
import { CgGym } from "react-icons/cg";
import { FaGlassWaterDroplet } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { FaTrowelBricks } from "react-icons/fa6";

function BusinessGoalOne() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Function to open the video overlay
  const openVideo = (e) => {
    e.preventDefault();
    setIsVideoOpen(true);
  };

  // Function to close the video overlay
  const closeVideo = (e) => {
    e.preventDefault();
    setIsVideoOpen(false);
  };

  // Effect to handle the escape key for closing the video overlay
  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.keyCode === 27) {
        setIsVideoOpen(false);
      }
    };

    // Add event listener for keyup
    document.addEventListener("keyup", handleKeyUp);

    // Cleanup function to remove event listener on component unmount
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <ErrorBoundary>
      <div>
        {/* business goal area */}
        <div
          className="rts-business-goal mt--0 rts-section-gapBottom"
          id="goal"
        >
          <div className="container">
            <div className="row">
              {/* business goal left */}
              <div className="col-lg-6">
                <div className="business-goal-one">
                  <img
                    src="assets/images/business-goal/01.jpg"
                    alt="Business_Goal"
                  />
                  <img
                    className="small"
                    src="assets/images/business-goal/sm-01.jpg"
                    alt="Business_Goal"
                  />
                </div>
              </div>
              {/* business goal right */}
              {/* right area business */}
              <div className="col-lg-6 mt--35 mt_md--70 mt_sm--70">
                <div className="business-goal-right">
                  <div className="rts-title-area business text-start pl--30">
                    <p className="pre-title">MULTI-SERVICES PROVIDER</p>
                    <h2 className="title">
                      We deliver reliable solutions across industries
                    </h2>
                  </div>
                  <div className="rts-business-goal pl--30">
                    <div className="single-goal">
                      {/* <img
                        src="assets/images/business-goal/icon/01.svg"
                        alt="business_Icone"
                        className="thumb"
                      /> */}
                      <FaTrowelBricks 
                        style={{
                          color: "red",
                          fontSize: "6rem",
                          marginRight: "24px",
                        }}
                      />
                      <div className="goal-wrapper">
                        <h6 className="title">Construction & Infrastructure</h6>
                        <p className="disc">
                          Comprehensive construction services with timely
                          execution and quality workmanship for commercial,
                          industrial, and institutional projects.
                        </p>
                      </div>
                    </div>
                    <div className="single-goal">
                      {/* <img
                        src="assets/images/business-goal/icon/02.svg"
                        alt="business_Icone"
                        className="thumb"
                      /> */}
                      <FaGlassWaterDroplet
                        style={{
                          color: "red",
                          fontSize: "6rem",
                          marginRight: "24px",
                        }}
                      />
                      <div className="goal-wrapper">
                        <h6 className="title">Water, RO & AC Solutions</h6>
                        <p className="disc">
                          Supply, installation, and maintenance of water
                          coolers, RO systems, and AC chiller plants to ensure
                          safe, efficient, and chilled water.
                        </p>
                      </div>
                    </div>
                    <div className="single-goal">
                      {/* <img
                        src="assets/images/business-goal/icon/03.svg"
                        alt="business_Icone"
                        className="thumb"
                      /> */}
                      <MdOutlineSecurity style={{
                          color: "red",
                          fontSize: "6rem",
                          marginRight: "24px",
                        }}/>
                      <div className="goal-wrapper">
                        <h6 className="title">Security & Manpower Services</h6>
                        <p className="disc">
                          Professional security personnel and skilled workforce
                          supply to maintain safety, discipline, and operational
                          efficiency for clients.
                        </p>
                      </div>
                    </div>
                    <div className="single-goal">
                      {/* <img
                        src="assets/images/business-goal/icon/04.svg"
                        alt="business_Icone"
                        className="thumb"
                      /> */}
                      <CgGym
                        style={{
                          color: "red",
                          fontSize: "6rem",
                          marginRight: "24px",
                        }}
                      />
                      <div className="goal-wrapper">
                        <h6 className="title">Open Gym Equipment Supply</h6>
                        <p className="disc">
                          Installation and maintenance of high-quality gym
                          machines for residential and commercial fitness
                          setups.
                        </p>
                      </div>
                    </div>
                    <div className="goal-button-wrapper mt--70">
                      <Link
                        href={"/our-service"}
                        className="rts-btn btn-primary color-h-black"
                      >
                        All Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* right area business ENd */}
            </div>
          </div>
        </div>
        {/* business goal area End */}
      </div>
    </ErrorBoundary>
  );
}

export default BusinessGoalOne;
