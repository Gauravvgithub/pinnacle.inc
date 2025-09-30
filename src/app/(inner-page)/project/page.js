"use client";
import Link from "next/link";
import { Tabs, Tab, TabContent } from "react-bootstrap";
import React, { useState } from "react";
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/Breadcrumb";
import ProjectMain from "./ProjectMain";
import Project from "@/data/Project.json";

export default function Home() {
  const breadcrumbs = [{ label: "Home", link: "/" }, { label: "Projects" }];
  const [activeKey, setActiveKey] = useState("home");

  // Categories mapping
  const categories = {
    home: "All Projects",
    profile: "Park Development",
    contact: "Water Cooler Installation",
    marketing: "Security & Manpower",
    business: "AC Chiller Plants",
  };

  // Get filtered projects
  const getProjects = (key) => {
    if (key === "home") return Project;
    return Project.filter((item) => item.category === categories[key]);
  };

  return (
    <div>
      <HeaderOne />
      <Breadcrumb title="Projects" breadcrumbs={breadcrumbs} />

      {/* project section start */}
      <div className="rts-project-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tab-button-area-one">
                <Tabs
                  activeKey={activeKey}
                  onSelect={(k) => setActiveKey(k)}
                  id="controlled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="home" title="All Projects" />
                  <Tab eventKey="profile" title="Open Gym Development" />
                  <Tab eventKey="contact" title="Water Cooler Installation" />
                  <Tab eventKey="marketing" title="Security & Manpower" />
                  <Tab eventKey="business" title="AC Chiller Plants" />
                </Tabs>
              </div>

              <div className="tab-content-area mt--50 mt_sm--30">
                <TabContent>
                  <div className="row g-5">
                    {getProjects(activeKey).map((data, index) => (
                      <div
                        key={index}
                        className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
                      >
                        <ProjectMain
                          Slug={data.slug}
                          blogImage={data.image}
                          blogAuthor={data.author}
                          blogPublishedDate={data.publishedDate}
                          blogCategory={data.category}
                          blogTitle={data.title}
                          descripTion={data.descripTion}
                          blogLocation={data.location}
                          blogPDF={data.pdf}
                        />
                      </div>
                    ))}
                  </div>
                </TabContent>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* project section end */}

      <FooterOne />
      <BackToTop />
    </div>
  );
}
