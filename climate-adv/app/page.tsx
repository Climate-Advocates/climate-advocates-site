import "./globals.css";

export default function Home() {
  return (
    <main
      style={{
        background:
          "linear-gradient(180deg, rgba(12, 80, 66, 0.77) 0%, rgba(3, 18, 15, 0.77) 100%)",
        padding: "20px", // Optional, for spacing
        color: "white", // Optional, for better text visibility
      }}
    >
      {/* Video Section */}
      <div style={{ marginBottom: "20px" }}>
        <video
          src="/path-to-your-video.mp4" // Replace with your video file path or URL
          controls // Allows play, pause, and other controls
          autoPlay // Automatically starts playing the video
          muted // Mutes the video by default
          loop // Loops the video
          style={{
            width: "100%", // Make the video responsive
            borderRadius: "10px", // Optional, rounded corners for the video
            boxShadow: "0px 3px 6px 0px rgba(0,0,0,0.3)", // Optional, shadow for a polished look
          }}
        ></video>
      </div>
    </main>
  );
}
