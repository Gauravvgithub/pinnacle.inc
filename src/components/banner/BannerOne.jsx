"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  Navigation,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import ErrorBoundary from "@/components/ErrorBoundary";
import Link from "next/link";

function BannerOne() {
  return (
    <ErrorBoundary>
      <div>
        <div className="rts-banner-area rts-banner-one" id="banner">
          <div className="swiper mySwiper banner-one">
            <Swiper
              modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
              className="rts-brand__slider"
              speed={700}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              effect="fade"
              breakpoints={{
                1200: { slidesPerView: 1 },
                900: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                580: { slidesPerView: 1 },
                450: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }}
            >
              {/* Slide 1 */}
              <SwiperSlide className="one">
                <div className="banner-one-inner text-start" style={{ paddingLeft: "20px" }}>
                  <p className="pre-title"><span>Welcome to Pinnacle</span></p>
                  <h1 className="title ">
                    Trusted <span>Multi-Services</span> <br /> For Every Industry
                  </h1>
                  <p className="disc banner-para">
                    We specialize in construction, RO & water cooler installations, AC chiller plant servicing, security & manpower solutions, and open gym equipment supply—delivering quality and reliability.
                  </p>
                  <Link href="/contactus" className="rts-btn btn-primary color-h-black">
                    Get In Touch
                  </Link>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide className="two">
                <div className="banner-one-inner text-start" style={{ paddingLeft: "20px" }}>
                  <p className="pre-title"><span>Our Expertise</span></p>
                  <h1 className="title ">
                    End-to-End <span>Reliable Services</span> <br /> Delivered On Time
                  </h1>
                  <p className="disc banner-para">
                    From large-scale projects to daily operational support, our team ensures timely execution, safety compliance, and long-term partnerships with leading organizations across industries.
                  </p>
                  <Link href="/our-service" className="rts-btn btn-primary color-h-black">
                    Explore Services
                  </Link>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide className="three">
                <div className="banner-one-inner text-start" style={{ paddingLeft: "20px" }}>
                  <p className="pre-title"><span>Why Choose Us</span></p>
                  <h1 className="title ">
                    Quality <span>Execution</span> <br /> With Integrity
                  </h1>
                  <p className="disc banner-para">
                    Backed by successful projects for government and corporate clients, we deliver services with technical expertise, professionalism, and a strong commitment to excellence.
                  </p>
                  <Link href="/about-us" className="rts-btn btn-primary color-h-black">
                    Learn More
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Animated shapes */}
          <div className="animation-img">
            <img
              className="shape-img two"
              src="assets/images/banner/shape/02.png"
              alt="banner_business"
            />
            <img
              className="shape-img three"
              src="assets/images/banner/shape/03.png"
              alt="banner_business"
            />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default BannerOne;
