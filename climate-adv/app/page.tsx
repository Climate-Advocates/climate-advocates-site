import BackgroundVideo from "./Components/BackgorundVideo";
import Card from "./Components/CardCarausal";
import VideoCardSet from "./Components/VIdeoCardSet";
import "./globals.css";
import BackgroundImage from "./public/images/filip-zrnzevic-QsWG0kjPQRY-unsplash.jpg";

export default function Home() {
  return (
    <>
      <main className="w-full relative h-screen bg-gradient-to-b from-teal-700/80 to-black/80 text-white">
        {/* YouTube Video Section */}
        <BackgroundVideo />
      </main>
      <section
        className="relative w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BackgroundImage.src})`,
        }}
      >
        <div className="relative top-0 left-0 w-screen h-full bg-black/80 flex items-center justify-center">
          <div className="flex flex-col items-center w-10/12 h-3/4 space-y-6 px-6">
            <h1 className="text-4xl font-bold mb-6 pt-16">
              Featured Articles and Posts
            </h1>
            <div className=" gap-20 bg-green-950 bg-opacity-70 h-1/2 rounded-3xl w-full px-8 py-6 text-center flex ">
              <VideoCardSet />
              <VideoCardSet />
            </div>

            <div className="w-dvw ">
              {/* card set to show rececnt articles */}={" "}
              <div className="flex space-x-4 overflow-x-auto">
                <Card
                  imageSrc=""
                  title="Fire Up Your Motivation"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in sapien. Nullam dapibus fermentum ipsum. Class aptent taciti sociosqu."
                  author="Kyle Patterson"
                  articleLink="#"
                />
                <Card
                  imageSrc=""
                  title="Fire Up Your Motivation"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in sapien. Nullam dapibus fermentum ipsum. Class aptent taciti sociosqu."
                  author="Kyle Patterson"
                  articleLink="#"
                />
                <Card
                  imageSrc=""
                  title="Fire Up Your Motivation"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in sapien. Nullam dapibus fermentum ipsum. Class aptent taciti sociosqu."
                  author="Kyle Patterson"
                  articleLink="#"
                />
                <Card
                  imageSrc=""
                  title="Fire Up Your Motivation"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in sapien. Nullam dapibus fermentum ipsum. Class aptent taciti sociosqu."
                  author="Kyle Patterson"
                  articleLink="#"
                />{" "}
                <Card
                  imageSrc=""
                  title="Fire Up Your Motivation"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in sapien. Nullam dapibus fermentum ipsum. Class aptent taciti sociosqu."
                  author="Kyle Patterson"
                  articleLink="#"
                />{" "}
                <Card
                  imageSrc=""
                  title="Fire Up Your Motivation"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in sapien. Nullam dapibus fermentum ipsum. Class aptent taciti sociosqu."
                  author="Kyle Patterson"
                  articleLink="#"
                />
              </div>
            </div>
            <br />
            <br />
            {/* Grid of Smaller Cards */}
          </div>
        </div>
      </section>
    </>
  );
}
