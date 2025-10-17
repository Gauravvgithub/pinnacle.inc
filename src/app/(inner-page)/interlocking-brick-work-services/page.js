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
    { label: "Interlocking Brick Work Services" },
  ];
  return (
    <div className="">
      <HeaderOne />
      <Breadcrumb
        title="Interlocking Brick Work Services"
        breadcrumbs={breadcrumbs}
        backgroundImage="assets/images/banner-services/interlocking-banner.jpg"
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
                        src="assets/images/service/interlocking-1.jpg"
                        alt="interlocking-brick-installation"
                      />
                    </CarouselItem>
                    <CarouselItem interval={1800}>
                      <img
                        src="assets/images/service/interlocking-2.jpg"
                        alt="paver-block-work"
                      />
                    </CarouselItem>
                    <CarouselItem interval={1600}>
                      <img
                        src="assets/images/service/interlocking-3.jpg"
                        alt="pathway-interlock"
                      />
                    </CarouselItem>{" "}
                    <CarouselItem interval={1600}>
                      <img
                        src="assets/images/service/interlocking-4.jpg"
                        alt="pathway-interlock"
                      />
                    </CarouselItem>
                  </Carousel>
                </div>

                <h4 className="title">Interlocking Brick Work Services</h4>
                <p className="disc">
                  We specialize in professional interlocking brick work
                  solutions designed to enhance durability, aesthetics, and
                  functionality in infrastructure and landscape projects. Our
                  services ensure long-lasting pavements with strong structural
                  integrity, ideal for residential, commercial, and industrial
                  applications.
                </p>
                <p className="disc">
                  Using high-quality paver blocks, precise leveling techniques,
                  and sustainable construction practices, we create smooth,
                  uniform, and weather-resistant surfaces that withstand heavy
                  usage and require minimal maintenance.
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
                      Interlocking brick and paver block installation
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Driveway, parking lot, and footpath paving
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Walkway, garden, and landscape paving solutions
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Pattern design and customized paving layouts
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Edge finishing and drainage solutions
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Paver repair, replacement, and maintenance
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Heavy-duty paving for industrial and commercial zones
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Installation using premium-grade pavers and sand bedding
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Compliance with ISI and construction standards
                    </li>
                  </ul>
                </div>

                <h4 className="title">Strong, Durable & Aesthetic Paving</h4>
                <p className="disc">
                  Our interlocking brick work solutions combine strength with
                  design flexibility. Whether it’s a residential driveway, a
                  commercial walkway, or large-scale infrastructure, our team
                  ensures precision installation for a clean and durable finish.
                </p>

                <h4 className="title">
                  Quality Materials & Skilled Craftsmanship
                </h4>
                <p className="disc">
                  We use weather-resistant, high-compression strength pavers
                  along with skilled laying techniques to ensure durability and
                  uniformity. Every project is executed with careful attention
                  to detail, ensuring both functionality and visual appeal.
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
                          Years of experience in high-quality interlocking brick
                          installation and paving projects.
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
                          Fast and precise installation with minimal downtime.
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
                          Expert on-site supervision and post-installation
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
                          Long-lasting paving that minimizes maintenance and
                          maximizes value.
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
                      Our interlocking brick work services are tailored to
                      deliver strength, design flexibility, and long-term value:
                    </p>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Durable, weather-resistant paving solutions</span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>
                        Custom designs for any infrastructure requirement
                      </span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Expert installation and finishing</span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>
                        Timely project completion with professional support
                      </span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Low maintenance and long-term cost savings</span>
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
