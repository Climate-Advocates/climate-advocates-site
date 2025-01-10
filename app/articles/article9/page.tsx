import backgroundImage from "../../public/images/article-bg.jpg";

export default function Article9() {
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
      Role of climate change in Sri Lanka’s economic woes
        </h1>
        <p className="text-center italic mb-8 text-black text-sm sm:text-base">
        By Namasha Wijesinghe</p>

        {/* Article Content */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed mx-auto max-w-4xl text-justify">
        <p>
        Sri Lanka, a vibrant tropical island in South Asia, has always depended on agriculture as the backbone of its economy. Agriculture has not only sustained the livelihoods of its people but also shaped the culture and identity of the nation for generations. From tea plantations to paddy fields, the island’s diverse topography and tropical climate have made it an ideal location for growing a wide range of crops including rice, tea, coconut, and rubber for domestic consumption and export markets. Today, agriculture continues to play a crucial role in the country’s economy, contributing 7.4% to the GDP (Central Bank of Sri Lanka, 2024). It is the most important source of employment for the majority of the Sri Lankan workforce, with 25.8% of the employed population engaged in the agricultural sector (Department of Census and Statistics, 2024).  However, since agriculture in Sri Lanka heavily relies on the climate, changes in weather patterns and natural resources have been posing serious challenges to the sector. This article will explore how the effects of climate change are affecting crops, farming communities, and food security across the country.
          </p>

          <p>
          <b>Changes in Rainfall Patterns</b>
          </p>

          <p>
          Climate change has led to inconsistent rainfall patterns, with an increased frequency of droughts, floods, and unseasonal rains. This has disrupted the natural rhythms of planting and harvesting, particularly during periods of severe drought. For instance, Sri Lanka faced its worst drought during 2016 and 2017, with rice production dropping nearly 50%. As rice is both the country's staple food and its most vital crop, this sharp decline in yield had profound effects on the nation's food security and economy (Jayasinghe, 2023).  During such droughts, farmers often struggle with water shortages for irrigation, further reducing crop yields and leading to substantial economic losses. </p>
          <p>
          While droughts pose a significant threat, excessive rainfall and floods also play a critical role in disrupting agriculture. The floods and landslides that struck Sri Lanka in May 2016 caused widespread damage to assets and reduced agricultural, livestock, and fishery output. With total losses estimated at LKR 1,901.75 million, these disasters illustrate the devastating impact of  extreme weather events on Sri Lanka's agriculture ( Ministry of Disaster Management , 2016).Additionally, unpredictable rainfall has led to soil erosion, washing away important topsoil and draining the nutrients needed for crops, making it harder for farmers to grow food.
          </p>
          <p>
          <b>Rising Temperatures and Increased Pest and Disease Patterns</b></p>
    
          <p>
          As global temperatures continue to rise, the agricultural sector faces increasing challenges. Crops that rely on stable temperature conditions, such as rice and tea, are particularly vulnerable. Higher temperatures directly impact crop growth, shortening growing seasons and stressing crops, which can lead to reduced yields and lower-quality produce. Furthermore, rising temperatures and precipitation levels create ideal conditions for pests and fungal diseases like rice blast, which can severely damage crops. As a result, farmers are using more pesticides, increasing production costs and posing risks to the environment and human health. </p>
          <p>
          <b>Impact on Livestock and Fisheries</b>
          </p>
          <p>
          Warming ocean temperatures and rising sea levels are threatening Sri Lanka's fisheries. Changes in the climate have disrupted marine ecosystems, leading to fewer fish and forcing fishermen to travel farther for their catch. As a result, coastal communities dependent on fishing are facing challenges that impact their income and food security. </p>

          <p>
            <b> Impact on Rural Communities</b>
          </p>
          <p>
          Climate change impacts not just the environment, but also the livelihoods and well-being of rural communities. Small-scale farmers, who are the foundation of Sri Lanka's agriculture, are the most vulnerable. With lower crop yields, they face financial struggles and growing poverty. As a result, many farmers are forced to abandon their livelihoods or migrate to urban areas in search of work. 
          </p>
          <p>
           <b> Impact on Rural Communities</b>
          </p>
          <p>
          To better understand the impact of climate change on agriculture, regression analysis can be applied to historical weather data such as temperature and rainfall and agricultural production data like rice and tea. This approach allows us to quantify the relationship between changing weather patterns and crop productivity. By identifying trends and patterns, this analysis can help predict future impacts and guide decision-making for both farmers and policymakers.
          </p>

          <p>
            <b> Climate change and pandemic preparedness</b>
          </p>
          <p>
          Climate change is already making a big impact on agriculture in Sri Lanka, and its effects are hard to ignore. With shifting weather patterns, unpredictable rainfall, and rising temperatures, farmers are facing severe challenges. However, through data-driven approaches like regression analysis, there is potential to better understand these challenges, predict future trends, and support effective strategies to safeguard the future of agriculture in Sri Lanka. 
          </p>
          <p>
          
            <b> Climate change and pandemic preparedness</b>
          </p>
          
          <p>
          Ministry of Disaster Management . (2016, November). Sri Lanka Post-Disaster Needs Assessment May 2016 Floods and Landslides. Retrieved from https://www.preventionweb.net/media/77817/download?startDownload=20250109<br/><br/>
Central Bank of Sri Lanka. (2024). Retrieved from National Accounts Estimates - Quarter 3, 2024: https://www.cbsl.gov.lk/sites/default/files/cbslweb_documents/statistics/national_accounts_estimates_2024_q3_e.pdf<br/><br/>
Department of Census and Statistics. (2024). Sri Lanka Labour Force Survey Quarterly Report 1st Quarter - 2024. Retrieved from https://www.statistics.gov.lk/LabourForce/StaticalInformation/QuarterlyReports/1stQuarter2024<br/><br/>
Jayasinghe, U. (2023). Retrieved from Drought dents Sri Lanka's economic hopes, farmers' livelihood: https://www.reuters.com/world/asia-pacific/drought-dents-sri-lankas-economic-hopes-farmers-livelihood-2023-08-29/#:~:text=During%20the%20last%20El%20Nino,people%20and%20its%20biggest%20crop.<br/><br/>


          </p>
          
         
        </div>
      </div>
    </div>
    </div>
  );
}