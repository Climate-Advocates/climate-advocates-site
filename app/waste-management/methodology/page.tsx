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
          Methodology
          </h1>

          


          {/* Article Content */}
          <div className="space-y-6 text-base sm:text-lg leading-relaxed mx-auto max-w-4xl text-justify">
          <h2 className="text-2xl font-bold text-white mt-8">Data Collection</h2>
            <p>
            Secondary data was collected from the Colombo Municipal Council website
(https://www.colombo.mc.gov.lk/garbage-collection.php ) for District 3 Kuppiyawatte - East,
providing detailed information on road paths. Distances between selected roads were
measured using these road paths, which were considered as nodes for the analysis. For
reference, Node 1 is designated as the starting point, and Node 22 represents the landfill
location. Google Maps was also used to verify and supplement distance data.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Dijkstra's Algorithm for Route Optimization</h2>
          <p>
          Dijkstra's Algorithm is a well-established computational technique used to determine the shortest
path between nodes in a weighted graph. Originally developed by Edsger W. Dijkstra in 1956, this
algorithm has found extensive applications in route optimization due to its efficiency and
adaptability. In graph-based systems, nodes represent specific locations, and edges represent the
connections between them, weighted by parameters such as distance, time, or cost (Dijkstra, 1959).
In this study, the algorithm is applied to optimize waste collection routes by determining the most
efficient paths from waste generation points to landfill sites.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8">The steps of Dijkstra's Algorithm are as follows:</h2>
          <ol className="list-decimal ml-6">
            <li>Node Selection: Identify the unvisited node with the smallest tentative distance and mark
            it as the current node.</li>
            <li>Distance Calculation: For each neighbour of the current node, calculate the tentative
distance through the current node. Update this distance if it is smaller than the previously
recorded value.
</li>
            <li>Mark as Visited: Mark the current node as visited, ensuring it will not be revisited.
Repeat Until Completion: Repeat the process until the shortest path to the destination node
is finalized or all nodes have been visited.
</li>
            <li>Path Reconstruction: Backtrack from the destination node to the source node to
            reconstruct the optimal route (Santoso et al., 2024).</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mt-8">Implementation of Dijkstra’s Algorithm Using Python</h2>
          <p>
          Python was utilized to implement Dijkstra’s Algorithm for optimizing waste transportation routes
due to its efficient computational capabilities and extensive library support. The implementation
involved constructing a graph representation of collection points and road distances using the
NetworkX library. The algorithm was executed using a priority queue (heap), ensuring that the
shortest path was computed efficiently while dynamically updating distances. Additionally,
Matplotlib was used to visualize the graph at each iteration, allowing for a step-by-step analysis
of the path optimization process. This approach enabled the identification of an optimal route that
minimizes travel distance while covering all required collection points, demonstrating Python’s
effectiveness in solving complex route optimization problems in waste management logistics
          </p>
        
        </div>
      </div>
    </div>
    </div>
  );
}
