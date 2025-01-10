import VCard2 from "../Components/videoCards/vCard2";
import VCard3 from "../Components/videoCards/vCard3";
import VCard4 from "../Components/videoCards/vCard4";
import VCard5 from "../Components/videoCards/vCard5";
import VideoCardSet from "../Components/videoCards/VIdeoCardSet";
import backgroundImage from "../public/images/article-bg.jpg";


export default function Discussions() {
  return (
    <div className="pt-32"
    style={{
      backgroundImage: `url(${backgroundImage.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}  
    >
      <h1 className="text-center text-3xl font-bold">Discussions</h1>
      <p className="text-center mt-4">
        Learn more about Climate Advocates and our mission to create a better
        world.
      </p>
          <div className="flex flex-col items-center w-12/12">
            <div className=" gap-8  bg-opacity-70 h-1/2 rounded-3xl w-auto px-2 py-12 text-center flex flex-wrap justify-center">
              <VCard4 />
              <VideoCardSet />
              <VCard2 />
              <VCard3 />
              <VCard5 />

            </div>
          </div>

    </div>
  );
}
