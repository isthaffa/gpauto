import React from "react";
import { useParams } from "react-router-dom";

import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import ServicesDetailContent from "../components/Services/ServicesDetailContent";
import FrequentlyQuestions from "../components/FrequentlyQuestions/FrequentlyQuestions";
import Cta from "../components/Cta/Cta";

import serviceDataRaw from "../dataJson/serviceDetails.json";
const serviceData = withBase(serviceDataRaw);
import { withBase } from "../helper/assetPath";

const SingleService = () => {
  const { serviceId } = useParams();
  const service = serviceData.find((post) => post.id === parseInt(serviceId));

  return (
    <>
      <CommonPageHero title={"Services Detail"} />
      <ServicesDetailContent service={service} />
      <FrequentlyQuestions />
      <Cta />
    </>
  );
};

export default SingleService;
