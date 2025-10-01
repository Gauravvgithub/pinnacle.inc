import Link from "next/link";
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";

export const metadata = {
  title: "Pinnacle.Inc - Park Gym Equipment Installation",
  keywords: "Pinnacle, Park Gym, Outdoor Fitness, Park Equipment",
  description:
    "Pinnacle installs outdoor gym equipment in parks for healthier communities.",
  icons: {
    icon: "/assets/images/fav.svg",
  },
};

export default function ParkGymInstallation() {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Our Service", link: "/our-service" },
    { label: "Park Development" },
  ];

  return (
    <div>
      <HeaderOne />
      <Breadcrumb title="Park Development" breadcrumbs={breadcrumbs} />

      {/* Service Details Area */}
      <div className="rts-service-details-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-12 col-sm-12 col-12">
              <div className="service-detials-step-1">
                <div className="thumbnail">
                  <img
                    src="assets/images/service/01.jpg"
                    alt="Park Gym Equipment"
                  />
                </div>

                <h4 className="title">Park Development</h4>
                <p className="disc">
                  At Pinnacle, we transform public spaces into vibrant community
                  hubs by equipping parks with high-quality open gym machines.
                  Our Park Development service goes beyond installation – it’s
                  about encouraging healthier lifestyles, fostering social
                  connections, and maximizing the use of open spaces. From
                  planning to execution, we ensure every setup meets
                  international safety and durability standards.
                </p>

                <h4 className="title">
                  Outdoor Gym Equipment Installation in Parks
                </h4>
                <p className="disc">
                  Outdoor gyms are fast becoming a sustainable way to promote
                  fitness in communities. Pinnacle specializes in designing and
                  installing open-air gym zones that are safe, durable, and
                  suitable for all age groups. From strength stations to cardio
                  equipment, we provide end-to-end solutions for creating
                  engaging fitness spaces in parks, gardens, and recreational
                  areas.
                </p>

                <h4 className="title">
                  Why Choose Pinnacle for Park Gym Installation
                </h4>
                <p className="disc">
                  With extensive experience in infrastructure and fitness
                  projects, Pinnacle ensures excellence at every stage. Our team
                  conducts detailed site surveys, recommends equipment layouts,
                  and delivers flawless installations. We prioritize long-term
                  durability, safety, and user comfort, ensuring that every
                  fitness zone is both functional and inviting for all.
                </p>

                <h4 className="title">Safe & Durable Fitness Solutions</h4>
                <p className="disc">
                  All our gym equipment is manufactured with weather-resistant,
                  heavy-duty materials designed to withstand continuous use and
                  varying climates. Each installation is ergonomically designed,
                  tested for safety, and suitable for everyone – from casual
                  walkers to fitness enthusiasts.
                </p>

                <h4 className="title">Community Benefits</h4>
                <p className="disc">
                  Parks with open gyms encourage active, healthy lifestyles and foster stronger
                  communities. Our installations bring people together, reduce sedentary habits, and
                  create attractive public spaces. From morning walkers to young athletes, everyone
                  benefits from the accessibility and convenience of outdoor gym setups.
                </p>

                <div className="row g-5 mt--30 mb--40">
                  <div className="col-lg-6">
                    <div className="service-details-card">
                      <div className="thumbnail">
                        <img
                          src="assets/images/service/icon/09.svg"
                          alt="Professional Setup"
                          className="icon"
                        />
                      </div>
                      <div className="details">
                        <h6 className="title">Professional Setup</h6>
                        <p className="disc">
                          Expert team handling planning, layout, and
                          installation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-details-card">
                      <div className="thumbnail">
                        <img
                          src="assets/images/service/icon/10.svg"
                          alt="Durable Equipment"
                          className="icon"
                        />
                      </div>
                      <div className="details">
                        <h6 className="title">Durable Equipment</h6>
                        <p className="disc">
                          High-quality materials that withstand outdoor
                          conditions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-details-card">
                      <div className="thumbnail">
                        <img
                          src="assets/images/service/icon/11.svg"
                          alt="Safe Designs"
                          className="icon"
                        />
                      </div>
                      <div className="details">
                        <h6 className="title">Safe Designs</h6>
                        <p className="disc">
                          Ergonomically designed equipment ensuring safety for
                          all users.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-details-card">
                      <div className="thumbnail">
                        <img
                          src="assets/images/service/icon/12.svg"
                          alt="Community Impact"
                          className="icon"
                        />
                      </div>
                      <div className="details">
                        <h6 className="title">Community Impact</h6>
                        <p className="disc">
                          Promotes fitness, social engagement, and well-being in
                          parks.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Benefits */}
              {/* <div className="service-detials-step-3 mt--70 mt_md--50">
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
                      Pinnacle’s park gym installations enhance health,
                      encourage community interaction, and add value to public
                      spaces.
                    </p>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>High-quality and durable equipment</span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Safe and user-friendly designs</span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Promotes fitness and community engagement</span>
                    </div>
                  </div>
                </div>
              </div> */}
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
          </div>
        </div>
      </div>

      <FooterOne />
      <BackToTop />
    </div>
  );
}
