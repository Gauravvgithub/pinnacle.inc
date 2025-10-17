"use client";
import React from "react";
import Link from "next/link";
import { CgGym } from "react-icons/cg";
import { GiWaterTank } from "react-icons/gi";
import { GiGuards } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { LiaRoadSolid } from "react-icons/lia";
import { GiSolarPower } from "react-icons/gi";
import { BsBricks } from "react-icons/bs";
import { GiPipes } from "react-icons/gi";

function ServiceEleven() {
  return (
    <>
      <div>
        {/* rts service post area Start*/}
        <div
          className="rts-service-area rts-section-gap"
          style={{ padding: "100px 0" }}
        >
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

          <div className="container-fluid service-main plr--120-service mt--5 plr_md--0 pl_sm--0 pr_sm--0">
            <div className="background-service row" style={{ padding: "10px" }}>
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
                    <Link href={"/water-cooler-supplier-services"}>
                      <h5 className="title">Water & RO Cooler Installation</h5>
                    </Link>
                    <p className="disc">
                      Supply, installation, and maintenance of high-quality
                      water coolers and RO systems to provide safe, clean, and
                      chilled drinking water for organizations and communities.
                    </p>
                    <Link
                      className="rts-read-more btn-primary"
                      href={"/water-cooler-supplier-services"}
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

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="service-one-inner three">
                  <div className="thumbnail">
                    {/* <img
                    src="assets/images/service/icon/03.svg"
                    alt="security_service"
                  /> */}
                    <LiaRoadSolid
                      style={{ fontSize: "6rem", color: "#E33434" }}
                    />
                  </div>
                  <div className="service-details">
                    <Link href={"/roads-and-sewer-lines-services"}>
                      <h5 className="title">
                        Roads & Sewer Lines Construction Services
                      </h5>
                    </Link>
                    <p className="disc">
                      Reliable and expertly managed road and sewer line
                      construction services designed to ensure durable
                      infrastructure, efficient drainage systems, and long-term
                      functionality. Our team delivers high-quality workmanship
                      that meets regulatory standards and supports urban and
                      industrial development with precision and safety.
                    </p>
                    <Link
                      className="rts-read-more btn-primary"
                      href={"/roads-and-sewer-lines-services"}
                    >
                      <i className="far fa-arrow-right" />
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="service-one-inner three">
                  <div className="thumbnail">
                    <GiSolarPower
                      style={{ fontSize: "6rem", color: "#E33434" }}
                    />
                  </div>
                  <div className="service-details">
                    <Link href={"/solar-light-services"}>
                      <h5 className="title">Solar Light Services</h5>
                    </Link>
                    <p className="disc">
                      We offer professional solar lighting solutions designed to
                      deliver sustainable, energy-efficient, and cost-effective
                      illumination for residential, commercial, and public
                      spaces. From installation to maintenance, our team ensures
                      reliable performance, eco-friendly operation, and
                      long-lasting durability. Perfect for pathways, streets,
                      and industrial sites.
                    </p>
                    <Link
                      className="rts-read-more btn-primary"
                      href={"/solar-light-services"}
                    >
                      <i className="far fa-arrow-right" />
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="service-one-inner three">
                  <div className="thumbnail">
                    <BsBricks style={{ fontSize: "6rem", color: "#E33434" }} />
                  </div>
                  <div className="service-details">
                    <Link href={"/interlocking-brick-work-services"}>
                      <h5 className="title">
                        Interlocking Brick Work Services
                      </h5>
                    </Link>
                    <p className="disc">
                      Our interlocking brick work services provide durable,
                      aesthetically appealing, and low-maintenance paving
                      solutions. Ideal for driveways, footpaths, parking areas,
                      and landscapes, we ensure precise installation with
                      superior materials and skilled craftsmanship. Built to
                      withstand heavy loads and harsh weather, our paving
                      solutions combine strength with style.
                    </p>
                    <Link
                      className="rts-read-more btn-primary"
                      href={"/interlocking-brick-work-services"}
                    >
                      <i className="far fa-arrow-right" />
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="service-one-inner three">
                  <div className="thumbnail">
                    <GiPipes style={{ fontSize: "6rem", color: "#E33434" }} />
                  </div>
                  <div className="service-details">
                    <Link href={"/gas-and-water-pipeline-services"}>
                      <h5 className="title">Gas & Water Pipeline Services</h5>
                    </Link>
                    <p className="disc">
                      We specialize in the installation, maintenance, and repair
                      of gas and water pipelines for residential, commercial,
                      and industrial applications. Our team ensures safe,
                      leak-proof, and efficient pipeline systems that meet all
                      regulatory standards. From planning to execution, we focus
                      on reliability, longevity, and operational excellence.
                    </p>
                    <Link
                      className="rts-read-more btn-primary"
                      href={"/gas-and-water-pipeline-services"}
                    >
                      <i className="far fa-arrow-right" />
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
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
