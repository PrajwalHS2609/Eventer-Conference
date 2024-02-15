import React from "react";
import style from "./pg8.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Page8Slider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div className={style.pg8SliderContainer}>
      <Slider {...settings}>
        <div className={style.pg8SliderContent}>
          <div className={style.pg8SliderInnerContent}>
            <div className={style.pg8SliderItem} id={style.pg8SliderItem1}>
              <div className={style.pg8SliderOuterFrame}>
                <img
                  src="http://dotrex.co/theme-preview/eventer/img/blog1.jpg"
                  alt=""
                />
                <div className={style.pg8SliderInnerFrame}></div>
              </div>
            </div>
            <div className={style.pg8SliderItem} id={style.pg8SliderItem2}>
              <h2>How to succeed in meetings</h2>
              <div className={style.pg8SliderItemLine}></div>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                at a, id maiores exercitationem adipisci beatae eligendi
                mollitia ut perspiciatis tempora magni provident ipsum aliquid
                obcaecati error accusamus quos excepturi.
              </span>
            </div>
            <div className={style.pg8SliderButton}>
              <div className={style.pg8SliderBtnCover}></div>
              <div className={style.pg8SliderInnerButton}>
                <span>see more</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.pg8SliderContent}>
          <div className={style.pg8SliderInnerContent}>
            <div className={style.pg8SliderItem} id={style.pg8SliderItem1}>
              <div className={style.pg8SliderOuterFrame}>
                <img
                  src="	http://dotrex.co/theme-preview/eventer/img/blog2.jpg"
                  alt=""
                />
                <div className={style.pg8SliderInnerFrame}></div>
              </div>
            </div>
            <div className={style.pg8SliderItem} id={style.pg8SliderItem2}>
              <h2>10 tips to improve your laptop</h2>
              <div className={style.pg8SliderItemLine}></div>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                commodi sequi nihil asperiores officia tempora soluta! Ullam
                velit cupiditate expedita impedit, quidem, perspiciatis beatae
                eveniet, at harum consectetur nemo voluptates.
              </span>
            </div>
            <div className={style.pg8SliderButton}>
              <div className={style.pg8SliderBtnCover}></div>
              <div className={style.pg8SliderInnerButton}>
                <span>see more</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.pg8SliderContent}>
          <div className={style.pg8SliderInnerContent}>
            <div className={style.pg8SliderItem} id={style.pg8SliderItem1}>
              <div className={style.pg8SliderOuterFrame}>
                <img
                  src="http://dotrex.co/theme-preview/eventer/img/blog3.jpg
                  "
                  alt=""
                />
                <div className={style.pg8SliderInnerFrame}></div>
              </div>
            </div>
            <div className={style.pg8SliderItem} id={style.pg8SliderItem2}>
              <h2>News of the week</h2>
              <div className={style.pg8SliderItemLine}></div>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, at. Consequuntur obcaecati, quia fugiat molestias
                necessitatibus quam corporis facilis eius praesentium tempora
                laudantium dolorum modi ipsum alias autem nam! Eos.
              </span>
            </div>
            <div className={style.pg8SliderButton}>
              <div className={style.pg8SliderBtnCover}></div>
              <div className={style.pg8SliderInnerButton}>
                <span>see more</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.pg8SliderContent}>
          <div className={style.pg8SliderInnerContent}>
            <div className={style.pg8SliderItem} id={style.pg8SliderItem1}>
              <div className={style.pg8SliderOuterFrame}>
                <img
                  src="http://dotrex.co/theme-preview/eventer/img/blog4.jpg"
                  alt=""
                />
                <div className={style.pg8SliderInnerFrame}></div>
              </div>
            </div>
            <div className={style.pg8SliderItem} id={style.pg8SliderItem2}>
              <h2>How to be a leader</h2>
              <div className={style.pg8SliderItemLine}></div>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi consectetur non, tempora aut nulla, qui beatae dolores
                inventore laudantium illo porro? Ipsa accusamus quibusdam
                voluptates consequuntur cupiditate sint alias reprehenderit.
              </span>
            </div>
            <div className={style.pg8SliderButton}>
              <div className={style.pg8SliderBtnCover}></div>
              <div className={style.pg8SliderInnerButton}>
                <span>see more</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.pg8SliderContent}>
          <div className={style.pg8SliderInnerContent}>
            <div className={style.pg8SliderItem} id={style.pg8SliderItem1}>
              <div className={style.pg8SliderOuterFrame}>
                <img
                  src="http://dotrex.co/theme-preview/eventer/img/blog5.jpg"
                  alt=""
                />
                <div className={style.pg8SliderInnerFrame}></div>
              </div>
            </div>
            <div className={style.pg8SliderItem} id={style.pg8SliderItem2}>
              <h2>Tips to talk in public</h2>
              <div className={style.pg8SliderItemLine}></div>
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium iure numquam nesciunt natus quasi necessitatibus
                architecto modi? Cumque nobis totam veritatis saepe! Iste
                tempore reprehenderit voluptatem ipsum repellat dignissimos.
                Quibusdam.
              </span>
            </div>
            <div className={style.pg8SliderButton}>
              <div className={style.pg8SliderBtnCover}></div>
              <div className={style.pg8SliderInnerButton}>
                <span>see more</span>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Page8Slider;
