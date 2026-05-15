import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { assetPath } from "../../helper/assetPath";

const imgList = [
  assetPath("/assets/img/client/trusted-client_1.png"),
  assetPath("/assets/img/client/trusted-client_2.png"),
  assetPath("/assets/img/client/trusted-client_3.png"),
  assetPath("/assets/img/client/trusted-client_4.png"),
  assetPath("/assets/img/client/trusted-client_5.png"),
  assetPath("/assets/img/client/trusted-client_6.png"),
  assetPath("/assets/img/client/trusted-client_7.png"),
  assetPath("/assets/img/client/trusted-client_1.png"),
  assetPath("/assets/img/client/trusted-client_2.png"),
  assetPath("/assets/img/client/trusted-client_3.png"),
];

const TrustedClient = () => {
  const swiperRef = useRef(null);
  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="ak-slider ak-trusted-client-slider">
        <h4 className="title">Trusted Client</h4>
        <Swiper
          speed={1000}
          loop={true}
          slidesPerView={"auto"}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {imgList.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="trusted-client">
                <img src={item} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrustedClient;
