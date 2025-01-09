import Image, { StaticImageData } from "next/image";

interface CardProps {
  imageSrc: string | StaticImageData; // Allow both string and StaticImageData
  title: string;
  description: string;
  author: string;
  articleLink: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  author,
  articleLink,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm mx-auto">
      {/* Image */}
      <div className="overflow-hidden rounded-xl mb-4">
        <Image
          src={typeof imageSrc === "string" ? imageSrc : imageSrc.src} // Handle both types
          alt={title}
          className="w-full h-48 object-cover"
          width={350}
          height={175}
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-2">{description}</p>

      {/* Author */}
      <p className="text-sm text-gray-500 mt-4">
        by{" "}
        <a href={articleLink} className="text-blue-500 hover:underline">
          {author}
        </a>
      </p>

      {/* Button */}
      <div className="mt-6">
        <a
          href={articleLink}
          className="block bg-gray-900 text-white text-center text-sm font-medium rounded-lg py-2 hover:bg-gray-700"
        >
          Read article
        </a>
      </div>
    </div>
  );
};

export default Card;
