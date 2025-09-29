"use client";
import React from "react";
import Link from "next/link";
import { CgGym } from "react-icons/cg";
import { GiWaterTank } from "react-icons/gi";
import { GiGuards } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";

function ServiceEleven() {
  return (
    <>
      <div>
        {/* rts service post area Start*/}
        <div className="rts-service-area rts-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="rts-title-area service text-center">
                  <p className="pre-title">Our Services</p>
                  <h3 className="title">Pinnacle Multi-Services Solutions</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid service-main plr--120-service mt--50 plr_md--0 pl_sm--0 pr_sm--0">
            <div className="background-service row">
              {/* start single Service */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="service-one-inner one">
                  <div className="thumbnail">
                    {/* <img
                    src="assets/images/service/icon/01.svg"
                    alt="construction_service"
                  /> */}
                    <CgGym style={{ fontSize: "6rem", color: "#E33434" }} />
                  </div>
                  <div className="service-details">
                    <Link href={"/park-development"}>
                      <h5 className="title">Park Development</h5>
                    </Link>
                    <p className="disc">
                      Our work includes everything from site preparation and
                      equipment setup to final landscaping. We create
                      functional, durable, and aesthetically pleasing fitness
                      spaces that promote community wellness and fit seamlessly
                      into your park's design.
                    </p>
                    <Link
                      className="rts-read-more btn-primary"
                      href={"/park-development"}
                    >
                      <i className="far fa-arrow-right" />
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              {/* end single Service */}

              {/* start single Service */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="service-one-inner two">
                  <div className="thumbnail">
                    {/* <img
                    src="assets/images/service/icon/02.svg"
                    alt="water_cooler_service"
                  /> */}
                    <GiWaterTank
                      style={{ fontSize: "6rem", color: "#E33434" }}
                    />
                  </div>
                  <div className="service-details">
                    <Link href={"/water-cooler-installation-services"}>
                      <h5 className="title">Water & RO Cooler Installation</h5>
                    </Link>
                    <p className="disc">
                      Supply, installation, and maintenance of high-quality
                      water coolers and RO systems to provide safe, clean, and
                      chilled drinking water for organizations and communities.
                    </p>
                    <Link
                      className="rts-read-more btn-primary"
                      href={"/water-cooler-installation-services"}
                    >
                      <i className="far fa-arrow-right" />
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              {/* end single Service */}

              {/* start single Service */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="service-one-inner three">
                  <div className="thumbnail">
                    {/* <img
                    src="assets/images/service/icon/03.svg"
                    alt="security_service"
                  /> */}
                    <GiGuards style={{ fontSize: "6rem", color: "#E33434" }} />
                  </div>
                  <div className="service-details">
                    <Link href={"/security-manpower-services"}>
                      <h5 className="title">Security & Manpower Services</h5>
                    </Link>
                    <p className="disc">
                      Professional security personnel and skilled manpower
                      supply tailored to ensure safety, operational efficiency,
                      and compliance for corporate, residential, and industrial
                      clients.
                    </p>
                    <Link
                      className="rts-read-more btn-primary"
                      href={"/security-manpower-services"}
                    >
                      <i className="far fa-arrow-right" />
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              {/* end single Service */}

              {/* start single Service */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="service-one-inner four">
                  <div className="thumbnail">
                    {/* <img
                    src="assets/images/service/icon/04.svg"
                    alt="ac_chiller_service"
                  /> */}
                    <TbAirConditioning
                      style={{ fontSize: "6rem", color: "#E33434" }}
                    />
                  </div>
                  <div className="service-details">
                    <Link href={"/ac-chiller-plants-services"}>
                      <h5 className="title">AC Chiller Plant Services</h5>
                    </Link>
                    <p className="disc">
                      Complete AC chiller plant services including installation,
                      maintenance, descaling, and energy-efficient optimization
                      for commercial, industrial, and institutional facilities.
                    </p>
                    <Link
                      className="rts-read-more btn-primary"
                      href={"/ac-chiller-plants-services"}
                    >
                      <i className="far fa-arrow-right" />
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              {/* end single Service */}
            </div>

            <div className="row">
              <div className="cta-one-bg col-12">
                <div className="cta-one-inner">
                  <div className="cta-left">
                    <h4 className="title">
                      Let’s discuss how Pinnacle can support your growth.
                    </h4>
                  </div>
                  <div className="cta-right">
                    <Link className="rts-btn btn-white" href={"/contactus"}>
                      Lets Work Together
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* rts service post area End */}
      </div>
    </>
  );
}

export default ServiceEleven;
