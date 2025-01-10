import Card from "../Components/CardCarausal";
import backgroundImage from "../public/images/article-bg.jpg";
import article1 from "../public/images/articles/article1.jpg";
import article2 from "../public/images/articles/article2.jpg";
import article3 from "../public/images/articles/article3.jpg";
import article4 from "../public/images/articles/article4.jpg";
import article5 from "../public/images/articles/article5.jpg";
import article6 from "../public/images/articles/article6.jpg";
import article7 from "../public/images/articles/article7.jpg";
import article8 from "../public/images/articles/article8.jpg";
import article9 from "../public/images/articles/article9.jpg";
import Link from "next/link";
import Image from "next/image";

export default function Articles() {
  return (
    <div className="relative py-32"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Green Overlay */}
      <div className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(to bottom, rgba(0, 51, 0, 0.6), rgba(0, 51, 0, 0))`,
        }}></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        <h1 className="text-center text-3xl font-bold text-white">Business Development & Lifestyle Center Research Project</h1>
        <p className="text-center mt-4 text-white">
          Explore our latest articles and insights on sustainability and climate advocacy.
        </p>
        <div className="mt-10 px-10">
        <Link href="https://youtu.be/QIVsLlSn1t0" passHref target="_blank">
          <div
            className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-12 cursor-pointer"
          >
            <Image
              src="/images/research.jpg"
              alt="thumbnail"
              className="w-48 h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
              width={500}
              height={500}
            />
            
            <div>
              
              <p className="text-gray-500">The proposed design for the Nugegoda Supermarket offers an innovative approach to environmental sustainability, supporting medium-scale businesses while promoting climate action. This multifunctional space integrates commercial activities with lifestyle elements, creating an inviting atmosphere that fosters local entrepreneurship and enhances community well-being.
              </p>
              <p className="text-gray-500">A key feature of the design is its focus on natural light and ventilation. Expansive glass facades flood the interior with daylight, reducing reliance on artificial lighting and creating a welcoming environment. The open layout supports natural airflow through cross-ventilation and stack ventilation, ensuring a comfortable indoor climate without air conditioning.

</p>
              <p className="text-gray-500">The supermarket’s roof exemplifies its commitment to zero energy design, capturing solar energy through panels and a multi-layered structure that allows heated air to escape. This design enables efficient operation on solar energy, even after sunset, and sets a standard for future commercial developments.
              </p>
              <p className="text-gray-500">Sustainability is further emphasized in the choice of materials, incorporating reusable and eco-friendly options like steel, glass, and concrete. Steel adds structural integrity and adaptability, while precast construction methods reduce waste and energy use. The glass enhances aesthetics and energy efficiency by maintaining a strong connection to the outdoors.
              </p>
              <p className="text-gray-500 mb-4">Incorporating biophilic design elements, such as trees and vertical gardens, enhances the building’s ecological footprint. These features improve air quality and create a cooling effect, harmonizing the space with nature. Overall, the Nugegoda Supermarket design reflects a holistic approach to architecture, prioritizing sustainability and climate action while serving as a vibrant community hub that enriches the urban landscape.</p>
              <button className="px-5 py-3 bg-green-500 text-white rounded-lg font-bold">
            Watch Video
          </button>
            </div>
            
          </div>
        </Link>
      </div>

        {/* PDF Viewer Section - Flexbox for Side-by-Side Layout */}
        <div className="flex flex-wrap justify-center gap-8 px-12 mt-10">
          {/* PDF Viewer 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <iframe
                src="/images/Reports/report1.pdf"
                width="100%"
                height="400px"
                title="PDF Viewer"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* PDF Viewer 2 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="bg-white p-4 rounded-lg shadow-lg mb-10">
              <iframe
                src="/images/Reports/report2.pdf"
                width="100%"
                height="400px"
                title="PDF Viewer"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <h1 className="text-center text-3xl font-bold text-white">Articles</h1>
        <p className="text-center mt-4 text-white">
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
            description="Known for its abundant biodiversity and strong ties to the natural world, Sri Lanka has a long history of environmental responsibility..."
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
            title="Internship Diaries: A Sri Lanka’s internship experience on environmental practice in Norway"
            description="During my internship at NORCAP, I had the unique opportunity to work on a variety of environmental projects and gain insights into Norway’s advanced..."
            author="Banuka Nimsith Wickramasinghe"
            articleLink="/articles/article6"
          />
          <Card
            imageSrc={article7}
            title="Role of climate change in Sri Lanka’s economic woes"
            description="Growing 1.6% in the third quarter of 2023, Sri Lanka’s economy has experienced a significant shift from the dire economic crisis it faced just a year ago. The crisis led to riots and the resignation of former..."
            author="Sandev Ferdinando"
            articleLink="/articles/article7"
          />
          <Card
            imageSrc={article8}
            title="Assessing the relationship between extreme weather event and economic losses in Sri Lanka"
            description="Sri Lanka, an island nation in the Indian Ocean, is highly vulnerable to extreme weather events such as floods, cyclones, and droughts. The frequency and intensity of these natural disasters have been increasing in recent decades, raising concerns about their long-term economic implications..."
            author="Sanduni Umayangi"
            articleLink="/articles/article8"
          />
          <Card
            imageSrc={article9}
            title="Analyzing the Impact of Climate Change on Sri Lanka's Agriculture"
            description="Sri Lanka, a vibrant tropical island in South Asia, has always depended on agriculture as the backbone of its economy. Agriculture has not only sustained the livelihoods of its people but also shaped the culture and identity of the nation for generations. From tea plantations to paddy fields..."
            author="Namasha Wijesinghe"
            articleLink="/articles/article9"
          />
        </div>
      </div>
    </div>
  );
}
