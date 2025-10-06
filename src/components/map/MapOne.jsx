"use client";
import React from "react";
import Link from "next/link";
function MapOne() {
  return (
    <div>
      {/* map area start */}
      <div className="rts-map-area bg-light-white" id="address">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* map area left */}
              <div className="mapdetails-inner-one">
                <div className="left-area single-wized">
                  <h5 className="title">Get in touch</h5>
                  <div className="details">
                    <p>Work and general inquiries</p>
                    <Link className="number" href={"#"}>
                      +91 9999653855
                      <br />
                      +91 8376070809
                    </Link>
                    <p className="time-header">Assistance hours:</p>
                    <p className="time">
                      Monday – Saturday <br /> 9 am to 6 pm IST
                    </p>
                  </div>
                </div>
                <div className="right-area single-wized">
                  <h5 className="title">Post Address</h5>
                  <div className="details">
                    <p>Service Office</p>
                    <Link href={"#"}>
                      Unit no. 889, Vegas Mall, Plot no. 6, Dwarka Sec-14, New
                      Delhi - 110075
                    </Link>
                    <p className="headoffice">Head Office</p>
                    <p className="office">West Delhi. India</p>
                  </div>
                </div>
              </div>
              {/* map area right */}
            </div>
            <div className="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9676462340926!2d77.029572!3d28.6007474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dd61eb460af%3A0xe89377d97456bc5e!2sVegas%20Mall!5e0!3m2!1sen!2sin!4v1758619246139!5m2!1sen!2sin"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      {/* map area end */}
    </div>
  );
}

export default MapOne;
