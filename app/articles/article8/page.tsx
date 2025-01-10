import backgroundImage from "../../public/images/article-bg.jpg";

export default function Article8() {
  return (
    <div 
      className="pt-20 relative"
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
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-8">
      {/* Title and Author */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-black">
      Assessing the Relationship Between Extreme Weather Events and Economic Losses in Sri Lanka        </h1>
        <p className="text-center italic mb-8 text-black text-sm sm:text-base">
        By Sanduni Umayangi</p>

        {/* Article Content */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed mx-auto max-w-4xl text-justify">
        <p>
        Sri Lanka, an island nation in the Indian Ocean, is highly vulnerable to extreme weather events such as floods, cyclones, and droughts. The frequency and intensity of these natural disasters have been increasing in recent decades, raising concerns about their long-term economic implications. This article explores the economic costs of extreme weather events, identifying the most vulnerable regions and cities, while also examining how statistical methods like time-series analysis and cost-benefit analysis can be used to quantify financial losses and inform future risk management strategies.
          </p>
          <b>Economic Costs of Extreme Weather Events</b>
          <p>
          Extreme weather events can disrupt agriculture, infrastructure, and services, ultimately resulting in significant financial losses. Floods, for instance, often cause extensive damage to crops, infrastructure, and housing, while cyclones can lead to widespread destruction of coastal areas and loss of life. Droughts, on the other hand, severely affect water resources, agricultural production, and food security.  
          </p>

          <p>
          Sri Lanka has faced significant economic losses due to extreme weather events over the years. The 2004 Indian Ocean Tsunami was one of the most devastating, causing US$1 billion in direct losses and an estimated US$2 billion in reconstruction costs (Department of Foreign Affairs and Trade, 2014). In 2010, severe flooding in Colombo and surrounding areas led to US$10 million in damages. However, the 2016 floods were even more catastrophic, with damages escalating to US$277 million (Hewawasam V, Matsui K, 2023). More recently, in 2017, high winds, severe flooding, and landslides affected southwestern districts like Galle and Kalutara, causing approximately US$333-400 million in damages (Walsh B, Hallegatte S, 2019).</p>
          <p>
            <b>Vulnerable Regions and Cities in Sri Lanka</b>
          </p>
          <p>
          While extreme weather events affect the entire nation, some regions are particularly vulnerable.  Coastal cities, for example, are prone to cyclones and flooding, particularly in the Western and Southern provinces. Colombo, the capital city, is a major economic hub, and its coastal areas frequently face flooding due to heavy rainfall and rising sea levels. Other cities like Galle and Matara are similarly exposed to the risk of cyclones, with significant damage to infrastructure and tourism-related industries.</p>
    
          <p>
          The Northern and Eastern provinces, known as the dry zone, face recurring droughts that severely impact agriculture. Cities like Jaffna and Trincomalee have been particularly affected, with extended dry periods depleting crop yields and endangering livelihoods. These regions are crucial to Sri Lanka’s agricultural output, and droughts in these areas cause a ripple effect across the economy, including a surge in food prices and reduced export revenues.</p>
          <p>
          In contrast, the central and hill-country regions, though less affected by cyclones and droughts, are still prone to landslides, particularly during the monsoon seasons. Kandy and Nuwara Eliya, which are situated in these areas, face significant economic losses from the destruction of infrastructure, agriculture, and human lives.</p>
          <b>Quantifying the Financial Impact: Time-Series and Cost-Benefit Analysis</b>
          <p>
          Time series analysis is a useful tool in quantifying these economic costs over time, as it allows for the tracking of damages and losses across various sectors and regions. For example, it can reveal how the costs of flooding in Colombo have increased or how droughts in Jaffna are affecting agricultural output. Conversely, cost-benefit analysis provides a framework for evaluating the financial efficiency of various mitigation strategies. For instance, it can assess the cost of implementing flood defenses, improving early warning systems, or investing in drought-resistant crops.  </p>

          <p>
            <b> Food insecurity</b>
          </p>
          <p>
          Therefore, it is evident that statistical methods play a crucial role in reducing economic losses from extreme weather events. By identifying areas at risk and predicting potential threats, these methods help direct investments into flood defenses for coastal cities and other protective measures. They also improve resource allocation, ensuring that efforts to mitigate weather-related damages are both efficient and effective in minimizing long-term economic impacts. 
          </p>
         <b> Conclusion</b>
          <p>
          Extreme weather events have caused significant economic losses in Sri Lanka, and these costs will likely rise due to climate change. By using time-series and cost-benefit analysis, we can better understand the financial impact and identify the most vulnerable regions. This insight helps in creating focused strategies to reduce future losses. With smart investments in resilient infrastructure and disaster management, Sri Lanka can minimize the economic impact of extreme weather in the future.
          </p>
                   <p>
            <b> References</b>
          </p>
          <p>
          Department of Foreign Affairs and Trade. (2014). Indian Ocean tsunami. Retrieved from Australian Government, Department of Foreign Affairs and Trade: <a>https://www.dfat.gov.au/news/news/Pages/indian-ocean-tsunami#:~:text=The%20tsunami%20killed%20more%20than,Lanka's%20annual%20Gross%20Domestic%20Product.</a><br/><br/>
Hewawasam V, Matsui K. (2023). Small and Medium-Sized Entrepreneurs’ Perceptions of Flood Loss and Damage in Sri Lanka. Climate.<br/><br/>
Sajeevani Weerasekara, e. a. (2021). The impacts of climate induced disasters on the economy: Winners and losers in Sri Lanka. Science direct.<br/><br/>
Walsh B, Hallegatte S. (2019). Socioeconomic Resilience in Sri Lanka: Natural Disaster Poverty and Wellbeing Impact Assessment. World Bank Group. Retrieved from<a> https://documents1.worldbank.org/curated/en/173611568643337991/pdf/Socioeconomic-Resilience-in-Sri-Lanka-Natural-Disaster-Poverty-and-Wellbeing-Impact-Assessment.pdf</a><br/><br/>


          </p>
          
        </div>
      </div>
    </div>
    </div>
  );
}