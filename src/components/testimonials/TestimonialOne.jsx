"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Core Swiper styles
import {
  Navigation,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import ErrorBoundary from "@/components/ErrorBoundary";
import ContactForm from "../contactform/ContactForm";

function TestimonialOne() {
  return (
    <ErrorBoundary>
      <div>
        {/* start client feed back section */}
        <div className="rts-client-feedback">
          <div className="container">
            <div className="row">
              {/* start testimonials area */}
              <div className="col-lg-4">
                <div className="reviews text-start pl--30" style={{paddingTop:"95px"}}>
                  <p className="pre-title" style={{color:"#CE1F1B", fontWeight:"bold"}}>Our Testimonials</p>
                  <h2 className="title">Client’s Feedbacks</h2>
                  {/* swiper area start */}
                  <div className="swiper mySwipertestimonial">
                    <Swiper
                      // install Swiper modules
                      modules={[
                        Navigation,
                        EffectFade,
                        Scrollbar,
                        A11y,
                        Autoplay,
                      ]}
                      className="mySwipers"
                      speed={500}
                      slidesPerView={1}
                      spaceBetween={0}
                      loop={true}
                      navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }}
                    >
                      <SwiperSlide>
                        <div className="testimonial-inner">
                          <p className="disc text-start">
                            “The service was excellent and exceeded my
                            expectations. The team was professional and very
                            responsive throughout the project.”
                          </p>
                          <div className="testimonial-bottom-one">
                            <div className="thumbnail">
                              <img
                                src="assets/images/testimonials/02.png"
                                alt="business-testimonials"
                                style={{borderRadius: '50%'}}
                              />
                            </div>
                            <div className="details">
                              <a href="#">
                                <h5 className="title">Vikram Pal Singh</h5>
                              </a>
                              <span>JWT Owner</span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="testimonial-inner">
                          <p className="disc text-start">
                            “Amazing experience! They delivered everything on
                            time and with top-notch quality. Highly recommend
                            their services.”
                          </p>
                          <div className="testimonial-bottom-one">
                            <div className="thumbnail">
                              <img
                                src="assets/images/testimonials/03.png"
                                alt="business-testimonials"
                                style={{borderRadius: '50%'}}
                              />
                            </div>
                            <div className="details">
                              <a href="#">
                                <h5 className="title">Rishi Singh Rathore</h5>
                              </a>
                              <span> Owner</span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="testimonial-inner">
                          <p className="disc text-start">
                            “Working with Pinnacle was an excellent experience!
                            The team delivered every project milestone on time
                            and maintained outstanding quality throughout. Their
                            professionalism and attention to detail truly stand
                            out. Highly recommend Pinnacle for anyone looking
                            for reliable and top-quality services!”
                          </p>
                          <div className="testimonial-bottom-one">
                            <div className="thumbnail">
                              <img
                                src="assets/images/testimonials/04.png"
                                alt="business-testimonials"
                                style={{borderRadius: '50%'}}

                              />
                            </div>
                            <div className="details">
                              <a href="#">
                                <h5 className="title">Rahul Bhati</h5>
                              </a>
                              <span>RB Architects</span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    {/* <div className="swiper-button-next" />
                    <div className="swiper-button-prev" /> */}
                  </div>
                  {/* swiper area end */}
                </div>
              </div>
              {/* end testimonials are */}
              {/* images area */}
              <div className="col-lg-8">
                {/* <div className="rts-test-one-image-inner">
                  <img
                    src="assets/images/testimonials/01.png"
                    alt="business_testimobials"
                  />
                </div> */}
                <ContactForm />
              </div>
              {/* image area end */}
            </div>
          </div>
        </div>
        {/* start client feed back section End */}
      </div>
    </ErrorBoundary>
  );
}

export default TestimonialOne;
