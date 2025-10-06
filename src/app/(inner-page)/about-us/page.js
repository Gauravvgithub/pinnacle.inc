"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
// import TeamTwo from "@/components/team/TeamTwo";
import FooterOne from "@/components/footer/FooterOne";
import Accordion from "react-bootstrap/Accordion";
import TeamOne from "@/components/team/TeamOne";
export default function Home() {
  const breadcrumbs = [{ label: "Home", link: "/" }, { label: "About Us" }];
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Function to open the video overlay
  const openVideo = (e) => {
    e.preventDefault();
    setIsVideoOpen(true);
  };

  // Function to close the video overlay
  const closeVideo = (e) => {
    e.preventDefault();
    setIsVideoOpen(false);
  };

  // Effect to handle the escape key for closing the video overlay
  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.keyCode === 27) {
        setIsVideoOpen(false);
      }
    };

    // Add event listener for keyup
    document.addEventListener("keyup", handleKeyUp);

    // Cleanup function to remove event listener on component unmount
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return (
    <div className="">
      <HeaderOne />
      <Breadcrumb title="About Us" breadcrumbs={breadcrumbs} />
      {/* rts about us section start */}
      <div className="rts-about-area rts-section-gap">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="about-image-v-inner">
                <div className="image-area">
                  <img
                    className="mt--110 img-1"
                    src="assets/images/about/main/about-03.jpg"
                    alt="BUsiness_image"
                  />
                  <img
                    className="img-over"
                    src="assets/images/about/main/about-04.jpg"
                    alt="BUsiness_image"
                  />
                  {/* <div className="goal-button-wrapper">
                    <Link href={"#"} className="vedio-icone">
                      <span
                        id="play-video"
                        className="video-play-button"
                        onClick={openVideo}
                      >
                        <img
                                                    src="assets/images/about/shape/play-btn.png"
                                                    alt="Play btn"
                                                />
                        <span />
                      </span>
                      {isVideoOpen && (
                        <div id="video-overlay" className="video-overlay open">
                          <Link
                            className="video-overlay-close"
                            href={"#"}
                            onClick={closeVideo}
                          >
                            ×
                          </Link>
                          <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/6stlCkUDG_s"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      )}
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-progress-inner">
                <div className="title-area" style={{ padding: "10px" }}>
                  <span style={{ fontSize: "36px", fontWeight: "600" }}>
                    About Pinnacle
                  </span>
                  <h2 className="title">What We Are</h2>
                </div>
                {/* inner start */}
                <div className="inner">
                  <p className="disc" style={{ padding: "10px" }}>
                    People are what Pinnacle is all about. Not just steel and
                    cement. We trust each other, have a vision, and work
                    together.
                    <br />
                    <br />
                    We are one of the best Pinnacle developers in Delhi, India,
                    and work on government contracts, commercial hubs, and
                    residential projects. Because we care about every detail,
                    from the first design sketch to the last brick, our clients
                    call us trusted contractors.
                    <br />
                    <br />
                    We don't just build. We build Urban cities that make life
                    better.
                  </p>
                  <div className="rts-progress-one-wrapper">
                    <div className="single-progress">
                      <div className="progress-top">
                        <p className="progress-title">Business Strategy</p>
                        <span className="persectage">95%</span>
                      </div>
                      <div className="meter cadetblue">
                        <span data-progress={95} style={{ width: 300 }} />
                      </div>
                    </div>
                    <div className="single-progress">
                      <div className="progress-top">
                        <p className="progress-title">Company Strength</p>
                        <span className="persectage">93%</span>
                      </div>
                      <div className="meter">
                        <span data-progress={93} style={{ width: 400 }} />
                      </div>
                    </div>
                  </div>
                  <Link href={"/contactus"} className="rts-btn btn-primary">
                    Make an Appointment
                  </Link>
                </div>
                {/* end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts about us section end */}

      {/* rts services area start */}
      <div className="rts-service-area rts-section-gapBottom">
        <div className="container-fluid service-main about-service-width-controler">
          <div className="background-service service-three row">
            <div className="row g-5">
              <div className="rts-title-area service-four text-center pt--40 pt_md--0 mt_sm--0 mt_md--0">
                <p className="pre-title">Our Services</p>
                <h2 className="title">What We Provide</h2>
              </div>

              {/* Row 1 */}
              <div className="col-lg-6 col-md-6 col-sm-12 pt--15 mb--40">
                <div className="service-one-inner-four">
                  <div className="big-thumbnail-area">
                    <Link href={"#"} className="thumbnail">
                      <img
                        src="assets/images/service/park.jpg"
                        alt="Business-service"
                      />
                    </Link>
                    <div className="content">
                      <img
                        src="assets/images/service/icon/13.svg"
                        alt="Business-icon"
                      />
                      <h5 className="title">Park Development</h5>
                    </div>
                    <Link href="/park-development" className="over_link" />
                  </div>
                  <Link
                    href="/park-development"
                    className="rts-btn btn-primary"
                  >
                    Read More <i className="fal fa-arrow-right" />
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 pt--15 mb--40">
                <div className="service-one-inner-four">
                  <div className="big-thumbnail-area">
                    <Link href={"#"} className="thumbnail">
                      <img
                        src="assets/images/service/water.jpg"
                        alt="Business-service"
                      />
                    </Link>
                    <div className="content">
                      <img
                        src="assets/images/service/icon/14.svg"
                        alt="Business-icon"
                      />
                      <h5 className="title">
                        Water Cooler Installation Services
                      </h5>
                    </div>
                    <Link
                      href="/water-cooler-installation-services"
                      className="over_link"
                    />
                  </div>
                  <Link
                    href="/water-cooler-installation-services"
                    className="rts-btn btn-primary"
                  >
                    Read More <i className="fal fa-arrow-right" />
                  </Link>
                </div>
              </div>

              {/* Row 2 */}
              <div className="col-lg-6 col-md-6 col-sm-12 pt--15 mb--40">
                <div className="service-one-inner-four">
                  <div className="big-thumbnail-area">
                    <Link href={"#"} className="thumbnail">
                      <img
                        src="assets/images/service/security.jpg"
                        alt="Business-service"
                      />
                    </Link>
                    <div className="content">
                      <img
                        src="assets/images/service/icon/15.svg"
                        alt="Business-icon"
                      />
                      <h5 className="title">Security & Manpower Supply Services</h5>
                    </div>
                    <Link href="/security-manpower-services" className="over_link" />
                  </div>
                  <Link
                    href="/security-manpower-services"
                    className="rts-btn btn-primary"
                  >
                    Read More <i className="fal fa-arrow-right" />
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 pt--15 mb--40">
                <div className="service-one-inner-four">
                  <div className="big-thumbnail-area">
                    <Link href={"#"} className="thumbnail">
                      <img
                        src="assets/images/service/ac.jpg"
                        alt="Business-service"
                      />
                    </Link>
                    <div className="content">
                      <img
                        src="assets/images/service/icon/15.svg"
                        alt="Business-icon"
                      />
                      <h5 className="title">
                        AC Chiller Plant Services
                      </h5>
                    </div>
                    <Link href="/ac-chiller-plants-services" className="over_link" />
                  </div>
                  <Link
                    href="/ac-chiller-plants-services"
                    className="rts-btn btn-primary"
                  >
                    Read More <i className="fal fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cta-one-bg col-12">
              <div className="cta-one-inner">
                <div className="cta-left">
                  <h4 className="title animated fadeIn">
                    Let’s discuss how Pinnacle can support your growth.
                  </h4>
                </div>
                <div className="cta-right">
                  <Link className="rts-btn btn-white" href={"/contactus"}>
                    Lets Work Together
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts services area End */}

      <TeamOne />

      {/* rts faq section area */}
      <div className="rts-faq-section rts-section-gap rts-faq-bg bg_image">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-two-inner">
                <div className="title-area-faq">
                  <span className="sub">WHY CHOOSE US</span>
                  <h2 className="title">
                    We Are Experienced &nbsp;
                    <span className="sm-title">
                      Business <span>Solution</span>
                    </span>
                  </h2>
                </div>
                {/* faq accordion area */}
                <div className="faq-accordion-area">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        {/* <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        ></button> */}
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Neque partrient nascetur facilisis suscipit ridiculus
                          agna lobortis imperdiet vivamus est aliquam euismod
                          nector quam convallis ornare justo service lifereu
                          visionary sources unleash online businesss solutions
                        </div>
                      </div>
                    </div>
                  </div>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <span>01. </span> What sets Pinnacle apart from other
                        construction companies in India?
                      </Accordion.Header>
                      <Accordion.Body>
                        We care about more than just buildings. Our main focus
                        is on communities. Pinnacle is all about new ideas,
                        honesty, and great infrastructure.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <span>02. </span> What makes Pinnacle Developers India
                        the best choice for my project?
                      </Accordion.Header>
                      <Accordion.Body>
                        Because we deliver. Easy. We make sure that projects are
                        finished on time, within budget, and built to last with
                        our expert team and years of experience.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        <span>03. </span> How long has Pinnacle been working in
                        construction?
                      </Accordion.Header>
                      <Accordion.Body>
                        We've been here long enough to leave a mark. The journey
                        has been steady and strong, from small beginnings to big
                        projects all over the country.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        <span>04. </span> Can Pinnacle run projects all over
                        India?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes. We have a footprint that covers several states. Our
                        team is ready to help you no matter where you live,
                        whether it's in a metro area or a tier-2 city.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                {/* faq accordion area end */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="thumbnail-faq-four">
                <img src="assets/images/faq/02.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts faq section area End */}

      {/* customers feed back area start */}
      <div className="rts-customer-feedback-area rts-section-gap bg-customer-feedback">
        <div className="container">
          <div className="row">
            <div className="rts-title-area feedback team text-center">
              <p className="pre-title">Feedbacks</p>
              <h2 className="title">Customer Feedbacks</h2>
            </div>
          </div>
          <div className="row g-5 mt--20">
            {/* Testimonial 1 */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="testimopnial-wrapper-two">
                <div className="test-header">
                  <div className="thumbnail">
                    <img
                      src="assets/images/testimonials/02.png"
                      alt="Vikram Seth"
                    />
                  </div>
                  <div className="name-desig">
                    <h5 className="title">Vikram Seth</h5>
                    <span className="designation">Real Estate Developer</span>
                  </div>
                </div>
                <div className="test-body">
                  <p className="disc">
                    “Pinnacle Services transformed our open plot into a
                    beautiful community park with detailed planning and flawless
                    execution. Their professionalism, timelines, and ability to
                    manage large-scale infrastructure work are unmatched.”
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="testimopnial-wrapper-two">
                <div className="test-header">
                  <div className="thumbnail">
                    <img
                      src="assets/images/testimonials/03.png"
                      alt="Aditya Sharma"
                    />
                  </div>
                  <div className="name-desig">
                    <h5 className="title">Aditya Sharma</h5>
                    <span className="designation">
                      Architect & Interior Consultant
                    </span>
                  </div>
                </div>
                <div className="test-body">
                  <p className="disc">
                    “Working with Pinnacle Services on a design-build remodeling
                    project was seamless. Their team truly understands
                    functional aesthetics and delivers with precision and care.
                    Highly recommended for any renovation or construction work.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* customers feed back area end */}
      <FooterOne />
      <BackToTop />
    </div>
  );
}
