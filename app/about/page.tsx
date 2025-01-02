import GroupPhoto from "../public/images/group-photo.png";
import Image from "next/image";

export default function About() {
  return (
    <div className="pt-20">
      {/* Group Photo */}
      <div className="w-full text-center">
        <Image
          src={GroupPhoto}
          alt="Team Group Photo"
          className="mx-auto  shadow-lg"
          layout="responsive"
          width={800} // Replace with your actual image width
          height={600} // Replace with your actual image height
        />
      </div>

      {/* Page Title */}
      <div className="mt-10">
        <h1 className="text-center text-3xl font-bold">About Us</h1>
        <p className="text-center mt-4">
          Learn more about Climate Advocates and our mission to create a better
          world.
        </p>
      </div>
    </div>
  );
}
