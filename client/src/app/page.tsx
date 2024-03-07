"use client";
import React from "react";
import styles from "./styles.module.css";
import MenuCategoryProducts from "@/components/MenuCategoryProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

const urlSlider = 'https://picsum.photos/1120/400?random="';

const SettingPage = {
  sliderSectionOne: [
    {
      image: urlSlider,
      title: "Tên sản phẩm",
      description: "Mô tả sản phẩm",
      link: "#",
    },
    {
      image: urlSlider,
      title: "Tên sản phẩm",
      description: "Mô tả sản phẩm",
      link: "#",
    },
    {
      image: urlSlider,
      title: "Tên sản phẩm",
      description: "Mô tả sản phẩm",
      link: "#",
    },
  ],
};
const Home = () => {
  return (
    <main>
      <section className={styles.sectionOne}>
        <div className="container">
          <div className={styles.row}>
            <MenuCategoryProducts />
            <div className={styles.sliderHome}>
              <Swiper
                loop={true}
                effect="fade"
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[EffectFade, Navigation, Pagination]}
              >
                {SettingPage.sliderSectionOne.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className={styles.sliderWrapSectionOne}>
                        <img src={`${item.image}${index}`} height={300} />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
