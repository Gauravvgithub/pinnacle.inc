// "use client"
// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import HeaderOne from "@/components/header/HeaderOne";
// import BackToTop from "@/components/BackToTop";
// import FooterOne from "@/components/footer/FooterOne";
// import Breadcrumb from "@/components/Breadcrumb";
// export default function Home() {
//     const breadcrumbs = [
//         { label: 'Home', link: '/' },
//         { label: 'Our Team' }
//     ];
//     return (

//         <div className="">
//             <HeaderOne />

//             <Breadcrumb title="Our Team" breadcrumbs={breadcrumbs} />


//             {/* team area start*/}
//             <div className="rts-team-area rts-section-gap bg-team-color">
//                 <div className="container">
//                     <div className="row g-5">
//                         {/* team single start */}
//                         <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                             <div className="team-single-one-start">
//                                 <div className="team-image-area">
//                                     <Link href={'/team-details'}>
//                                         <img
//                                             src="assets/images/team/tm/06.jpg"
//                                             alt="Business_Team_single"
//                                         />
//                                         <div className="team-social">
//                                             <div className="main">
//                                                 <i className="fal fa-plus" />
//                                             </div>
//                                             <div className="team-social-one">
//                                                 <i className="fab fa-youtube" />
//                                                 <i className="fab fa-twitter" />
//                                                 <i className="fab fa-instagram" />
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </div>
//                                 <div className="single-details">
//                                     <Link href={'/team-details'}>
//                                         <h5 className="title">Archer Graham</h5>
//                                     </Link>
//                                     <p>Finance Manager</p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* team single end */}
//                         {/* team single start */}
//                         <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                             <div className="team-single-one-start">
//                                 <div className="team-image-area">
//                                     <Link href={'/team-details'}>
//                                         <img
//                                             src="assets/images/team/tm/07.jpg"
//                                             alt="Business_Team_single"
//                                         />
//                                         <div className="team-social">
//                                             <div className="main">
//                                                 <i className="fal fa-plus" />
//                                             </div>
//                                             <div className="team-social-one">
//                                                 <i className="fab fa-youtube" />
//                                                 <i className="fab fa-twitter" />
//                                                 <i className="fab fa-instagram" />
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </div>
//                                 <div className="single-details">
//                                     <Link href={'/team-details'}>
//                                         <h5 className="title">Amelia Clover</h5>
//                                     </Link>
//                                     <p>Finance Manager</p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* team single end */}
//                         {/* team single start */}
//                         <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                             <div className="team-single-one-start">
//                                 <div className="team-image-area">
//                                     <Link href={'/team-details'}>
//                                         <img
//                                             src="assets/images/team/tm/08.jpg"
//                                             alt="Business_Team_single"
//                                         />
//                                         <div className="team-social">
//                                             <div className="main">
//                                                 <i className="fal fa-plus" />
//                                             </div>
//                                             <div className="team-social-one">
//                                                 <i className="fab fa-youtube" />
//                                                 <i className="fab fa-twitter" />
//                                                 <i className="fab fa-instagram" />
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </div>
//                                 <div className="single-details">
//                                     <Link href={'/team-details'}>
//                                         <h5 className="title">Beckett Hayden</h5>
//                                     </Link>
//                                     <p>Finance Manager</p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* team single end */}
//                         {/* team single start */}
//                         <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                             <div className="team-single-one-start">
//                                 <div className="team-image-area">
//                                     <Link href={'/team-details'}>
//                                         <img
//                                             src="assets/images/team/tm/09.jpg"
//                                             alt="Business_Team_single"
//                                         />
//                                         <div className="team-social">
//                                             <div className="main">
//                                                 <i className="fal fa-plus" />
//                                             </div>
//                                             <div className="team-social-one">
//                                                 <i className="fab fa-youtube" />
//                                                 <i className="fab fa-twitter" />
//                                                 <i className="fab fa-instagram" />
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </div>
//                                 <div className="single-details">
//                                     <Link href={'/team-details'}>
//                                         <h5 className="title">Julian Wyat</h5>
//                                     </Link>
//                                     <p>Finance Manager</p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* team single end */}
//                         {/* team single start */}
//                         <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                             <div className="team-single-one-start">
//                                 <div className="team-image-area">
//                                     <Link href={'/team-details'}>
//                                         <img
//                                             src="assets/images/team/tm/10.jpg"
//                                             alt="Business_Team_single"
//                                         />
//                                         <div className="team-social">
//                                             <div className="main">
//                                                 <i className="fal fa-plus" />
//                                             </div>
//                                             <div className="team-social-one">
//                                                 <i className="fab fa-youtube" />
//                                                 <i className="fab fa-twitter" />
//                                                 <i className="fab fa-instagram" />
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </div>
//                                 <div className="single-details">
//                                     <Link href={'/team-details'}>
//                                         <h5 className="title">Archer Graham</h5>
//                                     </Link>
//                                     <p>Finance Manager</p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* team single end */}
//                         {/* team single start */}
//                         <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                             <div className="team-single-one-start">
//                                 <div className="team-image-area">
//                                     <Link href={'/team-details'}>
//                                         <img
//                                             src="assets/images/team/tm/11.jpg"
//                                             alt="Business_Team_single"
//                                         />
//                                         <div className="team-social">
//                                             <div className="main">
//                                                 <i className="fal fa-plus" />
//                                             </div>
//                                             <div className="team-social-one">
//                                                 <i className="fab fa-youtube" />
//                                                 <i className="fab fa-twitter" />
//                                                 <i className="fab fa-instagram" />
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </div>
//                                 <div className="single-details">
//                                     <Link href={'/team-details'}>
//                                         <h5 className="title">Amelia Clover</h5>
//                                     </Link>
//                                     <p>Finance Manager</p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* team single end */}
//                         {/* team single start */}
//                         <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                             <div className="team-single-one-start">
//                                 <div className="team-image-area">
//                                     <Link href={'/team-details'}>
//                                         <img
//                                             src="assets/images/team/tm/12.jpg"
//                                             alt="Business_Team_single"
//                                         />
//                                         <div className="team-social">
//                                             <div className="main">
//                                                 <i className="fal fa-plus" />
//                                             </div>
//                                             <div className="team-social-one">
//                                                 <i className="fab fa-youtube" />
//                                                 <i className="fab fa-twitter" />
//                                                 <i className="fab fa-instagram" />
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </div>
//                                 <div className="single-details">
//                                     <Link href={'/team-details'}>
//                                         <h5 className="title">Beckett Hayden</h5>
//                                     </Link>
//                                     <p>Finance Manager</p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* team single end */}
//                         {/* team single start */}
//                         <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                             <div className="team-single-one-start">
//                                 <div className="team-image-area">
//                                     <Link href={'/team-details'}>
//                                         <img
//                                             src="assets/images/team/tm/13.jpg"
//                                             alt="Business_Team_single"
//                                         />
//                                         <div className="team-social">
//                                             <div className="main">
//                                                 <i className="fal fa-plus" />
//                                             </div>
//                                             <div className="team-social-one">
//                                                 <i className="fab fa-youtube" />
//                                                 <i className="fab fa-twitter" />
//                                                 <i className="fab fa-instagram" />
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </div>
//                                 <div className="single-details">
//                                     <Link href={'/team-details'}>
//                                         <h5 className="title">Julian Wyat</h5>
//                                     </Link>
//                                     <p>Finance Manager</p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* team single end */}
//                     </div>
//                 </div>
//             </div>
//             {/* team area End */}


