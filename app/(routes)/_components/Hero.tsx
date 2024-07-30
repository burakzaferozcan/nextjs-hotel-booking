"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { apiImagesUrl, SliderImage } from "@/constants";
import Image from "next/image";
import ImageVawes from "@/components/ImageVawes";
import HeroForm from "./HeroForm";
import { getSlider } from "@/actions/getSlider";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/types/types";
function Hero() {
  const [sliderImages, setSliderImages] = useState<Slider[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchSlider() {
      try {
        const images: Slider[] = await getSlider();
        setSliderImages(images);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchSlider();
  }, []);

  if (loading || (!loading && sliderImages.length === 0)) {
    return (
      <div className="relative h-[32rem]">
        <div className="h-[32rem] lg:h-[44rem] w-full relative ">
          <Skeleton className="bg-slate-700 h-full w-full rounded-none"></Skeleton>
          <ImageVawes myclassname="absolute bottom-0" />
        </div>
        <HeroForm />
      </div>
    );
  }
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
          {sliderImages.map((data, index) => {
            return (
              <CarouselItem key={index}>
                <Image
                  src={`${apiImagesUrl}/${data.collectionId}/${data.id}/${data.image}`}
                  alt={`${apiImagesUrl}/${data.collectionId}/${data.id}/${data.alt}`}
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
