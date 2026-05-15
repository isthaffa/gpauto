import React from "react";
import { ServiceCardTwo } from "./ServiceCardTwo";
import servicesDataTwoRaw from "../../dataJson/servicesDataTwo.json";
const servicesDataTwo = withBase(servicesDataTwoRaw);
import { withBase } from "../../helper/assetPath";

const ServicesSectionTwo = ({ styleTypleTwo }) => {
  const data = styleTypleTwo ? servicesDataTwo.slice(0, 3) : servicesDataTwo;
  return (
    <div className="container">
      <div className="ak-height-75 ak-height-lg-80"></div>
      <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 g-4">
        {data.map((service) => (
          <ServiceCardTwo service={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSectionTwo;
