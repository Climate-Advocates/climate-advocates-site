import VideoPlayer from "../Components/VideoPlayer";
import VideoDescription from "../Components/VideoDescription";

export default function Articles() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-900 to-gray-900 p-8 pt-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-10">
        {/* Video Player Section */}
        <div className="flex-1">
          <VideoPlayer videoId="dQw4w9WgXcQ" /> {/* Replace with actual YouTube video ID */}
        </div>

        {/* Video Description Section */}
        <div className="flex-1">
          <VideoDescription
            title="Urbanization Video"
            description="This video explores the impacts of urbanization on the environment, including challenges and innovative solutions. Learn more about how we can make cities sustainable."
          />
        </div>
      </div>
    </div>
  );
}
