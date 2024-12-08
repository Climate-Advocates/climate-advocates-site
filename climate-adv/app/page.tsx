import BackgroundVideo from "./Components/BackgorundVideo";
import VideoCardSet from "./Components/VIdeoCardSet";
import "./globals.css";
import BackgroundImage from "./public/images/filip-zrnzevic-QsWG0kjPQRY-unsplash.jpg";

export default function Home() {
  return (
    <main className="relative w-full h-screen bg-gradient-to-b from-teal-700/80 to-black/80 text-white">
      {/* YouTube Video Section */}
      <BackgroundVideo />

      {/* Content */}
      {/* section for the featured articles and posts with backgorund image */}
      <section
        className="relative w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BackgroundImage.src})`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center">
          <div className="flex flex-col items-center w-10/12 h-3/4 space-y-6 px-6">
            {/* Large Card */}
            <h1 className="text-4xl font-bold mb-6">
              Featured Articles and Posts
            </h1>
            <div className=" gap-20 bg-gray-900 bg-opacity-50 rounded-lg px-8 py-6 text-center flex ">
              <VideoCardSet />
              <VideoCardSet />
            </div>

            <br />
            <br />

            {/* Grid of Smaller Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-2/4 ">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-2">Card 1</h2>
                <p className="text-sm">Description for card 1.</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-2">Card 2</h2>
                <p className="text-sm">Description for card 2.</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-2">Card 3</h2>
                <p className="text-sm">Description for card 3.</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-2">Card 4</h2>
                <p className="text-sm">Description for card 4.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
