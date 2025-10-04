"use client";
import React from "react";
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/Breadcrumb";
import TeamOne from "@/components/team/TeamOne";

export default function Home() {
  const breadcrumbs = [{ label: "Home", link: "/" }, { label: "Our Team" }];

  return (
    <div>
      <HeaderOne />
      <Breadcrumb title="Our Team" breadcrumbs={breadcrumbs} />
      <TeamOne />
      <FooterOne />
      <BackToTop />
    </div>
  );
}
