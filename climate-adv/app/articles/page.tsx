// export default function Articles() {
//   return (
//     <div className="pt-20">
//       <h1 className="text-center text-3xl font-bold">Articles</h1>
//       <p className="text-center mt-4">
//         Explore our latest articles and insights on sustainability and climate
//         advocacy.
//       </p>
//     </div>
//   );
// }

import Card from "../Components/CardCarausal";

export default function Articles() {
  return (
    <div className="pt-20">
      <h1 className="text-center text-3xl font-bold">Articles</h1>
      <p className="text-center mt-4">
        Explore our latest articles and insights on sustainability and climate advocacy.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-12 mt-10">
        {/* Cards for articles */}
        <Card
          imageSrc="/images/article1.jpg"
          title="The Impact of Renewable Energy"
          description="Discover how renewable energy sources can transform our world."
          author="John Doe"
          articleLink="/articles/article1"
        />
        <Card
          imageSrc="/images/article2.jpg"
          title="Sustainable Living Tips"
          description="Practical ways to live a more sustainable lifestyle."
          author="Jane Smith"
          articleLink="/articles/article2"
        />
        <Card
          imageSrc="/images/article3.jpg"
          title="Climate Advocacy 101"
          description="Learn the basics of advocating for climate action."
          author="Alex Johnson"
          articleLink="/articles/article3"
        />
        <Card
          imageSrc="/images/article4.jpg"
          title="Reducing Carbon Footprint"
          description="Simple steps to reduce your carbon footprint effectively."
          author="Emily Davis"
          articleLink="/articles/article4"
        />
        <Card
          imageSrc="/images/article5.jpg"
          title="Green Technology Trends"
          description="Explore the latest trends in green technology and innovation."
          author="Chris Lee"
          articleLink="/articles/article5"
        />
        <Card
          imageSrc="/images/article6.jpg"
          title="Eco-Friendly Travel"
          description="How to travel sustainably and responsibly."
          author="Sophia Carter"
          articleLink="/articles/article6"
        />
        <Card
          imageSrc="/images/article7.jpg"
          title="Wildlife Conservation"
          description="The importance of protecting our planet's wildlife."
          author="Michael Brown"
          articleLink="/articles/article7"
        />
        <Card
          imageSrc="/images/article8.jpg"
          title="Sustainable Agriculture"
          description="How sustainable farming practices benefit the environment."
          author="Olivia Green"
          articleLink="/articles/article8"
        />
      </div>
    </div>
  );
}
