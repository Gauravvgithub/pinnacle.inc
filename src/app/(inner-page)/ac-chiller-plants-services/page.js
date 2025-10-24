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
    { label: "AC Chiller Plants Services" },
  ];
  return (
    <div className="">
      <HeaderOne />
      <Breadcrumb
        title="AC Chiller Plants Services"
        breadcrumbs={breadcrumbs}
        backgroundImage="assets/images/banner-services/ac-banner.jpg"
      />
      {/* start service details area */}
      <div className="rts-service-details-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-12 col-sm-12 col-12">
              {/* service details left area start */}
              <div className="service-detials-step-1">
                <div className="thumbnail">
                  {/* <img src="assets/images/service/04.jpg" alt="business-area" /> */}
                  <Carousel>
                    <CarouselItem interval={3000}>
                      {/* <ExampleCarouselImage text="First slide" /> */}
                      <img
                        src="assets/images/service/ac-1.jpg"
                        alt="water-cooler-service"
                      />
                      {/* <CarouselCaption>
                        <h3>First slide label</h3>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </CarouselCaption> */}
                    </CarouselItem>
                    <CarouselItem interval={1800}>
                      {/* <ExampleCarouselImage text="Second slide" /> */}
                      <img
                        src="assets/images/service/ac-2.jpg"
                        alt="water-cooler-service"
                      />
                      {/* <CarouselCaption>
                        <h3>Second slide label</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </CarouselCaption> */}
                    </CarouselItem>
                    <CarouselItem interval={1600}>
                      {/* <ExampleCarouselImage text="Third slide" /> */}
                      <img
                        src="assets/images/service/ac-3.jpg"
                        alt="water-cooler-service"
                      />
                      {/* <CarouselCaption>
                        <h3>Third slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </CarouselCaption> */}
                    </CarouselItem>
                    <CarouselItem interval={1400}>
                      {/* <ExampleCarouselImage text="Third slide" /> */}
                      <img
                        src="assets/images/service/ac-4.jpg"
                        alt="water-cooler-service"
                      />
                      {/* <CarouselCaption>
                        <h3>Third slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </CarouselCaption> */}
                    </CarouselItem>
                    <CarouselItem interval={1400}>
                      {/* <ExampleCarouselImage text="Third slide" /> */}
                      <img
                        src="assets/images/service/ac-5.jpg"
                        alt="water-cooler-service"
                      />
                      {/* <CarouselCaption>
                        <h3>Third slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </CarouselCaption> */}
                    </CarouselItem>
                    <CarouselItem interval={1400}>
                      {/* <ExampleCarouselImage text="Third slide" /> */}
                      <img
                        src="assets/images/service/ac-6.jpg"
                        alt="water-cooler-service"
                      />
                      {/* <CarouselCaption>
                        <h3>Third slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </CarouselCaption> */}
                    </CarouselItem>
                  </Carousel>
                </div>
                <h4 className="title">AC Chiller Plant Services</h4>
                <p className="disc">
                  We provide specialized AC chiller plant services designed to
                  ensure optimum performance, efficiency, and longevity of
                  large-scale cooling systems. Our expert team is equipped with
                  the technical know-how and modern tools required to manage
                  installation, descaling, preventive maintenance, and
                  comprehensive servicing of chiller plants across industrial,
                  commercial, and institutional facilities.
                </p>

                <div>
                  <h4 className="title">Our Expertise Covers</h4>
                  <ul
                    style={{
                      listStyleType: "disc",
                      paddingLeft: "20px",
                      margin: "10px 0",
                    }}
                  >
                    <li style={{ listStyle: "disc" }}>
                      Complete descaling and chemical cleaning of chiller
                      systems
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Preventive and corrective maintenance programs
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Performance optimization for maximum energy efficiency
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Repair, replacement, and servicing of chiller plant
                      components
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Annual Maintenance Contracts (AMC) for uninterrupted
                      operations
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="title">Recent Project Highlight</h4>
                  <p>
                    We successfully executed a complete AC chiller plant service
                    at Shri Kashi Vishwanath Mandir, Varanasi. The project
                    included thorough descaling and critical servicing to ensure
                    seamless cooling operations at this prestigious site.
                  </p>
                </div>
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
                        <h6 className="title">Instant Business Growth</h6>
                        <p className="disc">
                          Proven expertise in handling large-scale chiller plant
                          projects.
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
                        <h6 className="title">24/7 Quality Service</h6>
                        <p className="disc">
                          Advanced tools, skilled technicians, and reliable
                          execution.
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
                        <h6 className="title">Customer Support</h6>
                        <p className="disc">
                          Dedicated servicing with quick response for client
                          satisfaction.
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
                        <h6 className="title">Cost-Effective</h6>
                        <p className="disc">
                          Optimized solutions to ensure long-term efficiency and
                          reduced downtime.
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

                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>
                        Improved efficiency and longer lifespan of chiller
                      </span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Reduced operational downtime with maintenance</span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>
                        Cost savings through optimized energy performance
                      </span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>
                        Trusted service ensuring uninterrupted operations
                      </span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>
                        Trusted expertise in critical projects across industries
                      </span>
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
          </div>
        </div>
      </div>
      {/* End service details area */}

      <FooterOne />
      <BackToTop />
    </div>
  );
}
