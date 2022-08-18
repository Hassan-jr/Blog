import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Topcard from "./Topcard";

const Sideslider = ({ data }) => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  var size;
  var num = getWindowDimensions();
  if (num.width < 700) {
    size = 2;
  } else {

    if(data.length > 2){
      size = 3;
    }else if(data.length === 2){
      size = 2
    }
    else{
      size =1
    }

    
  }

  const settings = {
    dots: false,

    infinite: true,
    speed: 500,
    slidesToShow: size,
    slidesToScroll: 1,
    arrows: true,
    className: "slides",
  };

  return (
    <div className=" bg-neutral-700 md:h-90 p-2 md:pl-20">
      <Slider Slider {...settings}>
        {data.map((item, index) => (
          <div className="  h-80 " key={index}>
            <Topcard  item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sideslider;
