import backgroundImage from "../../public/images/article-bg.jpg";

export default function Article6() {
  return (
    <div 
      className="pt-20"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
      {/* Translucent Overlay with Fade */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(to bottom, rgba(0, 51, 0, 0.6), rgba(0, 51, 0, 0))`,
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
    

      {/* Article Content */}
      <div className="px-8 md:px-20 lg:px-32 py-8">
        {/* Title and Author */}
        <h1 className="text-4xl font-bold text-center mb-4">
            Internship Diaries: A Sri lanka’s internship experiance on environmental practice in Norway
        </h1>
        <p className="text-center italic mb-8">By Banuka Nimsith Wickramasinghe</p>

        {/* Article Content */}
        <div className="space-y-6 text-lg leading-relaxed mx-80 text-justify">
          <p>
                    During my internship at NORCAP, I had the unique opportunity to work on
            a variety of environmental projects and gain insights into Norway’s
            advanced environmental strategies. From making country briefs and
            organizing materials for international workshops to exploring the energy
            landscape in Mauritania, I immersed myself in the real-world applications
            of sustainable practices. What struck me most was the contrast between
            Norway’s highly developed environmental framework and the challenges
            faced in my homecountry, Sri Lanka.
          </p>
          <p>
            <b>Norway’s Environmental Practices:</b>
          </p>
          <p>
                    Norway stands out as a global leader in renewable energy, particularly in
            wind and hydropower. Their commitment to reducing carbon emissions
            and promoting sustainable energy solutions is evident not only in policy
            but in everyday practice. One of the standout moments during my
            internship was witnessing how Norway’s energy strategy, backed by strong
            governance and public-private collaboration, translates into real-world
            results. For example, their use of renewable energy in remote areas
            reduces reliance on fossil fuels, a stark contrast to Sri Lanka, where energy
            access remains uneven, particularly in coastal areas affected by climate
            displacement.
          </p>
          <p>
            <b>Sri Lanka’s Environmental Challenges:</b>
          </p>
          <p>
                    In Sri Lanka, environmental degradation is exacerbated by climate change
            and economic challenges. Coastal communities, in particular, suffer from
            rising sea levels and extreme weather events. While efforts have been
            made to introduce renewable energy solutions, such as solar microgrids
            and bioenergy systems, scaling these initiatives remains difficult due to
            economic limitations and inconsistent policy support. Assessing
            Renewable Energy’s Role in Enhancing Climate Resilience: As part of my
            internship project, I am focusing on assessing how renewable energy
            solutions, such as solar microgrids, wind turbines, and bioenergy systems,
            can enhance the resilience of Sri Lankan coastal communities displaced byclimate change. This research explores the effectiveness of these
            technologies in reducing environmental degradation, improving energy
            security, and supporting sustainable development in vulnerable regions.
            By analyzing both socio-economic and environmental impacts, my study
            aims to offer insights into how renewable energy interventions can
            strengthen the climate resilience of communities struggling with frequent
            displacement.
          </p>
          <p>
            <b>Lessons Learned and Skills Gained:</b>
          </p>
          <p>
                    Throughout my internship, I learned the importance of efficient project
            management, attention to detail, and collaborative efforts in tackling
            complex environmental issues. Working on tasks like creating reports for
            missions in Mauritania or organizing badges for international workshops
            gave me hands-on experience in balancing global perspectives with local
            realities. The emphasis on data-driven decision-making in Norway
            hasinspired meto advocatefor stronger environmental policies in Sri Lanka,
            grounded in both local needs and global standards.
          </p>
          <p>
            <b>Future Aspirations and Call to Action:</b>
          </p>
          <p>
                    Looking ahead, I aspire to bridge the gap between policy and practice in
            Sri Lanka, promoting renewable energy as a key solution to the
            environmental challenges faced by coastal communities. The lessons I’ve
            learned in Norway have reinforced my belief that sustainable development
            is not only possible but essential. I urge readers to engage in eco-friendly
            practices and advocate for stronger climate policies in their communities.
            Together, we can drive meaningful change towards a more resilient and
            sustainable future
          </p>
        
        </div>
      </div>
    </div>
    </div>
  );
}