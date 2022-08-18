import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Topcard from "./Topcard"

const Sideslider = ({data}) => {
  const settings = {
    dots: false,

    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    className: "slides",
  };

  return (
    <div>
      <Slider Slider {...settings}>
        {data.map((item,index)=><Topcard key={index} mainUrl={item.mainUrl} />)}
      </Slider>
      test
    </div>
  );
};

export default Sideslider;
