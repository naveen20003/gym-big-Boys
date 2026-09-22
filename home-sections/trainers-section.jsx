"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const slides = [
  {
    id: 1,
    name: "Aarav Sharma",
    experience: "10 years",
    trained: "25 clients",
    rating: "★★★★★",
    image: "/profile.jpg",
  },
  {
    id: 2,
    name: "Maya Kapoor",
    experience: "8 years",
    trained: "32 clients",
    rating: "★★★★★",
    image: "/profile.jpg",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    experience: "12 years",
    trained: "40 clients",
    rating: "★★★★★",
    image: "/profile.jpg",
  },
  {
    id: 4,
    name: "Ananya Rao",
    experience: "7 years",
    trained: "21 clients",
    rating: "★★★★★",
    image: "/profile.jpg",
  },
  {
    id: 5,
    name: "Kabir Singh",
    experience: "9 years",
    trained: "30 clients",
    rating: "★★★★★",
    image: "/profile.jpg",
  },
];

function TrainersSection() {
  return (
    <section className="w-full overflow-hidden bg-black py-16 text-white">

      {/* Heading */}
      <div className="mb-14 text-center px-6">
        <h1 className="font-serif text-3xl font-bold">
          OUR Trainers
        </h1>

        <p className="pt-4 text-[15px] font-light">
          people behind the spaces
        </p>
      </div>

      {/* Slideshow */}
      <Swiper
        spaceBetween={24}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            
            {/* Profile Image */}
            <div className="relative mx-auto h-[320px] w-[320px] overflow-hidden rounded-full">
              <Image
                src={slide.image}
                alt={slide.name}
                fill
                priority={slide.id <= 3}
                sizes="320px"
                className="object-cover object-center"
              />
            </div>

            {/* Information */}
            <div className="px-4 py-6 text-center">
              <h2 className="font-serif text-2xl font-bold">
                {slide.name}
              </h2>

              <div className="mt-3 space-y-1 text-sm font-light">
                <p>{slide.experience} experience</p>
                <p>{slide.trained}</p>
              </div>

              <p className="mt-3 tracking-widest">
                {slide.rating}
              </p>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default TrainersSection;