"use client";

export default function BackgroundArticleVideo() {
  return (
    <div className="relative flex items-center justify-center h-[500px]">
      {/* YouTube Video with sound enabled */}
      <iframe
        src="https://www.youtube.com/embed/wyAfQBSOeFg?autoplay=1&loop=1&playlist=wyAfQBSOeFg&controls=0&modestbranding=1&rel=0&mute=0"
        title="YouTube background video"
        allow="autoplay; fullscreen"
        style={{ border: 0 }}
        className="w-[800px] h-[450px] rounded-xl" // Set specific width and height
      ></iframe>

      

    </div>
  );
}
