"use client"
import React, { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  // 1. Array of background images
  const images = [
    {
        id: 1,
        src: "https://github.com/shadcn.png",
        name: "shiv",
        review: "it was a good experience"
    },
    {
        id: 2,
        src: "https://github.com/shadcn.png",
        name: "ravi kishan",
        review: "it was a good experience"
    },
    {
        id: 3,
        src: "https://github.com/shadcn.png",
        name: "lokesh",
        review: "it was a good experience"
    },
    {
        id: 4,
        src: "https://github.com/shadcn.png",
        name: "rohan",
        review: "it was a good experience"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. Automatically change slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(timer); // Clean up the timer on unmount
  }, [images.length]);

  return (
    <div className='relative text-white h-[450px] sm:h-[400px] w-full overflow-hidden bg-zinc-950 px-4'>
      <h1 className='font-bold text-2xl text-center text'>Testimonials</h1>
      {/* Testimonial Slides Layer */}
      <div className="relative w-full h-full max-w-3xl mx-auto">
        {images.map((i, index) => (
          <div 
            key={i.id} 
            className={`absolute inset-0 flex flex-col justify-center items-center text-center transition-all duration-700 ease-in-out z-20 ${
              index === currentIndex 
                ? 'opacity-100 translate-x-0 pointer-events-auto' 
                : 'opacity-0 translate-x-4 pointer-events-none'
            }`}
          >
            {/* Profile Avatar (Using standard h-24/w-24 utilities) */}
            <img 
              src={i.src} 
              alt={i.name} 
              className='h-24 w-24 rounded-full object-cover border-2 border-green-500 shadow-xl mb-6'
            />
            
            {/* Review Body Text */}
            <p className="text-lg md:text-xl italic font-light text-gray-200 max-w-2xl leading-relaxed mb-4">
              "{i.review}"
            </p>
            
            {/* Reviewer Name */}
            <h3 className="text-xl font-bold tracking-wide text-green-400">
              {i.name}
            </h3>
          </div>
        ))}
      </div>
      
      {/* Dark overlay tint layer (Stays at z-10 underneath the active card text) */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-6 bg-green-500' : 'w-2 bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
