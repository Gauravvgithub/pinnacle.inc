import Link from "next/link";
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";

export default function WaterCoolerInstallation() {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Our Service", link: "/our-service" },
    { label: "Water Cooler Installation" },
  ];
  return (
    <div className="">
      <HeaderOne />
      <Breadcrumb title="Water Cooler Installation" breadcrumbs={breadcrumbs} />

      {/* start service details area */}
      <div className="rts-service-details-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-12 col-sm-12 col-12">
              {/* service details left area start */}
              <div className="service-detials-step-1">
                <div className="thumbnail">
                  <img
                    src="assets/images/service/02.png"
                    alt="water-cooler-service"
                  />
                </div>
                <h4 className="title">Water Cooler Installation Services</h4>
                <p className="disc">
                  We specialize in the supply and installation of high-quality
                  water coolers and drinking water systems at various public and
                  private locations. Our services ensure access to safe, clean,
                  and chilled drinking water, making us a trusted partner for
                  organizations that value health, hygiene, and community
                  welfare.
                </p>
                <p className="disc">
                  Over the years, we have successfully executed projects under
                  government tenders and corporate contracts with reputed
                  organizations such as:
                </p>
                <ul className="disc" >
                  <li style={{listStyle:"disc"}} >GAIL (Gas Authority of India Limited)</li>
                  <li style={{listStyle:"disc"}} >BPCL (Bharat Petroleum Corporation Limited)</li>
                  <li style={{listStyle:"disc"}} >Other leading institutions and enterprises</li>
                </ul>

                <h4 className="title">Our Expertise Covers</h4>
                <ul className="disc">
                  <li style={{listStyle:"disc"}} >End-to-end installation of water coolers</li>
                  <li style={{listStyle:"disc"}} >Regular servicing and maintenance support</li>
                  <li style={{listStyle:"disc"}} >Compliance with safety and quality standards</li>
                  <li style={{listStyle:"disc"}} >Efficient project execution within timelines</li>
                </ul>

                <p className="disc">
                  By combining technical know-how with reliable execution, we
                  continue to build long-term partnerships with organizations
                  across industries.
                </p>

                {/* service highlights */}
                <div className="row g-5 mt--30 mb--40">
                  <div className="col-lg-6">
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
                          Successfully executed multiple government and
                          corporate water cooler projects.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-details-card">
                      <div className="thumbnail">
                        <img
                          src="assets/images/service/icon/10.svg"
                          alt=""
                          className="icon"
                        />
                      </div>
                      <div className="details">
                        <h6 className="title">Quality Service</h6>
                        <p className="disc">
                          Delivering safe, hygienic, and durable installations
                          with ongoing maintenance support.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
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
                          Prompt servicing and maintenance for continuous
                          performance and client satisfaction.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
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
                          Affordable solutions with long-term value and reduced
                          maintenance costs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* customer benefits */}
              <div className="service-detials-step-3 mt--70 mt_md--50">
                <div className="row g-5 align-items-center">
                  <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="thumbnail sm-thumb-service">
                      <img
                        src="assets/images/service/sm-water.jpg"
                        alt="Service"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb_md--20 mb_sm--20">
                    <h4 className="title">Customer Benefits</h4>
                    <p className="disc">
                      Our water cooler solutions are designed to provide maximum
                      convenience, health benefits, and long-term cost savings.
                    </p>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Safe and clean drinking water access</span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Energy-efficient and eco-friendly systems</span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Dedicated after-sales support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* sidebar area */}
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
                      <Link href={"/water-cooler-installation-services"}>
                        Water Cooler Installation Services{" "}
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
            {/* end sidebar */}
          </div>
        </div>
      </div>
      {/* End service details area */}

      <FooterOne />
      <BackToTop />
    </div>
  );
}
