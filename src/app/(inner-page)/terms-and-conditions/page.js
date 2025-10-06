"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import TeamTwo from "@/components/team/TeamTwo";
import FooterOne from "@/components/footer/FooterOne";
import Accordion from "react-bootstrap/Accordion";
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
      <Breadcrumb title="Terms & Conditions" breadcrumbs={breadcrumbs} />

      {/* Terms & Conditions Section */}
      <div className="rts-section-gap terms-conditions-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="terms-content">
                <h2 className="title mb-4">Terms and Conditions</h2>
                <p>
                  Welcome to [Pinnacle.Inc]. By accessing or using our
                  website, you agree to comply with and be bound by the
                  following terms and conditions. Please read them carefully.
                </p>

                <h3 className="mt-4">1. Use of Website</h3>
                <p>
                  You may use our website for lawful purposes only. You must not
                  use it in any way that breaches any applicable local,
                  national, or international law or regulation.
                </p>

                <h3 className="mt-4">2. Intellectual Property</h3>
                <p>
                  All content, graphics, logos, images, and software on this
                  website are the property of [Pinnacle.Inc] or its
                  licensors and are protected by intellectual property laws.
                </p>

                <h3 className="mt-4">3. User Responsibilities</h3>
                <p>
                  You are responsible for maintaining the confidentiality of
                  your account details, and any activity under your account is
                  your responsibility.
                </p>

                <h3 className="mt-4">4. Limitation of Liability</h3>
                <p>
                  [Pinnacle.Inc] shall not be liable for any direct,
                  indirect, incidental, or consequential damages arising out of
                  the use or inability to use this website.
                </p>

                <h3 className="mt-4">5. Third-Party Links</h3>
                <p>
                  Our website may contain links to third-party websites. We are
                  not responsible for the content or accuracy of these external
                  sites.
                </p>

                <h3 className="mt-4">6. Changes to Terms</h3>
                <p>
                  We reserve the right to modify these terms at any time. Any
                  changes will be updated on this page with the effective date.
                </p>

                <h3 className="mt-4">7. Governing Law</h3>
                <p>
                  These terms are governed by and construed in accordance with
                  the laws of [India]. Any disputes arising under these
                  terms shall be subject to the exclusive jurisdiction of the
                  courts in [Delhi].
                </p>

                <h3 className="mt-4">8. Contact Us</h3>
                <p>
                  If you have any questions regarding these terms and
                  conditions, please contact us at:
                  <br />
                  <strong>Email:</strong> Info.pinnacleinc@gmail.com
                </p>
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
