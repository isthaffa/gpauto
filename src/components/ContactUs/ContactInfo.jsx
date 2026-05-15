import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";

const contactData = [
  {
    label: "Mail",
    icon: "/assets/img/icon/email.svg",
    info: ["grandperformante@gmail.com"],
  },
  {
    label: "Location",
    icon: "/assets/img/icon/location.svg",
    info: ["Dehiwala, Colombo", "Sri Lanka, 10350"],
  },
  {
    label: "Phone",
    icon: "/assets/img/icon/phone.svg",
    info: ["+94 77 119 9991"],
  },
  {
    label: "Open Hour",
    icon: "/assets/img/icon/date-icon.svg",
    info: ["Mon - Sat: 7:00 AM - 8:00 PM"],
  },
];

const ContactInfo = () => {
  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="contact-info">
        <div className="left-info" data-aos="fade-right">
          <div className="content">
            <SectionHeading
              bgText={"Contact"}
              title={"Contact"}
              desp={
                " There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form."
              }
            />
          </div>
        </div>

        <div className="right-info">
          {contactData.map((item, index) => (
            <div className="info-card" key={index} data-aos="fade-left">
              <p>{item.label} :</p>
              <div className="d-flex gap-2 align-items-center">
                <div>
                  <img src={item.icon} alt={item.label} />
                </div>
                <div>
                  {item.info.map((info, idx) => (
                    <p key={idx}>{info}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
