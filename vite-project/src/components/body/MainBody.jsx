import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  FrameOne,
  FrameTwo,
  FrameThree,
  FrameFour,
  FrameFive,
} from "../export/ExportScrollItems";
import Classes from "../../sass/MainBody.module.scss";

const MainBody = () => {
  return (
    <>
      <div className={Classes["main-body"]}>
        <section className={Classes.textSection}>
          <p>Perfume</p>
          <p>Haircare</p>
          <p>Skin Care</p>
          <p>Makeup</p>
          <p>Health & Beauty</p>
          <p>Baby's Fashion</p>
          <p>Woman's Fashion</p>
          <p>Men's Fashion</p>
        </section>
        <div></div>
        <section>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
          >
            <div className={Classes["carousel-item"]}>
              <img src={FrameOne} alt="Frame One" />
            </div>
            <div className={Classes["carousel-item"]}>
              <img src={FrameTwo} alt="Frame Two" />
            </div>
            <div className={Classes["carousel-item"]}>
              <img src={FrameThree} alt="Frame Three" />
            </div>
            <div className={Classes["carousel-item"]}>
              <img src={FrameFour} alt="Frame Four" />
            </div>
            <div className={Classes["carousel-item"]}>
              <img src={FrameFive} alt="Frame Five" />
            </div>
          </Carousel>
        </section>
      </div>
      <hr />
    </>
  );
};

export default MainBody;