//             <FooterOne />
//             <BackToTop />
//         </div>

//     );
// }


"use client";
import Link from 'next/link';
import React from 'react';
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/Breadcrumb";

// ✅ Team data
const teamMembers = [
    { id: 1, name: "Archer Graham", title: "Finance Manager", image: "/assets/images/team/tm/06.jpg" },
    { id: 2, name: "Amelia Clover", title: "Finance Manager", image: "/assets/images/team/tm/07.jpg" },
    { id: 3, name: "Beckett Hayden", title: "Finance Manager", image: "/assets/images/team/tm/08.jpg" },
    { id: 4, name: "Julian Wyat", title: "Finance Manager", image: "/assets/images/team/tm/09.jpg" },
    { id: 5, name: "Archer Graham", title: "Finance Manager", image: "/assets/images/team/tm/10.jpg" },
    { id: 6, name: "Amelia Clover", title: "Finance Manager", image: "/assets/images/team/tm/11.jpg" },
    { id: 7, name: "Beckett Hayden", title: "Finance Manager", image: "/assets/images/team/tm/12.jpg" },
    { id: 8, name: "Julian Wyat", title: "Finance Manager", image: "/assets/images/team/tm/13.jpg" },
];

export default function Home() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Our Team' }
    ];

    return (
        <div>
            <HeaderOne />
            <Breadcrumb title="Our Team" breadcrumbs={breadcrumbs} />

            {/* team area start */}
            <div className="rts-team-area rts-section-gap bg-team-color">
                <div className="container">
                    <div className="row g-5">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="team-single-one-start">
                                    <div className="team-image-area">
                                        <Link href="/team-details">
                                            <img src={member.image} alt={member.name} />
                                            <div className="team-social">
                                                <div className="main">
                                                    <i className="fal fa-plus" />
                                                </div>
                                                <div className="team-social-one">
                                                    <i className="fab fa-youtube" />
                                                    <i className="fab fa-twitter" />
                                                    <i className="fab fa-instagram" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="single-details">
                                        <Link href="/team-details">
                                            <h5 className="title">{member.name}</h5>
                                        </Link>
                                        <p>{member.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* team area end */}

            <FooterOne />
            <BackToTop />
        </div>
    );
}
