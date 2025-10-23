"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

function TeamOne() {
  // Team Data Array
  const teamMembers = [
    {
      id: 1,
      name: "Mr. Shivanand Pandey",
      position: "Founder & Director",
      image: "assets/images/team/tm/01.jpeg",
    },
    {
      id: 2,
      name: "Ms. Saloni Ahuja",
      position: "Vice President",
      image: "assets/images/team/tm/02.jpeg",
    },
    {
      id: 3,
      name: "Mr. Chhotelal Gupta",
      position: "Manager",
      image: "assets/images/team/tm/03.jpeg",
    },
    {
      id: 4,
      name: "Mr. Vikas Singh",
      position: "Supervison Head",
      image: "assets/images/team/tm/04.jpeg",
    },
    {
      id: 5,
      name: "Mr. Anurag Singh",
      position: "Supervisor",
      image: "assets/images/team/tm/05.jpeg",
    },
  ];

  return (
    <div className="rts-team-area rts-section-gap bg-team">
      <div className="container">
        <div className="rts-title-area team text-center">
          <h2 className="title">Professionals Team</h2>
        </div>

        <div className="row g-5 mt--0">
          <Swiper
            modules={[Navigation, Scrollbar, A11y, Autoplay]}
            className="mySwiperh1_team"
            speed={1500}
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".rts-next",
              prevEl: ".rts-prev",
            }}
            breakpoints={{
              1200: { slidesPerView: 4 },
              900: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              580: { slidesPerView: 2 },
              450: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="team-single-one-start">
                  <div className="team-image-area">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="img-fluid"
                      />
                  </div>
                  <div className="single-details" style={{height:"150px"}}>
                    {/* <Link href="/team-details"> */}
                      <h5 className="title">{member.name}</h5>
                    {/* </Link> */}
                    <p>{member.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default TeamOne;
