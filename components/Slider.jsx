import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import Image from 'next/image';
import slide1 from '../public/images/boda-1.jpg'
import slide2 from '../public/images/boda-2.jpg'
import 'swiper/css';
import styles from "../styles/Home.module.css"

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={slide1} alt="" layout='fill' objectFit='cover' quality={100}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide2} alt="" layout='fill' objectFit='cover' objectPosition='30%' quality={100}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}