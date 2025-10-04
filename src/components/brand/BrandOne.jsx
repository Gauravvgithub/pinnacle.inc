"use client";
import React from "react";
import "./BrandOne.css";

function BrandOne() {
  const clients = [
    "assets/images/client/01.png",
    "assets/images/client/02.png",
    "assets/images/client/03.png",
    "assets/images/client/04.png",
    "assets/images/client/05.png",
    "assets/images/client/06.png",
  ];

  return (
    <div className="trusted-client-section">
      <div className="container">
        <h2 className="client-title text-center mb-4">Our Trusted Clients</h2>

        <div className="logo-slider">
          <div className="logo-track">
            {[...clients, ...clients].map((img, i) => (
              <div className="logo-item" key={i}>
                <img src={img} alt={`client-${i}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandOne;
