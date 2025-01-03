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
import backgroundImage from "../public/images/article-bg.jpg";

import article1 from "../public/images/articles/article1.jpg";
import article2 from "../public/images/articles/article2.jpg";
import article3 from "../public/images/articles/article3.jpg";
import article4 from "../public/images/articles/article4.jpg";
import article5 from "../public/images/articles/article5.jpg";
import article6 from "../public/images/articles/article6.jpg";
import article7 from "../public/images/articles/article7.jpg";

export default function Articles() {
  return (
    <div className="py-32"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-center text-3xl font-bold">Articles</h1>
      <p className="text-center mt-4">
        Explore our latest articles and insights on sustainability and climate advocacy.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-12 mt-10">
        {/* Cards for articles */}
        <Card
          imageSrc={article1}
          title="Climate Crisis: Act Now to End Fossil Fuel Madness"
          description="The unprecedented spate of climate-driven catastrophes unfolding around the world right now is just terrifying. Extreme heat. Record-breaking floods..."
          author="Rachel Cleetus"
          articleLink="/articles/article1"
        />
        <Card
          imageSrc={article2}
          title="Pakistan Floods: One Year On, Lessons in Climate Loss and Damage"
          description="Last summer, from June through August, Pakistan endured extended intense rainfall—exacerbated by climate change—that triggered devastating and unprecedented..."
          author="Rachel Cleetus"
          articleLink="/articles/article2"
        />
        <Card
          imageSrc={article3}
          title="What International Climate Justice Means for Sri Lanka"
          description="Earlier this month I visited my family in Sri Lanka and found that everything has changed since my last visit almost four years ago. As I embraced my family, I felt a palpable fatigue..."
          author="Sanjali De Silva"
          articleLink="/articles/article3"
        />
        <Card
          imageSrc={article4}
          title="Evolution of Environmental movements and it’s impact climate in Sri Lanka"
          description="Known forits abundant biodiversity and strong ties to the natural world, Sri Lanka has a long history of environmental responsibility..."
          author="Isora Liyanaarachchi"
          articleLink="/articles/article4"
        />
        <Card
          imageSrc={article5}
          title="Stories from the Heart: Resilience and Adaptation in the Face of Climate Change"
          description="The realities of climate change resonate deeply within the lives of individuals, often in quiet, yet profound ways. In every corner..."
          author="Oshadhi Wijenayake"
          articleLink="/articles/article5"
        />
        <Card
          imageSrc={article6}
          title="Internship Diaries: A Sri lanka’s internship experiance on environmental practice in Norway"
          description="During my internship at NORCAP, I had the unique opportunity to work on a variety of environmental projects and gain insights into Norway’s advanced..."
          author="Banuka Nimsith Wickramasinghe"
          articleLink="/articles/article6"
        />
        <Card
          imageSrc={article7}
          title="Role of climate change in Sri Lanka’s economic woes"
          description="Growing 1.6% in the third quarter of 2023, Sri Lanka’s economy has experienced a significant shift from the dire economic crisis it faced just a year ago. The crisis led to riots and  the resignation of former..."
          author="Sandev Ferdinando"
          articleLink="/articles/article7"
        />
      </div>
    </div>
  );
}
