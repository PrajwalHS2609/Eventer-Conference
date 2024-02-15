import React from "react";
import style from "./pg5.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Page5Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className={style.pg5SliderContainer}>
      <Slider {...settings}>
        <div className={style.pg5SliderContent}>
          <div className={style.pg5SliderInnerContent}>
            <div className={style.pg5SliderComment}>
              <span>
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                neque rerum repudiandae totam, tempora ipsam minima? Dolores
                tempora voluptatum provident temporibus nulla sapiente
                distinctio! Fugiat cupiditate nam dolores numquam maxime!"
              </span>
              <div className={style.pg5SliderLine}></div>
            </div>
            <div className={style.pg5SliderItem} id={style.pg5SliderItem1}>
              <div className={style.pg5SliderOuterFrame}>
                <img
                  src="http://dotrex.co/theme-preview/eventer/img/team1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className={style.pg5SliderItem} id={style.pg5SliderItem2}>
              <h2>Tommy</h2>
              <span>Developer @ Nations</span>
            </div>
          </div>
        </div>
        <div className={style.pg5SliderContent}>
          <div className={style.pg5SliderInnerContent}>
          <div className={style.pg5SliderComment}>
              <span>
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                neque rerum repudiandae totam, tempora ipsam minima? Dolores
                tempora voluptatum provident temporibus nulla sapiente
                distinctio! Fugiat cupiditate nam dolores numquam maxime!"
              </span>
              <div className={style.pg5SliderLine}></div>
            </div>
            <div className={style.pg5SliderItem} id={style.pg5SliderItem1}>
              <div className={style.pg5SliderOuterFrame}>
                <img
                  src="	http://dotrex.co/theme-preview/eventer/img/team2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className={style.pg5SliderItem} id={style.pg5SliderItem2}>
              <h2>Jessica</h2>
              <span>CEO @ Urbs</span>
            </div>
          </div>
        </div>
        <div className={style.pg5SliderContent}>
          <div className={style.pg5SliderInnerContent}>
          <div className={style.pg5SliderComment}>
              <span>
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                neque rerum repudiandae totam, tempora ipsam minima? Dolores
                tempora voluptatum provident temporibus nulla sapiente
                distinctio! Fugiat cupiditate nam dolores numquam maxime!"
              </span>
              <div className={style.pg5SliderLine}></div>
            </div>
            <div className={style.pg5SliderItem} id={style.pg5SliderItem1}>
              <div className={style.pg5SliderOuterFrame}>
                <img
                  src="http://dotrex.co/theme-preview/eventer/img/team3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className={style.pg5SliderItem} id={style.pg5SliderItem2}>
              <h2>James</h2>
              <span>UX @ DXStudios</span>
            </div>
          </div>
        </div>
        <div className={style.pg5SliderContent}>
          <div className={style.pg5SliderInnerContent}>
          <div className={style.pg5SliderComment}>
              <span>
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                neque rerum repudiandae totam, tempora ipsam minima? Dolores
                tempora voluptatum provident temporibus nulla sapiente
                distinctio! Fugiat cupiditate nam dolores numquam maxime!"
              </span>
              <div className={style.pg5SliderLine}></div>
            </div>
            <div className={style.pg5SliderItem} id={style.pg5SliderItem1}>
              <div className={style.pg5SliderOuterFrame}>
                <img
                  src="http://dotrex.co/theme-preview/eventer/img/team4.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className={style.pg5SliderItem} id={style.pg5SliderItem2}>
              <h2>Melissa</h2>
              <span>Cofounder @ DotRex</span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Page5Slider;
