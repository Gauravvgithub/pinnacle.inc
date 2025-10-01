// import HeaderOne from "@/components/header/HeaderOne";
// import BackToTop from "@/components/BackToTop";
// import Breadcrumb from "@/components/Breadcrumb";
// import ServiceEleven from "@/components/service/ServiceEleven";
// import FaqTwo from "@/components/faq/FaqTwo";
// import FooterOne from "@/components/footer/FooterOne";
// // import PricingThree from "@/components/pricing/PricingThree";

// export default function Home() {
//   const breadcrumbs = [
//     { label: "Home", link: "/" },
//     { label: "Our Service", link: "/our-service" },
//     { label: "Park Development" },
//   ];
//   return (
//     <div className="">
//       <HeaderOne />
//       <Breadcrumb title="Our Service" breadcrumbs={breadcrumbs} />
//       <ServiceEleven />
//       <FaqTwo />
//       {/* <PricingThree /> */}
//       <FooterOne />
//       <BackToTop />
//     </div>
//   );
// }

import Link from "next/link";
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";

export default function Home() {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Our Service", link: "/our-service" },
    { label: "Park Development" },
  ];
  return (
    <div className="">
      <HeaderOne />
      <Breadcrumb title="Park Development" breadcrumbs={breadcrumbs} />
      {/* start service details area */}
      <div className="rts-service-details-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-12 col-sm-12 col-12">
              {/* service details left area start */}
              <div className="service-detials-step-1">
                <div className="thumbnail">
                  <img src="assets/images/service/01.jpg" alt="business-area" />
                </div>
                <h4 className="title">
                  Park Development Services in Delhi, India
                </h4>
                <p className="disc">
                  Picture this. A dull, empty plot. Dust. Heat. Nothing alive.
                  Then slowly, a vision takes shape — trees, walking paths,
                  laughter. That’s what parks do. They change how people feel
                  about a place.
                </p>
                <p className="disc">
                  We at Pinnacle — a park development company in Delhi, India —
                  help turn bare land into living spaces. Places where people
                  breathe, meet, and feel good. We don’t just plant trees; we
                  build community corners under the sky.
                </p>

                <h4 className="title">
                  Designing Parks That Inspire Communities
                </h4>
                <p className="disc">
                  Every park tells a story. Some become jogging spots at
                  sunrise. Some turn into lazy picnic zones on Sundays. Some are
                  where kids play cricket until the lights come on.
                </p>
                <p className="disc">
                  That’s why our designs aren’t copy-paste. We walk the land. We
                  imagine. Then we create thoughtful spaces — open lawns, shaded
                  sitting, safe walking loops, little gardens. Our landscape
                  development isn’t just about plants; it’s about life happening
                  there.
                </p>

                <h4 className="title">Urban & Smart City Park Development</h4>
                <p className="disc">
                  Cities like Delhi are moving fast. They want parks that match
                  the times — safe, smart, welcoming. So we build urban park
                  development projects with small but smart touches.
                </p>
                <p className="disc">
                  Think solar-powered lamps, Wi-Fi corners, jogging tracks that
                  feel safe even late, water systems that save every drop. This
                  is part of green infrastructure — parks that work for today
                  and tomorrow.
                </p>

                <h4 className="title">
                  Eco-Friendly & Sustainable Park Solutions
                </h4>
                <p className="disc">
                  Green isn’t just a color. It’s care. Our team builds with the
                  planet in mind — native trees that don’t waste water, benches
                  made from recycled wood, solar lights, and rainwater
                  harvesting.
                </p>
                <p className="disc">
                  As eco-friendly park contractors, we know that parks should
                  heal, not harm. We design sustainable landscaping so the park
                  keeps thriving without heavy upkeep. Simple, smart, and
                  future-proof.
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
                        <h6 className="title">Instant Business Growth</h6>
                        <p className="disc">
                          Maintain wireless scerios after sure quality vectors
                          future
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
                          Maintain wireless scerios after sure quality vectors
                          future
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
                        <h6 className="title">Easy Customer Service</h6>
                        <p className="disc">
                          Maintain wireless scerios after sure quality vectors
                          future
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
                        <h6 className="title">Quality Cost Service</h6>
                        <p className="disc">
                          Maintain wireless scerios after sure quality vectors
                          future
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
                      Catalysts for change before fully tested markets are
                      maintain wireless scenarios after intermandated
                      applications predominate revolutionary.
                    </p>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>We use the latest diagnostic equipment</span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>We are a member of Professional Service</span>
                    </div>
                    <div className="single-banifits">
                      <i className="far fa-check-circle" />
                      <span>Automotive service our clients receive</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*rts blog wizered area */}
            <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 pl--50 pl_md--0 pl-lg-controler pl_sm--0">
              {/* single wizered start */}
              <div className="rts-single-wized Categories service">
                <div className="wized-header">
                  <h5 className="title">Other Services</h5>
                </div>
                <div className="wized-body">
                  {/* single categoris */}
                  <ul className="single-categories">
                    <li>
                      <Link href={"/park-development"}>
                        Park Development{" "}
                        <i className="far fa-long-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                  {/* single categoris End */}
                  {/* single categoris */}
                  <ul className="single-categories">
                    <li>
                      <Link href={"/infrastructure-development"}>
                        Infrastructure Development{" "}
                        <i className="far fa-long-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                  {/* single categoris End */}
                  {/* single categoris */}
                  <ul className="single-categories">
                    <li>
                      <Link href={"/general-contracting-services"}>
                        General Contracting Services{" "}
                        <i className="far fa-long-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                  {/* single categoris End */}
                  {/* single categoris */}
                  <ul className="single-categories">
                    <li>
                      <Link href={"/design-build-renovation-remodeling"}>
                        Design - Build Renovation & Remodeling{" "}
                        <i className="far fa-long-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                  {/* single categoris End */}
                </div>
              </div>
              {/* single wizered End */}
              {/* single wizered start */}
              <div className="rts-single-wized download service">
                <div className="wized-header">
                  <h5 className="title">Download</h5>
                </div>
                <div className="wized-body">
                  {/* single downlaod area start */}
                  <div className="single-download-area">
                    <img
                      src="assets/images/service/icon/07.svg"
                      alt="Business_downlaod"
                    />
                    <div className="mid">
                      <h6 className="title">Our Brochures</h6>
                      <span>Downlaod</span>
                    </div>
                    <Link className=" rts-btn btn-primary" href={"#"}>
                      <i className="fal fa-arrow-right" />
                    </Link>
                  </div>
                  {/* single downlaod area End */}
                  {/* single downlaod area start */}
                  <div className="single-download-area">
                    <img
                      src="assets/images/service/icon/08.svg"
                      alt="Business_downlaod"
                    />
                    <div className="mid">
                      <h6 className="title">Company Details</h6>
                      <span>Downlaod</span>
                    </div>
                    <Link className=" rts-btn btn-primary" href={"#"}>
                      <i className="fal fa-arrow-right" />
                    </Link>
                  </div>
                  {/* single downlaod area End */}
                </div>
              </div>
              {/* single wizered End */}
              {/* single wizered start */}
              <div className="rts-single-wized contact service">
                <div className="wized-header">
                  <Link href={"#"}>
                    <img
                      src="assets/images/logo/logo-2.svg"
                      alt="Business_logo"
                    />
                  </Link>
                </div>
                <div className="wized-body">
                  <h5 className="title">Need Help? We Are Here To Help You</h5>
                  <Link className="rts-btn btn-primary" href={"#"}>
                    Contact Us
                  </Link>
                </div>
              </div>
              {/* single wizered End */}
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
