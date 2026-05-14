
import AutoCounter from "../components/AutoCounter/AutoCounter";
import Blogs from "../components/Blog/Blogs";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import PricingTable from "../components/Pricing/PricingTable";
import ServiceProgres from "../components/ServiceProgres/ServiceProgres";
import Services from "../components/Services/ServicesSection";
import HeroSlider from "../components/Sliders/HeroSlider";
import Teams from "../components/Team/Teams";
import Testimonial from "../components/Testimonial/Testimonial";
import TrustedClient from "../components/TrustedClient/TrustedClient";
import Videos from "../components/VideoPopUp/Videos";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ServiceProgres />
      <ChooseUs />
      <Services styleTypeTwo={true} />
      <Videos videoId={"VcaAVWtP48A"} />
      <AutoCounter />
      <TrustedClient />
      <Testimonial />
      <Teams />
      <PricingTable />
      <Blogs styleTypeTwo={true} />
    </>
  );
}
