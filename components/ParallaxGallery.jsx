import Image from "next/image";
import styles from "../styles/Gallery.module.css"
import boda1 from '../public/images/boda-1.jpg'
import boda2 from '../public/images/boda-2.jpg'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function ParallaxGallery() {
  return(
    <>
      <div className={styles.containBoda}>
        <div className={styles.title}>
          <h1>Bodas</h1>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className={styles.mySwiper}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <Image src={boda1} alt=""/>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image src={boda1} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image src={boda1} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.containBoda}>
        <div className={styles.title2}>
          <h1>Quinceañeras</h1>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className={styles.mySwiper}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <Image src={boda1} alt=""/>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image src={boda1} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image src={boda1} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.containBoda}>
        <div className={styles.title2}>
          <h1>Embarazo</h1>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className={styles.mySwiper}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <Image src={boda1} alt=""/>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image src={boda1} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image src={boda1} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}