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
    { label: "Solar Light Services" },
  ];
  return (
    <div className="">
      <HeaderOne />
      <Breadcrumb
        title="Solar Light Services"
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
                        src="assets/images/service/solar-1.jpg"
                        alt="solar-light-installation"
                      />
                    </CarouselItem>
                    <CarouselItem interval={1800}>
                      <img
                        src="assets/images/service/solar-2.jpg"
                        alt="solar-street-light"
                      />
                    </CarouselItem>
                    <CarouselItem interval={1600}>
                      <img
                        src="assets/images/service/solar-3.jpg"
                        alt="solar-light-maintenance"
                      />
                    </CarouselItem>
                  </Carousel>
                </div>

                <h4 className="title">Solar Light Services</h4>
                <p className="disc">
                  We provide end-to-end solar lighting solutions designed to
                  deliver sustainable, cost-efficient, and eco-friendly
                  illumination for residential, commercial, and industrial
                  applications. Our expertise covers everything from design and
                  installation to long-term maintenance, ensuring reliable
                  lighting performance even in remote or off-grid areas.
                </p>
                <p className="disc">
                  With a strong focus on energy efficiency and durability, our
                  solar lighting systems reduce operational costs while
                  contributing to a greener future. Each project is executed
                  with precision, compliance, and advanced technology for
                  maximum impact.
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
                      Solar street light installation and maintenance
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Solar-powered pathway and garden lighting
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Smart solar lighting with motion sensors and timers
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Solar energy system design and integration
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Off-grid and hybrid lighting solutions
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Solar panel mounting and wiring works
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      LED lighting with energy-saving technology
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Compliance with energy and environmental standards
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Post-installation inspection and quality assurance
                    </li>
                  </ul>
                </div>

                <h4 className="title">
                  Sustainable & Smart Lighting Solutions
                </h4>
                <p className="disc">
                  Our solar lighting solutions are ideal for roads, parks,
                  residential colonies, commercial complexes, industrial zones,
                  and government projects. We customize each project to maximize
                  efficiency, reduce energy bills, and minimize carbon
                  footprint.
                </p>

                <h4 className="title">
                  Reliable Technology & Quality Assurance
                </h4>
                <p className="disc">
                  We use advanced photovoltaic technology, weather-resistant
                  materials, and smart control systems to deliver lighting
                  solutions that are built to last. Our team adheres to strict
                  quality standards and ensures every installation meets
                  performance and safety requirements.
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
                          Years of experience in providing sustainable and
                          reliable solar lighting systems.
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
                          Quick and efficient installation with minimal
                          disruption.
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
                          Comprehensive after-sales service and expert technical
                          assistance.
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
                          Energy-saving technology that reduces long-term
                          operational costs.
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
                      Our solar lighting services are tailored to provide
                      efficiency, reliability, and long-term savings:
                    </p>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>
                        Sustainable and energy-efficient lighting solutions
                      </span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Expert supervision and technical precision</span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>
                        Compliance with renewable energy and safety standards
                      </span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>
                        Timely project delivery with transparent communication
                      </span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>
                        Long-term cost savings with minimal maintenance
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
