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
          Key Limitations and Future Research
          </h1>


          {/* Article Content */}
          <div className="space-y-6 text-base sm:text-lg leading-relaxed mx-auto max-w-4xl text-justify">
          <h2 className="text-2xl font-bold text-white mt-8">Limitations</h2>
          <ol className="list-decimal ml-6">
            <li>Lack of waste volume data: The research only had accumulated waste data for the entire
district rather than individual collection points. This prevented the model from considering
vehicle capacity constraints and load balancing.
</li>
            <li>Absence of operational cost data: The optimization was based purely on distance
minimization, without factoring in fuel costs, labour expenses, or vehicle maintenance,
limiting the model’s real-world applicability.
</li>
            <li>No data on actual depot routes: The existing waste collection routes used by the depot in
Kuppiyawatha East were unavailable, making it impossible to compare the optimized path
with real-world practices.
</li>
            <li>Undirected graph assumption: The waste collection network was modeled as bidirectional,
whereas real-world roads may have one-way restrictions, traffic conditions, and limited
access zones that affect route optimization</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mt-8">Future Research
          </h2>
          <ol className="list-decimal ml-6">
            <li>Incorporating Waste Volume Data: Collecting real-time waste level data for each collection
point would allow for dynamic vehicle load balancing, reducing unnecessary trips. This
approach has been explored in studies utilizing ultrasonic sensors and IoT-based systems
to monitor waste levels, enabling optimized collection routes (Long et al., 2019).
</li>
            <li>Cost Optimization: Future models should consider fuel consumption, labor costs, and
maintenance expenses, using multi-objective optimization techniques to balance cost and
distance efficiency. Research has demonstrated the effectiveness of integrating cost factors
into route optimization for waste collection (Kumar et al., 2022).
</li>
            <li> Comparison with Real Depot Routes: By obtaining actual waste collection routes, future
research can benchmark the optimized path against current operations to measure potential
savings in time, distance, and cost. This comparison would provide practical insights into
the benefits of the proposed optimization models.
</li>
            <li>Directed Graph Modeling: Implementing one-way road restrictions and road conditions in
the model would improve its realism and accuracy. Considering road network constraints
is crucial for developing feasible and efficient waste collection routes (Muthuvel et al.,
2024).
</li>

<li>Dynamic Routing Algorithms: Using real-time traffic and waste generation data, future
models can implement adaptive route planning to respond to changing conditions. Studies
have shown that dynamic route optimization can significantly enhance the efficiency of
waste collection systems (Alharbi & Alshehri, 2020).
</li>
<li>Exploring Alternative Optimization Techniques: Algorithms such as A*, Genetic
Algorithms (GA), and Ant Colony Optimization (ACO) could be tested and compared
against Dijkstra’s Algorithm to find the best-performing approach for large-scale waste
collection. Research indicates that these algorithms can offer advantages in solving
complex routing problems (Karadimas et al., 2008).
</li>

          </ol>
        
        </div>
      </div>
    </div>
    </div>
  );
}
