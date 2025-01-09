"use client";

import React, { useState } from "react";
import Image from "next/image";
import BackgroundVideo from "./Components/BackgorundVideo";
import Card from "./Components/CardCarausal";
import VCard2 from "./Components/videoCards/vCard2";
import VideoCardSet from "./Components/videoCards/VIdeoCardSet";
import "./globals.css";
import BackgroundImage from "./public/images/filip-zrnzevic-QsWG0kjPQRY-unsplash.jpg";

import article1 from "./public/images/articles/article1.jpg";
import article2 from "./public/images/articles/article2.jpg";
import article3 from "./public/images/articles/article3.jpg";
import article4 from "./public/images/articles/article4.jpg";

const images = [
  "/images/Slide1/1.png",
  "/images/Slide1/2.png",
  "/images/Slide1/3.png",
  "/images/Slide1/4.png",
  "/images/Slide1/5.png",
  "/images/Slide1/6.png",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <main className="w-full relative h-screen bg-gradient-to-b from-teal-700/80 to-black/80 text-white">
        {/* YouTube Video Section */}
        <BackgroundVideo />
      </main>

      {/* Slider Section */}
      <section
        className="relative w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BackgroundImage.src})`,
        }}
      >
        <div className="relative top-0 left-0 w-screen h-full bg-black/70 flex items-center justify-center py-6">
          <div className="flex flex-col items-center w-10/12 h-3/4 space-y-6 px-6">
            {/* Image Slider */}
            <div className="relative w-full max-w-4xl h-96 flex items-center justify-center">
              <button
                className="absolute left-4 bg-gray-800/60 text-white p-3 rounded-full hover:bg-gray-700"
                onClick={handlePrev}
              >
                ◀
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={images[currentIndex]} // Image path or URL
                  alt={`Slide ${currentIndex + 1}`}
                  layout="fill" // Ensure the image fills its container
                  objectFit="cover" // Ensure the image is cropped properly
                  className="rounded-lg"
                  priority // Optimize image loading for the slider
                />
              </div>
              <button
                className="absolute right-4 bg-gray-800/60 text-white p-3 rounded-full hover:bg-gray-700"
                onClick={handleNext}
              >
                ▶
              </button>
            </div>

            <h1 className="text-4xl font-bold mb-6 pt-16">
              Featured Articles and Posts
            </h1>
            <div className="gap-8 bg-opacity-70 h-1/2 rounded-3xl w-auto px-2 py-12 text-center flex flex-wrap justify-center">
              <VideoCardSet />
              <VCard2 />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-12 mt-10">
              {/* Cards for articles */}
              <Card
                imageSrc={article1}
                title="Climate Crisis: Act Now to End Fossil Fuel Madness"
                description="The unprecedented spate of climate-driven catastrophes unfolding around the world right now is just terrifying. Extreme heat. Record-breaking floods..."
                author="Rachel Cleetus"
                articleLink="/articles/article1"
              />
              <Card
                imageSrc={article2}
                title="Pakistan Floods: One Year On, Lessons in Climate Loss and Damage"
                description="Last summer, from June through August, Pakistan endured extended intense rainfall—exacerbated by climate change—that triggered devastating and unprecedented..."
                author="Rachel Cleetus"
                articleLink="/articles/article2"
              />
              <Card
                imageSrc={article3}
                title="What International Climate Justice Means for Sri Lanka"
                description="Earlier this month I visited my family in Sri Lanka and found that everything has changed since my last visit almost four years ago. As I embraced my family, I felt a palpable fatigue..."
                author="Sanjali De Silva"
                articleLink="/articles/article3"
              />
              <Card
                imageSrc={article4}
                title="Evolution of Environmental movements and it’s impact climate in Sri Lanka"
                description="Known for its abundant biodiversity and strong ties to the natural world, Sri Lanka has a long history of environmental responsibility..."
                author="Isora Liyanaarachchi"
                articleLink="/articles/article4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
