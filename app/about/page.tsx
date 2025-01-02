import GroupPhoto from "../public/images/group-photo.png";
import Image from "next/image";
import Sanudi from "../public/images/Sanudi.jpg";
import Danujaya from "../public/images/Danujaya.jpg";
import Dinu from "../public/images/Dinu.jpg";
import Kavinya from "../public/images/Kavinya.jpg";
import Lakshitha from "../public/images/Lakshitha.jpg";
import Namasha from "../public/images/Namasha.jpg";
import Ridmi from "../public/images/Ridmi.jpg";
import Sanduni from "../public/images/Sanduni.jpg";
import Suban from "../public/images/Suban.jpg";
import Uvini from "../public/images/Uvini.jpg";
import Vimash from "../public/images/Vimash.jpg";
import Link from "next/link";

export default function About() {
  const projectOwner = {
    name: "Sanudi Manjusri",
    role: "Project Manager",
    image: Sanudi,
    description:
"Project Owner As the Founder of Climate Advocates , Sanudi Manjusri is a passionate advocate for climate action and sustainability. Serving as a Climate Action Ambassador for the G17 University Ambassador Consortium, She is dedicated to creating meaningful change within the community and beyond. Driven by a vision to address climate challenges, She has launched a groundbreaking climate-focused website specifically designed for Sri Lanka. This platform aims to engage both local and international communities in vital discussions about environmental sustainability and advocacy. Through informative content and collaborative initiatives, seeks to inspire collective action for a healthier planet.",
linkedin:"https://www.linkedin.com/in/sanudi-manjusri-535181284/"

};

  const website = [
    {
      name: "Danujaya Liyanage",
      role: "Developer",
      image: Danujaya,
      linkedin:"https://www.linkedin.com/in/danujayaliyanage/"

    },
    {
      name: "Dinu Jayatissa",
      role: "Developer",
      image: Dinu,
      linkedin:"https://www.linkedin.com/in/dinu-jayatissa-9b7079203/"

    },
    {
      name: "Uvini Ranasinghe",
      role: "UI/UX Designer,Developer",
      image: Uvini,
      linkedin:"https://www.linkedin.com/in/uvini-ranasinghe"

    },
  ];
    const wasteManagement = [
    {
      name: "Kavinya Silva",
      role: "Project Coordinator",
      image: Kavinya,
      linkedin:"https://www.linkedin.com/in/kavinya-de-silva-647569286/"

    },
    
    
    {
      name: "Suban Wickramasinghe",
      role: "Project Coordinator",
      image: Suban,
      linkedin:""

    },
    {
      name: "Sanudi Manjusri",
      role: "Project Coordinator",
      image: Sanudi,
      linkedin:"https://www.linkedin.com/in/sanudi-manjusri-535181284/"

    },
  ];
  const videoEditing = [
    {
      name: "Ridmi Jayawardana",
      role: "Video Editor",
      image: Ridmi,
      linkedin:""

    },
    
    {
      name: "Vimash Bandara",
      role: "Video Editor",
      image: Vimash,
      linkedin:""

    },
  ];
  const videoRecording = [
    
    {
      name: "Sanduni Gamage",
      role: "Videographer",
      image: Sanduni,
      linkedin:"https://www.linkedin.com/in/sanduni-gamage-6746a6197/"

    },
    {
      name: "Lakshitha Perera",
      role: "Videographer",
      image: Lakshitha,
      linkedin:""

    },
    {
      name: "Namasha Fernando",
      role: "Videographer",
      image: Namasha,
      linkedin:""

    },
  ];

  return (
    <div className="pt-20">
      {/* Group Photo */}
      <div className="w-full text-center">
        <Image
          src={GroupPhoto}
          alt="Team Group Photo"
          layout="responsive"
          objectFit="cover"
          className="mx-auto w-3/4 shadow-lg"
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

      {/* Project Owner Section */}
      <div className="mt-10 px-10">
      <Link href={projectOwner.linkedin} passHref target="_blank">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-12">
          <Image
            src={projectOwner.image}
            alt={projectOwner.name}
            className="w-48 h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
            width={500}
            height={500}
          />
          <div>
          <h2 className="text-2xl font-semibold text-black">{projectOwner.name}</h2>
          <p className="text-gray-500">{projectOwner.role}</p>
          <p className="text-gray-700 mt-4">{projectOwner.description}</p>
          </div>
        </div>
        </Link>
      </div>

      {/* Team Members Section */}
      <div className="mt-10">
        <h2 className="text-center text-2xl font-bold mb-6">
          Website Development & Designing Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          {website.map((member, index) => (
            <Link href={member.linkedin} passHref target="_blank">
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
                width={500}
                height={500}
              />
              <h3 className="text-xl font-semibold text-black">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div></Link>
          ))}
        </div>
      </div>
      {/* Team Members Section */}
      <div className="mt-10">
        <h2 className="text-center text-2xl font-bold mb-6">
        Waste Management Project
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          {wasteManagement.map((member, index) => (
            <Link href={member.linkedin} passHref target="_blank">
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
                width={500}
                height={500}
              />
              <h3 className="text-xl font-semibold text-black">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div></Link>
          ))}
        </div>
      </div>
      {/* Team Members Section */}
      <div className="mt-10">
        <h2 className="text-center text-2xl font-bold mb-6">
        Video Editing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 ">
          {videoEditing.map((member, index) => (
            <Link href={member.linkedin} passHref target="_blank">
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 "
            >
              <Image
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
                width={500}
                height={500}
              />
              <h3 className="text-xl font-semibold text-black">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div></Link>
          ))}
        </div>
      </div>
      {/* Team Members Section */}
      <div className="mt-10">
        <h2 className="text-center text-2xl font-bold mb-6">
        Video Recording
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          {videoRecording.map((member, index) => (
            <Link href={member.linkedin} passHref target="_blank">
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
                width={500}
                height={500}
              />
              <h3 className="text-xl font-semibold text-black">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div></Link>
          ))}
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>


    </div>
  );
}