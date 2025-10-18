import React from "react";

const Breadcrumb = ({ title, breadcrumbs, backgroundImage }) => {
  const bgImage = backgroundImage
    ? `url(${backgroundImage})`
    : "url('/assets/images/blog/blogs-banner.webp')";

  return (
    <div
      className="rts-breadcrumb-area breadcrumb-bg position-relative d-flex align-items-center"
      style={{
        minHeight: "250px",
        overflow: "hidden",
      }}
    >
      {/* Background layer with blur effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: bgImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
          transform: "scale(1.1)", // Prevent edges from showing
          zIndex: 0,
        }}
      ></div>

      {/* Overlay to make text more visible */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)", // semi-transparent overlay
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 breadcrumb-1">
            <h1 className="title text-white">{title}</h1>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="bread-tag text-white text-md-end text-sm-start mt-2 mt-md-0">
              {breadcrumbs?.map((breadcrumb, index) => (
                <span key={index}>
                  {breadcrumb.link ? (
                    <a
                      href={breadcrumb.link}
                      style={{ color: "#E00A0A", textDecoration: "none" }}
                    >
                      {breadcrumb.label}
                    </a>
                  ) : (
                    <span className="active">{breadcrumb.label}</span>
                  )}
                  {index < breadcrumbs.length - 1 && <span> / </span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
