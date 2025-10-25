
import React from "react";
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";
import "./gallery.css";

export const metadata = {
  title: "Pinnacle.Inc - Gallery",
  keywords: "Pinnacle, gallery, pinnacle gallery",
  description:
    "Pinnacle showcases its projects and installations in the gallery.",
};

export default function GalleryPage() {
  const breadcrumbs = [{ label: "Home", link: "/" }, { label: "Our Gallery" }];

  // Add image & video items here
  const galleryItems = [
    { type: "image", src: "assets/images/gallery/img10.jpeg" },
    {
      type: "video",
      src: "https://res.cloudinary.com/dtukaaycz/video/upload/v1761382603/video4_bpu1hy.mp4",
    },
    { type: "image", src: "assets/images/gallery/img18.jpeg" },
    { type: "image", src: "assets/images/gallery/img1.jpeg" },
    {
      type: "video",
      src: "https://res.cloudinary.com/dtukaaycz/video/upload/v1761382602/video8_eyjvwj.mp4",
    },
    { type: "image", src: "assets/images/gallery/img7.jpeg" },
    { type: "image", src: "assets/images/gallery/img16.jpeg" },
    {
      type: "video",
      src: "https://res.cloudinary.com/dtukaaycz/video/upload/v1761382602/video5_ei1y0k.mp4",
    },
    { type: "image", src: "assets/images/gallery/img5.jpeg" },
    {
      type: "video",
      src: "https://res.cloudinary.com/dtukaaycz/video/upload/v1761382600/video7_dwtuew.mp4",
    },
    { type: "image", src: "assets/images/gallery/img11.jpeg" },
    { type: "image", src: "assets/images/gallery/img20.jpeg" },
    { type: "image", src: "assets/images/gallery/img8.jpeg" },
    {
      type: "video",
      src: "https://res.cloudinary.com/dtukaaycz/video/upload/v1761382601/video2_uktzfw.mp4",
    },
    { type: "image", src: "assets/images/gallery/img2.jpeg" },
    { type: "image", src: "assets/images/gallery/img17.jpeg" },
    {
      type: "video",
      src: "https://res.cloudinary.com/dtukaaycz/video/upload/v1761382600/video3_hdbeua.mp4",
    },
    { type: "image", src: "assets/images/gallery/img6.jpeg" },
    { type: "image", src: "assets/images/gallery/img4.jpeg" },
    {
      type: "video",
      src: "https://res.cloudinary.com/dtukaaycz/video/upload/v1761382600/video9_jrlwzm.mp4",
    },
    { type: "image", src: "assets/images/gallery/img13.jpeg" },
    { type: "image", src: "assets/images/gallery/img19.jpeg" },
    {
      type: "video",
      src: "https://res.cloudinary.com/dtukaaycz/video/upload/v1761382600/video1_adjwl1.mp4",
    },
    { type: "image", src: "assets/images/gallery/img9.jpeg" },
    {
      type: "video",
      src: "https://res.cloudinary.com/dtukaaycz/video/upload/v1761382600/video6_z6jwyt.mp4",
    },
    { type: "image", src: "assets/images/gallery/img12.jpeg" },
    { type: "image", src: "assets/images/gallery/img15.jpeg" },
    { type: "image", src: "assets/images/gallery/img14.jpeg" },
    { type: "image", src: "assets/images/gallery/img3.jpeg" },
    { type: "image", src: "assets/images/gallery/img1.jpeg" },
  ];

  return (
    <div>
      <HeaderOne />
      <Breadcrumb title="Our Gallery" breadcrumbs={breadcrumbs} />

      <section className="gallery-section py-5">
        <div className="container">
          {/* <h2 className="text-center mb-4 fw-bold text-danger">Our Gallery</h2> */}

          {/* Masonry Grid */}
          <div className="masonry">
            {galleryItems.map((item, index) => (
              <div key={index} className="masonry-item">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`gallery-${index}`}
                    className="img-fluid rounded shadow-sm"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    className="img-fluid rounded shadow-sm"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterOne />
      <BackToTop />
    </div>
  );
}
