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
    { label: "Roads and Sewer Lines Services" },
  ];
  return (
    <div className="">
      <HeaderOne />
      <Breadcrumb
        title="Roads and Sewer Lines Services"
        breadcrumbs={breadcrumbs}
        backgroundImage="assets/images/banner-services/road-banner.jpg"
      />
      {/* start service details area */}
      <div className="rts-service-details-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-12 col-sm-12 col-12">
              {/* service details left area start */}
              <div className="service-detials-step-1">
                <div className="thumbnail">
                  {/* <img
                    src="assets/images/service/05.jpg"
                    alt="road-sewer-construction"
                  /> */}

                  <Carousel>
                    <CarouselItem interval={3000}>
                      {/* <ExampleCarouselImage text="First slide" /> */}
                      <img
                        src="assets/images/service/road-1.jpeg"
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
                        src="assets/images/service/road-2.jpg"
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
                        src="assets/images/service/road-3.jpg"
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
                        src="assets/images/service/road-4.jpg"
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
                    <CarouselItem interval={1200}>
                      {/* <ExampleCarouselImage text="Third slide" /> */}
                      <img
                        src="assets/images/service/road-5.jpg"
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
                <h4 className="title">Road & Sewer Construction Services</h4>
                <p className="disc">
                  We provide end-to-end road and sewer construction solutions
                  that combine advanced engineering, superior materials, and
                  skilled manpower. From planning and design to execution and
                  maintenance, Pinnacle ensures every project is built to last
                  with quality, safety, and environmental sustainability in
                  mind.
                </p>
                <p className="disc">
                  Our expert team specializes in delivering durable,
                  cost-effective infrastructure solutions that meet government
                  regulations, withstand heavy usage, and support community
                  growth and urban development.
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
                      Construction of highways, roads, and pavements
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Drainage and sewer network installation
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Stormwater management systems
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Excavation, grading, and compaction works
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Road resurfacing and maintenance services
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Underground utility and pipeline works
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Quality testing and compliance with IRC standards
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Manhole and chamber construction
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Wastewater treatment and disposal systems
                    </li>
                  </ul>
                </div>

                <h4 className="title">Specialized Infrastructure Solutions</h4>
                <p className="disc">
                  Every project demands a customized approach. Our road and
                  sewer construction services are designed to serve industrial
                  zones, residential developments, government projects, and
                  commercial hubs. From small-scale developments to large
                  infrastructure networks, we ensure timely delivery with
                  unmatched precision.
                </p>

                <h4 className="title">
                  Reliable Construction & Quality Assurance
                </h4>
                <p className="disc">
                  With a focus on innovation, safety, and performance, our
                  engineers and field teams adhere to strict quality and
                  environmental standards. We leverage modern machinery,
                  advanced surveying tools, and project management systems to
                  deliver reliable, long-lasting infrastructure.
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
                          Years of experience in delivering high-quality road
                          and sewer infrastructure across diverse terrains.
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
                          Efficient project management ensuring completion
                          within schedule and budget.
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
                          Continuous supervision, inspection, and client
                          coordination to ensure excellence.
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
                          Optimized designs and material usage for long-term
                          durability at minimal cost.
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
                      Our infrastructure services are tailored to ensure
                      long-term performance, safety, and satisfaction:
                    </p>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>
                        Durable and well-engineered road & sewer systems
                      </span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Expert supervision and technical precision</span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>
                        Compliance with environmental and safety standards
                      </span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>
                        Timely completion with transparent communication
                      </span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>
                        Long-term cost savings and reduced maintenance
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
