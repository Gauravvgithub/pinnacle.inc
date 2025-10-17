import Link from "next/link";
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";

export default function Home() {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Our Service", link: "/our-service" },
    { label: "Gas & Water Pipeline Services" },
  ];
  return (
    <div className="">
      <HeaderOne />
      <Breadcrumb
        title="Gas & Water Pipeline Services"
        breadcrumbs={breadcrumbs}
      />
      {/* start service details area */}
      <div className="rts-service-details-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-12 col-sm-12 col-12">
              {/* service details left area start */}
              <div className="service-detials-step-1">
                <div className="thumbnail">
                  <Carousel>
                    <CarouselItem interval={3000}>
                      <img
                        src="assets/images/service/pipeline-1.jpg"
                        alt="gas-and-water-pipeline-installation"
                      />
                    </CarouselItem>
                    <CarouselItem interval={1800}>
                      <img
                        src="assets/images/service/pipeline-3.jpg"
                        alt="underground-pipeline-work"
                      />
                    </CarouselItem>
                    <CarouselItem interval={1600}>
                      <img
                        src="assets/images/service/pipeline-4.jpg"
                        alt="pipeline-jointing-work"
                      />
                    </CarouselItem>
                    <CarouselItem interval={1600}>
                      <img
                        src="assets/images/service/pipeline-2.jpg"
                        alt="pipeline-network-infrastructure"
                      />
                    </CarouselItem>
                  </Carousel>
                </div>

                <h4 className="title">Gas & Water Pipeline Services</h4>
                <p className="disc">
                  We provide reliable and professionally managed gas and water
                  pipeline installation services designed to meet the highest
                  industry standards. From underground network construction to
                  advanced utility connections, our solutions ensure safe,
                  efficient, and long-lasting pipeline systems for residential,
                  commercial, and industrial applications.
                </p>
                <p className="disc">
                  With advanced installation techniques, quality materials, and
                  experienced engineers, we deliver pipeline infrastructure that
                  guarantees seamless flow, leak-proof performance, and
                  long-term durability while meeting all safety and compliance
                  requirements.
                </p>

                <h4 className="title">Our Expertise Covers</h4>
                <div className="disc">
                  <ul
                    style={{
                      listStyleType: "disc",
                      paddingLeft: "40px",
                      margin: "10px 0",
                    }}
                  >
                    <li style={{ listStyleType: "disc" }}>
                      Installation of gas and water supply pipelines
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      HDPE, GI, DI, and PVC pipeline laying
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Underground utility trenching and excavation
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Jointing, welding, and pressure testing of pipelines
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Residential, commercial, and industrial pipeline networks
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Valve chambers, meter installation, and fittings
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Leak detection and preventive maintenance
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Compliance with safety and regulatory standards
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      End-to-end commissioning and handover support
                    </li>
                  </ul>
                </div>

                <h4 className="title">
                  Safe, Efficient & Reliable Pipeline Systems
                </h4>
                <p className="disc">
                  Our gas and water pipeline services are engineered for
                  precision, reliability, and performance. Whether it's a small
                  residential network or a large-scale industrial project, we
                  ensure seamless integration and safe operation of every system
                  we install.
                </p>

                <h4 className="title">
                  Quality Materials & Expert Engineering
                </h4>
                <p className="disc">
                  We use top-grade piping materials, advanced jointing methods,
                  and modern equipment to ensure system integrity. Each project
                  is executed with meticulous planning and skilled workmanship
                  to guarantee leak-proof and efficient performance.
                </p>

                <div className="row g-5 mt--30 mb--40">
                  <div className="col-lg-6">
                    {/* single service details card */}
                    <div className="service-details-card">
                      <div className="thumbnail">
                        <img
                          src="assets/images/service/icon/09.svg"
                          alt=""
                          className="icon"
                        />
                      </div>
                      <div className="details">
                        <h6 className="title">Proven Expertise</h6>
                        <p className="disc">
                          Extensive experience in gas and water pipeline
                          installations across multiple industries and terrains.
                        </p>
                      </div>
                    </div>
                    {/* single service details card End */}
                  </div>
                  <div className="col-lg-6">
                    {/* single service details card */}
                    <div className="service-details-card">
                      <div className="thumbnail">
                        <img
                          src="assets/images/service/icon/10.svg"
                          alt=""
                          className="icon"
                        />
                      </div>
                      <div className="details">
                        <h6 className="title">On-Time Delivery</h6>
                        <p className="disc">
                          Timely execution with minimal disruption to existing
                          infrastructure.
                        </p>
                      </div>
                    </div>
                    {/* single service details card End */}
                  </div>
                  <div className="col-lg-6">
                    {/* single service details card */}
                    <div className="service-details-card">
                      <div className="thumbnail">
                        <img
                          src="assets/images/service/icon/11.svg"
                          alt=""
                          className="icon"
                        />
                      </div>
                      <div className="details">
                        <h6 className="title">Technical Support</h6>
                        <p className="disc">
                          Continuous inspection, testing, and technical
                          assistance throughout the project lifecycle.
                        </p>
                      </div>
                    </div>
                    {/* single service details card End */}
                  </div>
                  <div className="col-lg-6">
                    {/* single service details card */}
                    <div className="service-details-card">
                      <div className="thumbnail">
                        <img
                          src="assets/images/service/icon/12.svg"
                          alt=""
                          className="icon"
                        />
                      </div>
                      <div className="details">
                        <h6 className="title">Cost-Effective Solutions</h6>
                        <p className="disc">
                          Optimized design and installation methods for
                          long-term savings and reliable operation.
                        </p>
                      </div>
                    </div>
                    {/* single service details card End */}
                  </div>
                </div>
              </div>

              {/* service details left area end */}
              <div className="service-detials-step-3 mt--70 mt_md--50">
                <div className="row g-5 align-items-center">
                  <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="thumbnail sm-thumb-service">
                      <img
                        src="assets/images/service/sm-01.jpg"
                        alt="Service"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb_md--20 mb_sm--20">
                    <h4 className="title">Customer Benefits</h4>
                    <p className="disc">
                      Our gas and water pipeline installation services are built
                      to deliver safety, efficiency, and long-term reliability:
                    </p>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>
                        Leak-proof, high-performance pipeline networks
                      </span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Safe and efficient installation methods</span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Regulatory compliance and safety assurance</span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Expert supervision and technical support</span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>
                        Cost-effective solutions with minimal maintenance needs
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*rts blog wizered area */}
            {/* Sidebar */}
            <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 pl--50 pl_md--0 pl-lg-controler pl_sm--0">
              <div className="rts-single-wized Categories service">
                <div className="wized-header">
                  <h5 className="title">Other Services</h5>
                </div>
                <div className="wized-body">
                  <ul className="single-categories">
                    <li>
                      <Link href={"/our-service"}>
                        All Services <i className="far fa-long-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                  <ul className="single-categories">
                    <li>
                      <Link href={"/park-development"}>
                        Park Gym Installation{" "}
                        <i className="far fa-long-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                  <ul className="single-categories">
                    <li>
                      <Link href={"/water-cooler-supplier-services"}>
                        Water Cooler Supplier Services{" "}
                        <i className="far fa-long-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                  <ul className="single-categories">
                    <li>
                      <Link href={"/security-manpower-services"}>
                        Security & Manpower Services{" "}
                        <i className="far fa-long-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                  <ul className="single-categories">
                    <li>
                      <Link href={"/ac-chiller-plants-services"}>
                        AC Chiller Plants Services{" "}
                        <i className="far fa-long-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                  <ul className="single-categories">
                    <li>
                      <Link href={"/roads-and-sewer-lines-services"}>
                        Roads and Sewers Lines{" "}
                        <i className="far fa-long-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                  <ul className="single-categories">
                    <li>
                      <Link href={"/solar-light-services"}>
                        Solar Light Services{" "}
                        <i className="far fa-long-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                  <ul className="single-categories">
                    <li>
                      <Link href={"/interlocking-brick-work-services"}>
                        Interlocking Brick Work Service{" "}
                        <i className="far fa-long-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                  <ul className="single-categories">
                    <li>
                      <Link href={"/gas-and-water-pipeline-services"}>
                        Gas & Water Pipeline Services{" "}
                        <i className="far fa-long-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rts-single-wized contact service">
                <div className="wized-header">
                  <Link href={"#"}>
                    <img
                      src="assets/images/logo/logo.png"
                      alt="Pinnacle Logo"
                    />
                  </Link>
                </div>
                <div className="wized-body">
                  <h5 className="title">Need Help? We Are Here To Assist</h5>
                  <Link className="rts-btn btn-primary" href={"/contactus"}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            {/* rts- blog wizered end area */}
          </div>
        </div>
      </div>
      {/* End service details area */}

      <FooterOne />
      <BackToTop />
    </div>
  );
}
