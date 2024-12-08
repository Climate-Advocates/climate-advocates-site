export default function BackgroundVideo() {
  return (
    <div className="relative top-0 left-0 w-full h-full overflow-hidden">
      {/* Adjusted YouTube Video */}
      <iframe
        src="https://www.youtube.com/embed/ujnX5u1Pt5s?si=mtExJkxoAe1l4SYT&autoplay=0&mute=1&loop=1&playlist=ujnX5u1Pt5s"
        title="YouTube background video"
        allow="autoplay; fullscreen"
        style={{ border: 0 }}
        className="absolute top-0 left-0 w-[calc(100vw+120px)] h-[calc(100vh+120px)] -translate-x-[50px] -translate-y-[50px]"
      ></iframe>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-end justify-center">
        <section className="relative z-10 flex flex-col items-center justify-end gap-5 h-full pb-20">
          <h1 className="text-5xl font-bold">Climate Advocates</h1>
          <p className="text-xl">Advocating for a better world</p>
          <button className="px-5 py-3 bg-green-500 text-white rounded-lg font-bold">
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
}
