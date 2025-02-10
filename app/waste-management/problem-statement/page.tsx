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
            Problem Statement
          </h1>


          {/* Article Content */}
          <div className="space-y-6 text-base sm:text-lg leading-relaxed mx-auto max-w-4xl text-justify">
            <p>
            Colombo, Sri Lanka&rsquo;s capital, is grappling with severe challenges in Municipal Solid Waste
Management (MSWM) due to rapid urbanization and population growth. The city generates
approximately 800 metric tons (MT) of solid waste daily, of which only about 450-500 MT of
degradable waste and 150-200 MT of non-degradable waste are collected, resulting in a collection
coverage of approximately 87.5%. The primary disposal methods include open dumping and
composting, which are increasingly inadequate for the city&rsquo;s growing waste output. A significant
portion of MSWM costs in Colombo is allocated to waste collection and transportation rather than
disposal and treatment. The current practice involves transporting all waste from households to
disposal stations along predetermined routes. This process is not only labour-intensive but also
incurs high fuel and maintenance costs, contributing to inefficiencies and environmental
degradation.

          </p>
          <p>
          The core issue lies in the lack of an optimized vehicle routing system for waste collection and
transportation. Inefficient routing results in increased operational costs, higher emissions, and
extended collection times, further exacerbating the challenges faced by municipal authorities.
Improving the routing system could minimize the total distance traveled, reduce costs, and enhance
the overall efficiency of the waste collection process. Furthermore, the problem is compounded by
the absence of adequate infrastructure for waste processing and disposal, alongside public
resistance to proper waste management practices. Optimizing vehicle routing is crucial for addressing these challenges and achieving a more sustainable and cost-effective waste
management system in Colombo.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8">Research Objectives</h2>
          <ol className="list-decimal ml-6">
            <li>To examine the waste collection routes currently used in Kuppiyawatha East and assess
inefficiencies in terms of travel distance and operational constraints due to the absence of
structured optimization.</li>
            <li>To develop an optimized waste transportation model using Dijkstra’s Algorithm,
minimizing the total distance traveled while ensuring all waste collection points in
Kuppiyawatha East are covered efficiently.
</li>
            <li>To evaluate the improvements in travel distance and route efficiency achieved through the
optimized model compared to an unoptimized approach.
</li>
            <li>To fulfil the SDG 13 (climate action) target 13.5 - promote mechanisms to raise capacity
            for planning and management.</li>
          </ol>
        
        </div>
      </div>
    </div>
    </div>
  );
}
