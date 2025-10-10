"use client";
import Link from "next/link";
import React, { useState } from "react";
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/Breadcrumb";

export default function ContactUs() {
  const breadcrumbs = [{ label: "Home", link: "/" }, { label: "Contact Us" }];

  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    // we can send phone as empty if not included
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "N/A",
      message: `Subject: ${formData.subject}\n\n${formData.message}`,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/enquiry`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (data.success) {
        setStatusMessage("✅ Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatusMessage("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      setStatusMessage("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <HeaderOne />

      <Breadcrumb title="Contact Us" breadcrumbs={breadcrumbs} />

      <section className="pinnacle-intro py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Get in Touch with Pinnacle</h2>
          <p className="mb-3">
            At Pinnacle Construction Company, we turn visions into reality.
            Whether it's a dream home, a commercial building, or a large-scale
            infrastructure project, our experienced team is here to guide you
            every step of the way. Trust, expertise, and quality are at the
            heart of everything we do.
          </p>
          <p>
            Every project begins with a conversation. A simple question, a short
            discussion — and from there, we carefully plan, design, and execute
            with precision. From park development and water cooler installations
            to AC chiller plants and security services, Pinnacle provides a
            complete range of construction and facility management solutions.
          </p>
          <p>
            Our team is more than engineers and managers — we are listeners,
            problem-solvers, and partners in your projects. Need expert advice,
            a cost estimate, or guidance on the best approach? Pinnacle is
            always just a call, email, or visit away. We make it easy to
            connect, discuss, and move forward together.
          </p>
        </div>
      </section>

      {/* contact single area start */}
          <div className="container py-5">
      <div className="row g-4">
        {/* Call Us */}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div className="p-4 border rounded-3 shadow-sm h-100 d-flex align-items-center">
            <div className="me-3 text-primary fs-2">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <div>
              <h6 className="text-uppercase text-muted mb-1">Call Us 24/7</h6>
              <Link
                href="tel:+919999653855"
                className="text-dark fw-semibold text-decoration-none"
              >
                +91 9999653855
                <br />
                +91 8376070809
              </Link>
            </div>
          </div>
        </div>

        {/* Service Station */}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div className="p-4 border rounded-3 shadow-sm h-100 d-flex align-items-center">
            <div className="me-3 text-success fs-2">
              <i className="bi bi-geo-alt-fill"></i>
            </div>
            <div>
              <h6 className="text-uppercase text-muted mb-1">Service Station</h6>
              <Link
                href="https://maps.app.goo.gl/DVYvrv2v5Er8rSxC9"
                target="_blank"
                className="text-dark fw-semibold text-decoration-none"
              >
                Unit no. 889, Vegas Mall, Plot no. 6, Dwarka Sec-14, New Delhi-110075
              </Link>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div className="p-4 border rounded-3 shadow-sm h-100 d-flex align-items-center">
            <div className="me-3 text-danger fs-2">
              <i className="bi bi-envelope-fill"></i>
            </div>
            <div>
              <h6 className="text-uppercase text-muted mb-1">Make A Quote</h6>
              <Link
                href="mailto:Info.pinnacleinc@gmail.com"
                className="text-dark fw-semibold text-decoration-none"
              >
                Info.pinnacleinc@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div className="p-4 border rounded-3 shadow-sm h-100 d-flex align-items-start">
            <div className="me-3 text-warning fs-2">
              <i className="bi bi-tools"></i>
            </div>
            <div>
              <h6 className="text-uppercase text-muted mb-1">Our Services</h6>
              <p className="mb-0 fw-semibold text-dark">
                Park Development, Water Cooler Supplier, Security & Manpower
                Supply, AC Chiller Plant Services, Roads & Sewer Lines Development
              </p>
            </div>
          </div>
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
      {/* Contact Us Form */}
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
                  <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="name-email">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Your Subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    <textarea
                      name="message"
                      placeholder="Type Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="submit"
                      className="rts-btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>

                  {statusMessage && (
                    <p style={{ marginTop: "10px", color: "#333" }}>
                      {statusMessage}
                    </p>
                  )}
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
