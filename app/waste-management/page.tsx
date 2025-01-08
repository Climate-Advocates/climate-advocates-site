import Waste from "../public/images/wasteManagement.png";
import Image from "next/image";

export default function WasteManagement() {
  return (
    <div className="pt-20">
      {/* Group Photo */}
      <div className="w-full text-center">
        <Image
          src={Waste}
          alt="Team Group Photo"
          layout="responsive"
          objectFit="cover"
          className="w-3/4 shadow-lg"
        />
      </div>

      {/* About Us Section */}
      <div className="mt-10">
        <h2 className="text-center text-3xl font-bold">Waste Management</h2><br/>
        <h4 className="text-center text-xl font-bold">Exciting Project Coming Soon!</h4>

        <p className="text-center mt-4 mx-16">
        
🌍 At Climate Advocates, we're committed to making a positive impact on the environment. Our Waste Management Project is currently in the planning phase, and we can’t wait to share it with you!
<br/>
📢 Stay tuned for updates as we embark on this important journey to create sustainable solutions for managing waste and promoting eco-friendly practices.
<br/>
💡 Together, we can build a cleaner, greener future! Follow us for the latest updates and announcements about this project.
        </p>
      </div>
      <br/><br/><br/>

    </div>
  );
}