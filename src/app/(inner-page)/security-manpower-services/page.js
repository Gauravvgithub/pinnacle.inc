import Link from "next/link";
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";

export default function Home() {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Our Service", link: "/our-service" },
    { label: "Security & Manpower Services" },
  ];
  return (
    <div className="">
      <HeaderOne />
      <Breadcrumb title="Security & Manpower Services" breadcrumbs={breadcrumbs} />
      {/* start service details area */}
      <div className="rts-service-details-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-12 col-sm-12 col-12">
              {/* service details left area start */}
              <div className="service-detials-step-1">
                <div className="thumbnail">
                  <img src="assets/images/service/03.jpeg" alt="business-area" />
                </div>
                <h4 className="title">
                  Security & Manpower Supply Services
                </h4>
                <p className="disc">
                  We specialize in providing comprehensive security and manpower solutions designed to safeguard premises, ensure smooth operations, and meet the workforce needs of businesses across industries. Our services are trusted by residential complexes, corporate offices, industrial sites, and public institutions.
                </p>
                <p className="disc">
                  With trained security professionals and a reliable manpower supply network, we deliver services that ensure protection, operational efficiency, and long-term value for our clients.                </p>

                <h4 className="title">
                  Our Expertise Covers
                </h4>
                <div className="disc">
                 <ul style={{ listStyleType: "disc", paddingLeft: "20px", margin: "10px 0" }}>
                    <li  style={{listStyle:"disc"}} >Deployment of trained security guards (day & night shifts)</li>
                    <li  style={{listStyle:"disc"}} >Round-the-clock monitoring and patrolling</li>
                    <li  style={{listStyle:"disc"}} >Access control and visitor management</li>
                    <li  style={{listStyle:"disc"}} >Emergency response and risk management</li>
                    <li  style={{listStyle:"disc"}} >Adherence to industry and statutory compliance standards</li>
                    <li  style={{listStyle:"disc"}} >Skilled, semi-skilled, and unskilled manpower supply</li>
                    <li  style={{listStyle:"disc"}} >Office and administrative staff</li>
                    <li  style={{listStyle:"disc"}} >Technical and operational workforce</li>
                    <li  style={{listStyle:"disc"}} >Housekeeping and facility management staff</li>
                  </ul>
                </div>


                <h4 className="title">Industry-Specific Workforce Solutions</h4>
                <p className="disc">
                  Every business has unique requirements. That’s why our manpower and security services are customized to fit specific sectors such as IT, manufacturing, construction, healthcare, and hospitality. Whether it’s short-term staffing for a project or a long-term workforce plan, we ensure businesses get the right people at the right time.
                </p>
                {/* <p className="disc">
                  Think solar-powered lamps, Wi-Fi corners, jogging tracks that
                  feel safe even late, water systems that save every drop. This
                  is part of green infrastructure — parks that work for today
                  and tomorrow.
                </p> */}

                <h4 className="title">
                  Reliable Security & Risk Management
                </h4>
                <p className="disc">
                  Our trained and licensed security personnel maintain discipline, vigilance, and professionalism at all times. From visitor management to emergency handling, we ensure a safe and secure environment, allowing clients to focus on their core operations without disruption.
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
                        <h6 className="title">Trusted Partner</h6>
                        <p className="disc">
                          Proven expertise in delivering manpower and security services for reputed organizations.
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
                          Round-the-clock availability of reliable guards and workforce.
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
                        <h6 className="title">Easy Customer Support</h6>
                        <p className="disc">
                          Dedicated assistance for continuous satisfaction.
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
                          Affordable and flexible service models tailored to client needs.
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
                      Our integrated solutions are designed to deliver safety, efficiency, and value:
                    </p>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Safe and secure premises with professional guards</span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Quick access to skilled and semi-skilled workforce</span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Reduced recruitment challenges with verified staff</span>
                    </div>

                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Long-term savings by optimized manpower solutions</span>
                    </div>
                     <div className="single-banifits">
                       <i className="far fa-check-circle" />
                    <span>Dedicated after-sales and support service</span>
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
