import backgroundImage from "../../public/images/article-bg.jpg";

export default function page() {
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
            Introduction
          </h1>

          {/* Article Content */}
          <div className="space-y-6 text-base sm:text-lg leading-relaxed mx-auto max-w-4xl text-justify">
            <p>
            Solid waste management is a growing global challenge, with the increasing volume and
complexity of waste posing significant risks to ecosystems and human health. An estimated 11.2
billion tonnes of solid waste is collected worldwide annually, with poor management contributing
to air pollution, water contamination, and greenhouse gas emissions, particularly methane and
carbon dioxide. In developing countries, inefficient collection and disposal methods further
exacerbate environmental and health concerns (UN enviroment Program, n.d.).
          </p>
          <p>
          Sri Lanka generates approximately 7,000 metric tonnes of solid waste daily, with the Western
Province accounting for nearly 60% of total waste production. Each individual produces an
average of 0.4 to 1 kg of waste per day, yet only 50% of the waste is collected, according to the
Waste Management Authority and the Central Environmental Authority. Over the last two decades,
the Sri Lankan government has attempted various waste management strategies, including sanitary
landfills and waste-to-energy projects. However, the lack of a unified and coherent strategy has
led to inconsistent policies and inefficient waste collection systems, resulting in severe
environmental degradation and public health crises. Tragic incidents, such as the 2017
Meethotamulla garbage dump collapse, which killed 30 people and destroyed over 100 homes,
highlight the urgency of improving waste management systems (EFL Admin, 2018). One of the
most pressing issues in waste management is the inefficiency in waste collection and
transportation. In Sri Lanka, waste collection relies primarily on door-to-door collection,
communal storage bins, kerbside collection, and block collection systems (Basnayake &
Visvanathan, 2013).

          </p>
          <p>
          Moreover, seven waste management steps were identified to streamline the management and
handling of MSW in the Western Province. They are namely; the management of waste at source,
proper collection/acceptance of waste from the generating point, cleaning of streets and public
places, providing of adequate infrastructure facilities, improved system of waste transportation,
use of collected waste as a ‘‘resource’’ and the providing of proper final disposal facilities
(Basnayake & Visvanathan, 2013). The collection, disposal, and recycling of solid waste pose significant challenges in many nations, particularly in developing countries. In Sri Lanka,
especially in Colombo, ineffective waste management has led to unclean and unhealthy urban
environments. The Colombo Municipal Council bears the primary responsibility for maintaining
the city's cleanliness (J, 1987).
          </p>
          <p>
          However, logistical challenges, lack of infrastructure, and ineffective transportation routes
contribute to inefficient waste disposal, leading to increased operational costs and environmental
damage. In many developing countries, unplanned waste collection routes result in excess fuel
consumption, traffic congestion, and higher CO₂ emissions. Thus, integrating route optimization
into waste collection processes is crucial for achieving a more sustainable and environmentally
friendly waste management system
          </p>
          <p>
          Route optimization involves applying mathematical modelling techniques such as Vehicle Routing
Problem (VRP) algorithms, Dijkstra’s Algorithm, and Mixed-Integer Linear Programming (MILP)
to identify the most efficient waste collection routes. By utilizing graph theory and shortest path
algorithms, these models minimize travel distances, reduce fuel consumption, and optimize fleet
capacity. Additionally, metaheuristic approaches like Genetic Algorithms (GA) and Ant Colony
Optimization (ACO) help solve large-scale, complex waste collection problems while balancing
cost-effectiveness and sustainability 
          </p>
          <p>
          Study focuses on optimizing waste collection and transportation routes in Kuppiyawatta East,
through statistical analysis and mathematical modelling. Kuppiyawatta East, located in the
Thimbirigasyaya Divisional Secretariat of Colombo District, is a densely populated urban area
surrounded by Maligawatta East, Maligawatta West, Maligakanda, Borella North, Wanathamulla,
and Kuppiyawatta West. It houses key institutions such as St. John's College, Nalanda College,
and Ananda College (Kuppiyawatta East Grama Niladhari Division, n.d.) and faces significant
waste management challenges due to its high population density and urban congestion (Wikipedia
Contributors, 2024)
          </p>
          <p>
          This study aligns with Sustainable Development Goal (SDG) 13: Climate Action, In the context
of SDG 13 and combating climate change, the term defined in the United Nations Framework
Convention on Climate Change (UNFCCC) (1992), as the ‘change of climate which is attributed
directly or indirectly to human activity that alters the composition of the global atmosphere and which is in addition to natural climate Key Terms SDG 13: Take urgent action to combat climate
change and its impact(A LEGAL GUIDE, n.d.).
          </p>
          <p>
          Waste management and climate action are deeply interconnected, playing a crucial role in
achieving SDG 13, Target 13.5, which emphasizes promoting mechanisms for raising capacity for
effective climate change related planning and management. Optimizing waste collection routes
through mathematical modelling enhances efficiency, reduces fuel consumption, and lowers CO₂
and methane emissions. Strengthening waste management systems with data-driven strategies
supports climate resilience, minimizes environmental impact, and contributes to a sustainable
future
          </p>
        
        </div>
      </div>
    </div>
    </div>
  );
}
