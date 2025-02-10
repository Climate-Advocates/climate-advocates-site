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
          Results and Discussion
          </h1>


          {/* Article Content */}
          <div className="space-y-6 text-base sm:text-lg leading-relaxed mx-auto max-w-4xl text-justify">
            <p>
            The implementation of Dijkstra’s Algorithm for route optimization successfully determined the
shortest path covering all nodes while minimizing the total travel distance. The algorithm
processed the data iteratively, expanding the shortest path at each step and updating distances
accordingly. The final optimized route obtained was [1, 17, 10, 4, 9, 8, 20, 6, 12, 15, 2, 19, 13, 18,
21, 14, 7, 11, 5, 16, 3, 22], with a total travel distance of 3450 meters. The following section
provides a detailed discussion of the algorithm’s step-by-step execution, demonstrating how the
shortest path evolved through multiple iterations.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Algorithm Execution Process</h2>
          <p>
          The algorithm began at Node 1, which was assigned a distance of 0, while all other nodes were
initialized with a distance of infinity (inf), as their shortest paths were unknown. A priority queue
(min-heap) was used to select the next node to process, ensuring that the node with the smallest
known distance was always selected first. In the first iteration, Node 1&rsquo;s directly connected
neighbours were updated with their respective distances, marking the initial expansion of the
shortest path.
          </p>
          <p>
          As the algorithm progressed, it selected the nearest node at each step and updated the distances to
its neighbouring nodes if a shorter path was found. Node 17 was the first to be processed after
Node 1, as it had the smallest known distance of 190 meters. This led to an update in Node 20&rsquo;s
shortest distance, which was recorded as 460 meters. Following this, Node 10 was selected in the
next iteration with a distance of 240 meters, leading to further updates in the shortest known paths
to Nodes 15 and 12, both set to 680 meters. The algorithm then proceeded to Node 4 and Node 9,
each with a distance of 280 meters, refining paths to neighbouring nodes but not introducing
significant changes beyond what was already established.
          </p>
          <p>
          In the middle iterations, further refinements were made as Node 8 was selected with a distance of
350 meters, leading to updates in the shortest paths to Nodes 13 and 14, both set at 830 meters.
Similarly, Node 6, processed at 600 meters, updated Node 13&rsquo;s shortest known path to 760 meters.
At this stage, the algorithm had already determined paths for most of the nodes in the network.
The later iterations primarily focused on confirming the shortest known paths rather than
introducing major updates.

          </p>
          <p>
          At Iteration 12, Node 19 was processed with a shortest distance of 758 meters, leading to updates
in the shortest paths to Nodes 5, 16, and 22. This was a significant step because Node 22, the final
destination, was now reachable with a total distance of 3450 meters. The algorithm then continued
processing the remaining nodes, confirming distances but not making any significant refinements.
The final iteration, Iteration 22, confirmed the total shortest distance as 3450 meters, marking the
completion of the algorithm. 
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Analysis of Algorithm Performance</h2>
          <p>
          The algorithm efficiently expanded the shortest known path in a systematic manner, always
selecting the closest node first and refining paths accordingly. The priority queue (min-heap)
played a crucial role in ensuring efficiency by always processing the node with the least distance, reducing unnecessary computations. The early selection of Nodes 17, 10, and 4 significantly
shaped the final route, as they provided crucial connections to multiple nodes in the network.

          </p>
          <p>
          The total computed shortest distance of 3450 meters ensures that all nodes are covered with
minimal travel distance. This confirms that the algorithm has successfully optimized the waste
collection route while maintaining computational efficiency. The final sequence of node visits
represents an optimal traversal path based on the given distance matrix. 
          </p>
          
        </div>
      </div>
    </div>
    </div>
  );
}
