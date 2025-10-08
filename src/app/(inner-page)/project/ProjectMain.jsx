"use client";
import React from "react";
import Link from "next/link";
const BlogGridMain = (props) => {
  const {
    Slug,
    blogImage,
    blogTitle,
    blogCategory,
    blogPublishedDate,
    descripTion,
    blogLocation,
    blogPDF,
  } = props;
  return (
    <>
      {/* single -product area */}
      <div className="rts-product-one">
        <div className="thumbnail-area">
          <img
            src={`assets/images/project/${blogImage}`}
            alt="Business_pinnacle"
          />
          <Link
            className="rts-btn btn-primary rounded"
            href={`/project/${Slug}`}
          >
            <i className="far fa-arrow-right" />
          </Link>
        </div>
        <div className="product-contact-wrapper">
          <span>{blogCategory}</span>
          <Link href={`/project/${Slug}`}>
            <h5 className="title">{blogTitle ? blogTitle : blogCategory}</h5>
          </Link>
          <p className="disc">
            {descripTion.length > 50
              ? descripTion.slice(0, 50) + "..."
              : descripTion}
          </p>
          <span>{blogLocation}</span>
          <a
            href={blogPDF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-danger rounded-pill"
            style={{ display: "block" }}
          >
            Download PDF
          </a>
        </div>
      </div>
      {/* single -product area End */}
    </>
  );
};

export default BlogGridMain;
