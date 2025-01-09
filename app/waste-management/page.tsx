import Waste from "../public/images/wasteManagement.png";
import Image from "next/image";

export default function WasteManagement() {
  return (
    <div className="pt-20">
      {/* Image with Text Overlaid */}
      <div className="relative w-full text-center">
        <Image
          src={Waste}
          alt="Waste Management"
          layout="responsive"
          objectFit="cover"
          className="w-full h-full shadow-lg"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h2 className="text-3xl font-bold">Waste Management</h2>
          <h4 className="text-xl font-bold mt-2">Exciting Project Coming Soon!</h4>
          <div className="mt-10">
        <p className="text-center mt-0 mx-16">
        Optimization of waste collection by statistical analysis <br/>

This project focuses on optimizing the vehicle routing system for waste collection and transportation in Colombo, the commercial capital of Sri Lanka. The aim is to improve the efficiency, sustainability, and cost-effectiveness of waste management processes in the city. With the population of Colombo growing and urbanization accelerating, the demand for efficient waste collection and transportation systems has become increasingly critical. The project employs advanced algorithms and data analytics to design optimized routes for waste collection vehicles, reducing travel time, fuel consumption, and environmental impact.

The current waste collection system in Colombo faces several challenges, including traffic congestion, inadequate route planning, and fluctuating waste volumes. By implementing an optimized routing system, the project aims to address these challenges and enhance the overall performance of the waste management system.</p>
      </div>
        </div>
      </div>

      {/* About Us Section */}
      
      {/* <br /><br /><br /> */}
    </div>
  );
}
