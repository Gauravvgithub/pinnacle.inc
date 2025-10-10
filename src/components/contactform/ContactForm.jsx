"use client";
import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatusMessage("✅ Enquiry sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatusMessage("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      setStatusMessage("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{marginTop: "50px", marginBottom: "50px"}}>
      {/* contact area start */}
      <div className="rts-contact-area contact-one">
        <div className="container">
          <div className="row align-items-center g-0" 
            style={{ justifyContent: "center" } }
          >
            {/* <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="contact-image-one">
                <img src="assets/images/contact/01.jpg" alt="contact" />
              </div>
            </div> */}

            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="contact-form-area-one">
                <div className="rts-title-area contact text-start">
                  <p className="pre-title">Make An Appointment</p>
                  <h2 className="title">Request a free quote</h2>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="name-email">
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                  <textarea
                    placeholder="Type Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="submit"
                    className="rts-btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit Message"}
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
      {/* contact area end */}
    </div>
  );
}

export default ContactForm;
