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
          Conclusion
          </h1>

          {/* Article Content */}
          <div className="space-y-6 text-base sm:text-lg leading-relaxed mx-auto max-w-4xl text-justify">
            <p>
            This study successfully applied Dijkstra’s Algorithm to optimize waste collection routes in
Kuppiyawatha East, Colombo District, Sri Lanka, demonstrating its effectiveness in minimizing
travel distances and improving operational efficiency. The algorithm computed an optimized path
covering all collection points with a total travel distance of 3,450 meters, following the sequence
of nodes representing waste collection points: [1, 17, 10, 4, 9, 8, 20, 6, 12, 15, 2, 19, 13, 18, 21, 14, 7, 11, 5, 16, 3, 22]. This optimized route significantly reduced unnecessary detours compared
to unstructured routing methods. The results confirm that route optimization can enhance waste
collection processes by lowering fuel consumption, reducing operational costs, and streamlining
municipal waste transportation. Despite the success of the optimized model, certain limitations
were identified. The study lacked real depot route data, preventing direct comparison with existing
municipal collection practices. Additionally, the model was based solely on distance minimization,
without incorporating factors such as vehicle capacity constraints, real-time traffic conditions, or
operational costs. Addressing these limitations in future research by integrating cost-based route
optimization, real-time waste tracking, and adaptive routing algorithms would further enhance the
model’s practical applicability. Nevertheless, this research provides a strong foundation for waste
transportation optimization in Sri Lanka, demonstrating how graph-based algorithms can improve
municipal waste collection systems. The findings emphasize the need for data-driven approaches
in urban waste management, offering a roadmap for developing smarter, more efficient, and
environmentally sustainable waste collection strategies in the country.
          </p>
        
        </div>
      </div>
    </div>
    </div>
  );
}
