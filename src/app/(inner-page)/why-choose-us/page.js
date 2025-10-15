import Link from "next/link";
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";

export const metadata = {
  title: "Pinnacle.Inc - Why Choose Us",
  keywords: "Pinnacle, Park Gym, Outdoor Fitness, Park Equipment",
  description:
    "Pinnacle Inc. is a leading provider of outdoor fitness solutions, specializing in park gym equipment installation.",
};

export default function ParkGymInstallation() {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Why Choose Us" },
  ];

  return (
    <div>
      <HeaderOne />
      <Breadcrumb title="Why Choose Us" breadcrumbs={breadcrumbs} />

      {/* Service Details Area */}
      <div className="rts-service-details-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-12 col-sm-12 col-12">
              <div className="service-detials-step-1">
                <div className="thumbnail">
                  <Carousel>
                    <CarouselItem interval={1000}>
                      <img
                        src="assets/images/service/slide-02.png"
                        alt="Why Choose Us - Our Services"
                      />
                    </CarouselItem>
                    <CarouselItem interval={500}>
                      <img
                        src="assets/images/service/water-slide-1.png"
                        alt="Quality Services"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src="assets/images/service/slide-03.png"
                        alt="Trusted Service Provider"
                      />
                    </CarouselItem>
                  </Carousel>
                </div>

                <h4 className="title">Why Choose Us</h4>
                <p className="disc">
                  At <strong>Pinnacle</strong>, we stand out in the market by
                  offering high-quality infrastructure and utility services at
                  the most competitive rates. Our direct partnerships with{" "}
                  <strong>manufacturers</strong> allow us to provide top-grade
                  equipment at lower costs—without compromising on quality. From
                  planning to execution, we focus on{" "}
                  <strong>
                    efficiency, durability, and customer satisfaction
                  </strong>
                  .
                </p>

                <h4 className="title">Our Core Services</h4>
                <p className="disc">
                  We deliver reliable and cost-effective solutions through our
                  specialized service segments:
                </p>
                <ul className="disc-list">
                  <li style={{listStyle:"disc"}}>
                    <strong>Open Gym Equipments Development</strong> – Complete planning and
                    installation of modern park infrastructure and outdoor
                    fitness zones.
                  </li>
                  <li style={{listStyle:"disc"}}>
                    <strong>Water Cooler Supplier Services</strong> – Direct
                    supply of energy-efficient water cooling systems at the best
                    market rates.
                  </li>
                  <li style={{listStyle:"disc"}}>
                    <strong>Security & Manpower Services</strong> – Trained,
                    verified, and professional manpower for residential,
                    commercial, and industrial needs.
                  </li>
                  <li style={{listStyle:"disc"}}>
                    <strong>AC Chiller Plants Services</strong> – Installation
                    and maintenance of advanced AC chiller systems for optimal
                    cooling performance.
                  </li>
                  <li style={{listStyle:"disc"}}>
                    <strong>Roads and Sewer Lines</strong> – High-quality
                    infrastructure development ensuring strength, safety, and
                    longevity.
                  </li>
                </ul>

                <h4 className="title">Why We’re Better Than the Rest</h4>
                <p className="disc">
                  Choosing Pinnacle means choosing a trusted partner dedicated
                  to excellence. Here’s what sets us apart from competitors:
                </p>

                <div className="row g-5 mt--30 mb--40">
                  <div className="col-lg-6">
                    <div className="service-details-card">
                      <div className="thumbnail">
                        <img
                          src="assets/images/service/icon/09.svg"
                          alt="Best Rates"
                          className="icon"
                        />
                      </div>
                      <div className="details">
                        <h6 className="title">Direct from Manufacturers</h6>
                        <p className="disc">
                          We provide better rates as we supply equipment
                          directly from trusted manufacturers, eliminating
                          middlemen.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-details-card">
                      <div className="thumbnail">
                        <img
                          src="assets/images/service/icon/10.svg"
                          alt="Durable Quality"
                          className="icon"
                        />
                      </div>
                      <div className="details">
                        <h6 className="title">High-Quality Materials</h6>
                        <p className="disc">
                          All our installations use premium-grade materials for
                          maximum durability and performance.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-details-card">
                      <div className="thumbnail">
                        <img
                          src="assets/images/service/icon/11.svg"
                          alt="Expert Team"
                          className="icon"
                        />
                      </div>
                      <div className="details">
                        <h6 className="title">Expert & Skilled Team</h6>
                        <p className="disc">
                          Our trained professionals ensure every project meets
                          international safety and quality standards.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-details-card">
                      <div className="thumbnail">
                        <img
                          src="assets/images/service/icon/12.svg"
                          alt="Timely Delivery"
                          className="icon"
                        />
                      </div>
                      <div className="details">
                        <h6 className="title">On-Time Project Delivery</h6>
                        <p className="disc">
                          We value your time and ensure every project is
                          completed within the committed schedule.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-details-card">
                      <div className="thumbnail">
                        <img
                          src="assets/images/service/icon/13.svg"
                          alt="Customer Support"
                          className="icon"
                        />
                      </div>
                      <div className="details">
                        <h6 className="title">Strong After-Sales Support</h6>
                        <p className="disc">
                          We build long-term relationships with reliable
                          maintenance and customer support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Benefits */}
              <div className="service-detials-step-3 mt--70 mt_md--50">
                <div className="row g-5 align-items-center">
                  <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="thumbnail sm-thumb-service">
                      <img
                        src="assets/images/service/sm-01.jpg"
                        alt="Customer Benefits"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb_md--20 mb_sm--20">
                    <h4 className="title">Customer Benefits</h4>
                    <p className="disc">
                      Partnering with <strong>Pinnacle</strong> ensures
                      long-term value, cost savings, and trusted service
                      quality.
                    </p>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Better rates with direct manufacturer supply</span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Durable materials and reliable infrastructure</span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Timely project execution and delivery</span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Expert manpower and modern equipment</span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Strong after-sales service and support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
          </div>
        </div>
      </div>

      <FooterOne />
      <BackToTop />
    </div>
  );
}
