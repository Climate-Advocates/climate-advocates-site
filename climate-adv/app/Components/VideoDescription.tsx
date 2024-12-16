export default function VideoDescription({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) {
    return (
      <div className="text-white">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    );
  }
  