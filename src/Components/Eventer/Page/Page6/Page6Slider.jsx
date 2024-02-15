import React from "react";
import style from "./pg6.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Page6Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className={style.Page6SliderContainer}>
      <Slider {...settings}>
        <div className={style.pg6SliderContent}>
          <div className={style.pg6SliderInnerContent}>
            <div className={style.pg6SliderItem} id={style.pg6SliderItem1}>
              <div className={style.pg6SliderOuterFrame}>
                <img
                  src="http://dotrex.co/theme-preview/eventer/img/partner-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className={style.pg6SliderContent}>
          <div className={style.pg6SliderInnerContent}>
            <div className={style.pg6SliderItem} id={style.pg6SliderItem1}>
              <div className={style.pg6SliderOuterFrame}>
                <img
                  src="	http://dotrex.co/theme-preview/eventer/img/partner-2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className={style.pg6SliderContent}>
          <div className={style.pg6SliderInnerContent}>
            <div className={style.pg6SliderItem} id={style.pg6SliderItem1}>
              <div className={style.pg6SliderOuterFrame}>
                <img
                  src="http://dotrex.co/theme-preview/eventer/img/partner-3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className={style.pg6SliderContent}>
          <div className={style.pg6SliderInnerContent}>
            <div className={style.pg6SliderItem} id={style.pg6SliderItem1}>
              <div className={style.pg6SliderOuterFrame}>
                <img
                  src="http://dotrex.co/theme-preview/eventer/img/partner-4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className={style.pg6SliderContent}>
          <div className={style.pg6SliderInnerContent}>
            <div className={style.pg6SliderItem} id={style.pg6SliderItem1}>
              <div className={style.pg6SliderOuterFrame}>
                <img
                  src="http://dotrex.co/theme-preview/eventer/img/partner-5.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Page6Slider;
