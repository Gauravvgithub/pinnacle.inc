import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceEleven from "@/components/service/ServiceEleven";
import FaqTwo from "@/components/faq/FaqTwo";
import FooterOne from "@/components/footer/FooterOne";
// import PricingThree from "@/components/pricing/PricingThree";

export default function Home() {
  const breadcrumbs = [{ label: "Home", link: "/" }, { label: "Our Services" }];
  return (
    <div className="">
      <HeaderOne />
      <Breadcrumb title="Our Services" breadcrumbs={breadcrumbs} />
      <ServiceEleven />
      <FaqTwo />
      {/* <PricingThree /> */}
      <FooterOne />
      <BackToTop />
    </div>
  );
}
