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
          . Literature Review
          </h1>


          {/* Article Content */}
          <div className="space-y-6 text-base sm:text-lg leading-relaxed mx-auto max-w-4xl text-justify">
            <p>
            Efficient management of solid waste remains a big challenge in most urban areas, especially in the
Colombo area. Different studies have been done by several researchers over the years to find ways
of improving waste collection systems. Route optimization has become one of the key focus areas,
which could help in improving efficiency, reducing operational costs, and decreasing
environmental and climatic impacts. This review will help us to identify the local and global
findings on route optimization techniques in solid waste management, focusing on different
approaches used to handle the challenges faced.
</p>
          <p>
          A study conducted in the Ratmalana area aimed at optimizing the MSW collection and
transportation process to address the high operational costs. In this regard, the application of linear
programming techniques has helped minimize the total distance of transportation along with fuel
consumption and emission. Based on the secondary data pertaining to September 2020, the
study revealed that optimization would reduce the daily travel distance by 31.23
km and thus would be cost-effective (R & MDN, 2022).
          </p>
          <p>
          A study focused on Gampaha, the second most densely populated district in Sri Lanka, modified
the maximum flow amount technique to optimize municipal solid waste (MSW) collection via the
shortest path model. With the use of GIS tools and Google Maps, the researchers determined the
optimum route, which reduced the daily travel distance to 858 km, representing more than a 10%
enhancement; furthermore, the vehicle requirement was reduced from 10 to 8, further reducing the
distance by 14.2% and vehicle allocation by 20%. These optimizations have created room for
considerable cost savings, especially in fuel consumption, establishing the foreplay of
mathematical modelling in waste management (Hakmanage & D.D.M. Jayasundara, 2018).
          </p>
          <p>
          Another case study on the optimization of MSW collection by routed tractors and assigning road
segments in Kurunegala involved a developed methodology. By making use of the Capacitated
Arc Routing Problem and Solver Studio through the use of Binary Integer Programming, the
researchers successfully reduced trips made by 19% every week and reduced traveled distance by
up to 36%. The studies have shown that data-driven optimizations significantly enhance urban
waste management system efficiency and contribute toward a reduction in operation costs,
consumption of fuel, and carbon footprint (R. D. S. S. Rambandara et al., 2022).

          </p>
          <p>
          The study, in Kampala, Uganda, found that by applying GIS tools in route optimization during
waste collection, the travel distances and the number of trips were minimized, increasing cost
savings. It further optimized the vehicle fleet capacity for efficient operation with reduced
emissions and fuel consumption. Using the GIS tools, a new landfill was derived as the existing
site neared its capacity. Travel distances are reduced, hence reducing costs and leaving the
environment cleaner. Such an approach can be a great insight into effective waste management in
cities like Colombo in Sri Lanka (Kinobe et al., 2015). These studies highlight the importance of
route optimization in improving waste management efficiency. By applying these insights, we can
develop adaptable strategies to enhance Colombo’s waste collection system.
          </p>
        
        
        </div>
      </div>
    </div>
    </div>
  );
}
