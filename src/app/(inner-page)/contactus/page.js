"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/Breadcrumb";

export default function Home() {
  const breadcrumbs = [{ label: "Home", link: "/" }, { label: "Contact Us" }];
  return (
    <div className="">
      <HeaderOne />

      <Breadcrumb title="Contact Us" breadcrumbs={breadcrumbs} />

      <section className="pinnacle-intro py-5 bg-light">
        <div className="container">
          <h2 className="mb-4" >
            Get in Touch with Pinnacle
          </h2>
          <p className="mb-3">
            When someone is making plans for their dream home, or maybe a tall
            office building, the first thing that comes to mind is finding a
            builder you can trust. That's when we come in. If you ever wondered
            who to trust, contact Pinnacle Construction Company. It's easy to
            get in touch with us, and we're always willing to listen.
          </p>
          <p>
            Small talks are the first step toward big projects. A short talk. A
            simple question. Then, little by little, it turns into something
            real. We at Pinnacle think that every question is important. You can
            always contact Pinnacle if you need help with a project, want to
            know how much something will cost, or need expert advice.
          </p>
          <p>
            There are more than just engineers and managers on our team. We
            listen. We know that sometimes you need more than just numbers; you
            need clarity. That's why we make it easy to talk to each other.
            Call. Send an email. You can also just come into our office. We're
            here. Always.
          </p>
        </div>
      </section>

      {/* contact single area start */}
      <div className="rts-contact-area rts-section-gap">
        <div className="container">
          <div className="row g-5">
            {/* single contact area */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="single-contact-one-inner">
                <div className="thumbnail">
                  <img src="assets/images/contact/01.png" alt="" />
                </div>
                <div className="content">
                  <div className="icone">
                    <img src="assets/images/contact/shape/01.svg" alt="" />
                  </div>
                  <div className="info">
                    <span>Call Us 24/7</span>
                    <Link href={"tel:+919999653855"}>
                      <h6>
                        +91 9999653855, <br />
                        +91 8376070809
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single contact area end */}

            {/* single contact area */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="single-contact-one-inner">
                <div className="thumbnail">
                  <img src="assets/images/contact/03.png" alt="" />
                </div>
                <div className="content">
                  <div className="icone">
                    <img src="assets/images/contact/shape/03.svg" alt="" />
                  </div>
                  <div className="info">
                    <span>Service Station</span>
                    <Link href={"https://maps.app.goo.gl/DVYvrv2v5Er8rSxC9"}>
                      <h6>
                        Unit no. 889, Vegas Mall, Plot no. 6, Dwarka Sec-14, New
                        Delhi-110075
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single contact area end */}
            {/* single contact area */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="single-contact-one-inner">
                <div className="thumbnail">
                  <img src="assets/images/contact/02.png" alt="" />
                </div>
                <div className="content">
                  <div className="icone">
                    <img src="assets/images/contact/shape/02.svg" alt="" />
                  </div>
                  <div className="info">
                    <span>Make A Quote</span>
                    <Link href={"mailto:Info.pinnacleinc@gmail.com"}>
                      <h6>Info.pinnacleinc@gmail.com</h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single contact area end */}
            {/* single contact area */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="single-contact-one-inner">
                <div className="thumbnail">
                  <img src="assets/images/contact/02.png" alt="" />
                </div>
                <div className="content">
                  <div className="info">
                    <span>Our Services</span>
                    <h6>
                      Park Development, Infrastructure Development, General
                      Contracting, Design-Build Renovation & Remodeling.
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            {/* single contact area end */}
          </div>
        </div>
      </div>
      {/* conact single area end */}
      {/* bizup map area start */}
      <div className="rts-contact-map-area">
        <div className="contaciner-fluid">
          <div className="row">
            <div className="col-12">
              <div className="contact-map-area-fluid">
                <iframe
                  className="contact-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9676462340926!2d77.029572!3d28.6007474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dd61eb460af%3A0xe89377d97456bc5e!2sVegas%20Mall!5e0!3m2!1sen!2sin!4v1758606822347!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <img
                  className="location"
                  src="assets/images/contact/shape/location.svg"
                  alt="Business_map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bizup map area end */}
      {/* conact us form fluid start */}
      <div className="rts-contact-form-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rts-contact-fluid rts-section-gap">
                <div className="rts-title-area contact-fluid text-center mb--50">
                  <p className="pre-title">Get In Touch</p>
                  <h2 className="title">Needs Help? Let’s Get in Touch</h2>
                </div>
                <div className="form-wrapper">
                  <div id="form-messages" />
                  <form id="contact-form">
                    <div className="name-email">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required=""
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required=""
                      />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Your Subject"
                    />
                    <textarea
                      placeholder="Type Your Message"
                      name="message"
                      defaultValue={""}
                    />
                    <button type="submit" className="rts-btn btn-primary">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* conact us form fluid end */}

      <FooterOne />
      <BackToTop />
    </div>
  );
}
