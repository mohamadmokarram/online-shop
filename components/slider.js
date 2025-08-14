"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import cocoaImg from "@/public/slider/cocoa-slide.jpg";
import chocolateBar from "@/public/slider/chocolate-bar-slide.jpg";
import cocoaBeans from "@/public/slider/cocoa-beans-slide.jpg";
import dubaiImg from '@/public/slider/dubai.jpg'
import dubaiBar from '@/public/slider/dubai-bar.jpg'

export default function Slider() {
  return (
    <section className="w-full h-screen">
      <Swiper
        className="w-full h-full"
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        effect="fade">
        <SwiperSlide className="w-full h-full">
          <Image
            src={cocoaImg}
            alt="cocoa"
            fill={true}
            className="md:object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <Image
            src={chocolateBar}
            alt="chocolateBar"
            fill={true}
            className="md:object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <Image
            src={cocoaBeans}
            alt="cocoaBeans"
            fill={true}
            className="md:object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <Image
            src={dubaiBar}
            alt="dubaiBar"
            fill={true}
            className="md:object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <Image
            src={dubaiImg}
            alt="dubaiImg"
            fill={true}
            className="md:object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
