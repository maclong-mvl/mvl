"use client";
import MenuCategoryProducts from "@/components/MenuCategoryProducts";
import Wraper from "@/components/Wraper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.css";
import CategoryProduts from "@/components/CategoryProduts";

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
        <Wraper>
          <div className={styles.row}>
            <MenuCategoryProducts />
            <div className={styles.sliderHome}>
              <Swiper
                loop={true}
                effect="fade"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {SettingPage.sliderSectionOne.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className={styles.sliderWrapSectionOne}>
                        <img src={`${item.image}${index}`} height={400} />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </Wraper>
      </section>
      <section className={styles.sectionTwo}>
        <Wraper>
          <CategoryProduts />
        </Wraper>
      </section>
    </main>
  );
};

export default Home;
