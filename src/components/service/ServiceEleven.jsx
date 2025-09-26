"use client";
import React from "react";
import Link from "next/link";

function ServiceEleven() {
  return (
    <div>
      {/* rts service post area  Start*/}
      <div className="rts-service-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rts-title-area service text-center">
                <p className="pre-title">Our Services</p>
                <h3 className="title">
                  Pinnacle Construction &amp; Development Services
                </h3>
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
                  <img
                    src="assets/images/service/icon/01.svg"
                    alt="finbiz_service"
                  />
                </div>
                <div className="service-details">
                  <Link href={"/park-development"}>
                    <h5 className="title">Park Development</h5>
                  </Link>
                  <p className="disc">
                    Picture a piece of land. Empty. Dusty. Nobody goes there.
                    Now picture the same space with our team in it: green lawns,
                    tall trees, walking paths, soft lights, kids laughing, and
                    neighbors getting together.
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
                  <img
                    src="assets/images/service/icon/02.svg"
                    alt="finbiz_service"
                  />
                </div>
                <div className="service-details">
                  <Link href={"/infrastructure-development"}>
                    <h5 className="title">Infrastructure Development</h5>
                  </Link>
                  <p className="disc">
                    Paths, bridges, and roads. Places that are open to the
                    public. These are the city's quiet backbones. We know how
                    important they are because they connect people and help
                    businesses grow.
                  </p>
                  <Link
                    className="rts-read-more btn-primary"
                    href={"/infrastructure-development"}
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
                  <img
                    src="assets/images/service/icon/03.svg"
                    alt="finbiz_service"
                  />
                </div>
                <div className="service-details">
                  <Link href={"/general-contracting-services"}>
                    <h5 className="title">General Contracting Services</h5>
                  </Link>
                  <p className="disc">
                    Some clients just want everything taken care of, from the
                    paperwork to the final touch. That's exactly what our
                    general contracting services are for. We take care of
                    every..
                  </p>
                  <Link
                    className="rts-read-more btn-primary"
                    href={"/general-contracting-services"}
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
                  <img
                    src="assets/images/service/icon/04.svg"
                    alt="finbiz_service"
                  />
                </div>
                <div className="service-details">
                  <Link href={"/design-build-renovation-remodeling"}>
                    <h5 className="title">
                      Design - Build Renovation & Remodeling
                    </h5>
                  </Link>
                  <p className="disc">
                    Pinnacle is a design and build company, which means we plan
                    and build everything in one place. That means things will
                    get done faster, work together better, and have fewer
                    delays.
                  </p>
                  <Link
                    className="rts-read-more btn-primary"
                    href={"/design-build-renovation-remodeling"}
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
                  <h3 className="title">
                    Let’s discuss about how we can help make your business
                    better
                  </h3>
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
      {/* rts service post area ENd */}
    </div>
  );
}

export default ServiceEleven;
