"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { SliderImage } from "@/constants";
import Image from "next/image";
import ImageVawes from "@/components/ImageVawes";
import HeroForm from "./HeroForm";
function Hero() {
  return (
    <div className="relative h-[32rem]">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {SliderImage.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Image
                  src={image.href}
                  alt={image.alt}
                  width={1920}
                  height={1080}
                  className="h-[32rem] lg:h-[44rem] w-full object-cover brightness-75"
                />
                <ImageVawes myclassname="absolute bottom-0  " />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex left-1" />
        <CarouselNext className="hidden lg:flex right-1" />
      </Carousel>
      <HeroForm />
    </div>
  );
}

export default Hero;
