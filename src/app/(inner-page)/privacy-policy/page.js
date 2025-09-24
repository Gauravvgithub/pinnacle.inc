"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import TeamTwo from "@/components/team/TeamTwo";
import FooterOne from "@/components/footer/FooterOne";
import Accordion from 'react-bootstrap/Accordion';
export default function Home() {
        const breadcrumbs = [
            { label: 'Home', link: '/' },
            { label: 'About Us' }
        ];
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
            document.addEventListener('keyup', handleKeyUp);
    
            // Cleanup function to remove event listener on component unmount
            return () => {
                document.removeEventListener('keyup', handleKeyUp);
            };
        }, []);
    return (

        <div className="">
  <HeaderOne />
  <Breadcrumb title="Privacy Policy" breadcrumbs={breadcrumbs} />

  {/* Privacy Policy Section */}
  <div className="rts-section-gap privacy-policy-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="privacy-policy-content">
            <h2 className="title mb-4">Privacy Policy</h2>
            <p>
              At [Your Company Name], we are committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy explains how we 
              collect, use, and safeguard your data when you visit our website or use our services.
            </p>

            <h3 className="mt-4">1. Information We Collect</h3>
            <p>
              We may collect personal information such as your name, email address, phone number, 
              and payment details when you interact with our website or services.
            </p>

            <h3 className="mt-4">2. How We Use Your Information</h3>
            <p>
              Your information is used to provide services, process payments, improve user 
              experience, and send important updates or promotional materials (if you consent).
            </p>

            <h3 className="mt-4">3. Data Security</h3>
            <p>
              We use appropriate technical and organizational measures to protect your 
              personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h3 className="mt-4">4. Sharing Your Information</h3>
            <p>
              We do not sell, trade, or rent users’ personal identification information. 
              We may share limited data with trusted third parties only to provide our services.
            </p>

            <h3 className="mt-4">5. Cookies</h3>
            <p>
              Our website uses cookies to enhance user experience. You may choose to disable 
              cookies in your browser settings, but some parts of our website may not function properly.
            </p>

            <h3 className="mt-4">6. Your Rights</h3>
            <p>
              You have the right to access, update, or delete your personal data. 
              To exercise these rights, please contact us at [your email/contact info].
            </p>

            <h3 className="mt-4">7. Updates to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be 
              reflected on this page with the updated date.
            </p>

            <h3 className="mt-4">8. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <strong>Email:</strong> support@example.com
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
