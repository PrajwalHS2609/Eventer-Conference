import React from "react";
import style from "./pg4.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Page4Slider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [ {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }},]
  };
  return (
    <div className={style.pg4SliderContainer}>
      <Slider {...settings}>
        <div className={style.pg4SliderContent}>
          <div className={style.pg4SliderInnerContent}>
            <div className={style.pg4SliderItem} id={style.pg4SliderItem1}>
              <div className={style.pg4SliderOuterFrame}>
                <img
                  src="http://dotrex.co/theme-preview/eventer/img/team1.jpg"
                  alt=""
                />
                <div className={style.pg4SliderInnerFrame}>
                  <div className={style.ps4SliderBlock}>
                    <div id={style.pg4SliderIconBlock}>
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className={style.pg4SliderIcon}
                      ></FontAwesomeIcon>
                    </div>
                    <div id={style.pg4SliderIconBlock}>
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className={style.pg4SliderIcon}
                      ></FontAwesomeIcon>
                    </div>
                    <div id={style.pg4SliderIconBlock}>
                      <FontAwesomeIcon
                        icon={faXTwitter}
                        className={style.pg4SliderIcon}
                      ></FontAwesomeIcon>
                    </div>
                    <div id={style.pg4SliderIconBlock}>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className={style.pg4SliderIcon}
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.pg4SliderItem} id={style.pg4SliderItem2}>
              <h2>Tommy</h2>
              <span>Developer @ Nations</span>
            </div>
          </div>
        </div>
        <div className={style.pg4SliderContent}>
          <div className={style.pg4SliderInnerContent}>
            <div className={style.pg4SliderItem} id={style.pg4SliderItem1}>
              <div className={style.pg4SliderOuterFrame}>
                <img
                  src="	http://dotrex.co/theme-preview/eventer/img/team2.jpg"
                  alt=""
                />
                <div className={style.pg4SliderInnerFrame}>
                  <div className={style.ps4SliderBlock}>
                    <div id={style.pg4SliderIconBlock}>
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className={style.pg4SliderIcon}
                      ></FontAwesomeIcon>
                    </div>
                    <div id={style.pg4SliderIconBlock}>
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className={style.pg4SliderIcon}
                      ></FontAwesomeIcon>
                    </div>
                    <div id={style.pg4SliderIconBlock}>
                      <FontAwesomeIcon
                        icon={faXTwitter}
                        className={style.pg4SliderIcon}
                      ></FontAwesomeIcon>
                    </div>
                    <div id={style.pg4SliderIconBlock}>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className={style.pg4SliderIcon}
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.pg4SliderItem} id={style.pg4SliderItem2}>
              <h2>Jessica</h2>
              <span>CEO @ Urbs</span>
            </div>
          </div>
        </div>
        <div className={style.pg4SliderContent}>
          <div className={style.pg4SliderInnerContent}>
            <div className={style.pg4SliderItem} id={style.pg4SliderItem1}>
              <div className={style.pg4SliderOuterFrame}>
                <img
                  src="http://dotrex.co/theme-preview/eventer/img/team3.jpg"
                  alt=""
                />
                <div className={style.pg4SliderInnerFrame}>
                  <div className={style.ps4SliderBlock}>
                    <div id={style.pg4SliderIconBlock}>
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className={style.pg4SliderIcon}
                      ></FontAwesomeIcon>
                    </div>
                    <div id={style.pg4SliderIconBlock}>
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className={style.pg4SliderIcon}
                      ></FontAwesomeIcon>
                    </div>
                    <div id={style.pg4SliderIconBlock}>
                      <FontAwesomeIcon
                        icon={faXTwitter}
                        className={style.pg4SliderIcon}
                      ></FontAwesomeIcon>
                    </div>
                    <div id={style.pg4SliderIconBlock}>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className={style.pg4SliderIcon}
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.pg4SliderItem} id={style.pg4SliderItem2}>
              <h2>James</h2>
              <span>UX @ DXStudios</span>
            </div>
          </div>
        </div>
        <div className={style.pg4SliderContent}>
          <div className={style.pg4SliderInnerContent}>
            <div className={style.pg4SliderItem} id={style.pg4SliderItem1}>
              <div className={style.pg4SliderOuterFrame}>
                <img
                  src="http://dotrex.co/theme-preview/eventer/img/team4.jpg"
                  alt=""
                />
                <div className={style.pg4SliderInnerFrame}>
                  <div className={style.ps4SliderBlock}>
                    <div id={style.pg4SliderIconBlock}>
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className={style.pg4SliderIcon}
                      ></FontAwesomeIcon>
                    </div>
                    <div id={style.pg4SliderIconBlock}>
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className={style.pg4SliderIcon}
                      ></FontAwesomeIcon>
                    </div>
                    <div id={style.pg4SliderIconBlock}>
                      <FontAwesomeIcon
                        icon={faXTwitter}
                        className={style.pg4SliderIcon}
                      ></FontAwesomeIcon>
                    </div>
                    <div id={style.pg4SliderIconBlock}>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className={style.pg4SliderIcon}
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.pg4SliderItem} id={style.pg4SliderItem2}>
              <h2>Melissa</h2>
              <span>Cofounder @ DotRex</span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Page4Slider;
