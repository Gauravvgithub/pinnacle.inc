"use client";
import { useParams } from "next/navigation";
import HeaderOne from "@/components/header/HeaderOne";
import FooterOne from "@/components/footer/FooterOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import Project from "@/data/Project.json";

export default function ProjectDetails() {
  const { slug } = useParams();
  const ProjectPost = Project.find((post) => post.slug === slug);
  

  if (!ProjectPost) {
    return <div>Project not found!</div>;
  }

  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Projects", link: "/project" },
    { label: ProjectPost.title }
  ];

  return (
    <div>
      <HeaderOne />
      <Breadcrumb title={ProjectPost.title} breadcrumbs={breadcrumbs} />

      {/* project details */}
      <div className="rts-project-details-area rts-section-gap">
        <div className="container">
          {/* Banner Image */}
          <div className="big-bg-porduct-details">
            <img
              src={`/assets/images/project/${ProjectPost.image}`}
              alt={ProjectPost.title}
            />
          </div>

          {/* Info section */}
          <div className="project-info mt-4">
            <h3>{ProjectPost.title}</h3>
            <p><strong>Category:</strong> {ProjectPost.category}</p>
            <p><strong>Date:</strong> {ProjectPost.publishedDate}</p>
            <p><strong>Location:</strong> {ProjectPost.location}</p>
            {/* <p><strong>Client:</strong> {ProjectPost.clients}</p> */}

            {/* Download PDF */}
            {ProjectPost.pdf && (
              <a
                href={ProjectPost.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger rounded-pill mt-3"
              >
                Download PDF
              </a>
            )}
          </div>

          {/* Description */}
          <div className="product-details-main-inner mt-5">
            <p>{ProjectPost.descripTion}</p>
          </div>

          {/* Gallery */}
          {ProjectPost.gallery?.length > 0 && (
            <div className="row g-4 mt-4">
              {ProjectPost.gallery.map((img, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                  <img
                    src={`/assets/images/product/${img}`}
                    alt={`gallery-${i}`}
                    className="img-fluid rounded"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Challenges */}
          {ProjectPost.challenges?.length > 0 && (
            <div className="mt-5">
              <h4>Project Challenges</h4>
              <ul>
                {ProjectPost.challenges.map((item, i) => (
                  <li key={i}>
                    <i className="far fa-check-circle me-2 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <FooterOne />
      <BackToTop />
    </div>
  );
}
