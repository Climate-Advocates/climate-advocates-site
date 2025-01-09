"use client";
import { useState } from "react";
import Image from "next/image";

export default function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      {/* Image */}
      <div className="w-full h-64 flex items-center justify-center">
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        width={1920} // Replace with the actual width of your image
        height={1080} // Replace with the actual height of your image
        className="w-full h-full object-cover rounded-lg"
      />
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      >
        ❯
      </button>
    </div>
  );
}
