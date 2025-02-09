"use client";
import Waste from "../public/images/wasteManagement.png";
import Picture2 from "../images/Picture2.png";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation

export default function WasteManagement() {
  // Function to handle PDF download
  const handleDownload = () => {
    const filePath = "/images/Reports/Route_Optimization_for_Municipal_Solid_Waste_Collection.pdf"; // Path to your PDF file in the public folder
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "Route_Optimization_for_Municipal_Solid_Waste_Collection.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-20">
      {/* Group Photo */}
      <div className="relative w-full text-center h-[400px] md:h-[500px]">
        {/* Background Image */}
        <Image
          src={Waste}
          alt="Team Group Photo"
          layout="fill"
          objectFit="cover"
          className="w-full shadow-lg"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center">
          <h1 className="text-white text-2xl md:text-6xl font-bold text-center">
            Waste Management by <br /> Route Optimization
          </h1>
          <p className="text-center mt-10 mx-16 md:w-2/3">
            Our research on route optimization for waste management applies
            statistical and mathematical techniques from optimization and
            operations research to improve efficiency and reduce environmental
            impact. By optimizing waste collection routes, we decrease fuel
            consumption, carbon emissions, and traffic congestion. This
            initiative introduces mechanisms to support waste management while
            advancing climate action and sustainability. It aligns with global
            goals to combat climate change, promote sustainable urban
            development, and build a resilient, eco-friendly future.
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="mt-10">
        <h2 className="text-center text-3xl font-bold">Abstract</h2>
        <br />
        <p className="text-center mt-4 mx-16 bg-foreground/30 p-5 rounded-lg">
          Efficient waste collection and transportation are critical for urban
          solid waste management, yet many municipalities in Sri Lanka,
          including Colombo City, struggle with inefficient routing, increased
          operational costs, and environmental impacts. This study focuses on
          optimizing waste collection routes in Kuppiyawatha East, Colombo
          District, Sri Lanka, using Dijkstra’s Algorithm to minimize the total
          distance travelled while ensuring complete coverage of all waste
          collection points. A distance matrix was constructed based on
          real-world locations, and the algorithm iteratively processed nodes to
          determine the most efficient path. The optimized route covered all
          required nodes with a total travel distance of 3,450 meters,
          demonstrating a significant improvement over unstructured routing
          method. The findings highlight the effectiveness of mathematical
          modelling in waste transportation optimization, with implications for
          reducing fuel consumption, labour costs, and environmental emissions.
          This research provides a data-driven approach to improving waste
          collection efficiency in Colombo City, offering a foundation for
          sustainable urban waste management practices in Sri Lanka.
        </p>
      </div>

      {/* Report Section */}
      <div className="flex items-start my-10 mx-20">
        <div className="w-full">
          <section>
            {/* Container */}
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center ">
              {/* FAQs */}
              <div className="flex w-full gap-2 max-w-4xl flex-col">
                {/* FAQ BLOCK */}
				<Link href="/waste-management/introduction" passHref>
                <div className="relative w-full rounded-md  bg-foreground/50 hover:bg-foreground/40 transform translate ease-linear duration-100 px-12 py-4">
                  <div className="max-w-3xl flex justify-between items-center">
                    <h2 className="font-bold text-white text-xl">Introduction</h2>
                    <Link href="/waste-management/introduction" passHref>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6 cursor-pointer "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
				
				</Link>

                {/* FAQ BLOCK */}
				<Link href="/waste-management/problem-statement" passHref>
                <div className="relative w-full rounded-md  bg-foreground/50 hover:bg-foreground/40 transform translate ease-linear duration-100 px-12 py-4">
                  <div className="max-w-3xl flex justify-between items-center">
                    <h2 className="font-bold text-white text-xl">
                      Problem Statement
                    </h2>
                    <Link href="/waste-management/problem-statement" passHref>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6 cursor-pointer "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
				</Link>

                {/* FAQ BLOCK */}
				<Link href="/waste-management/literature-review" passHref>
                <div className="relative w-full rounded-md  bg-foreground/50 hover:bg-foreground/40 transform translate ease-linear duration-100 px-12 py-4">
                  <div className="max-w-3xl flex justify-between items-center">
                    <h2 className="font-bold text-white text-xl">
                      Literature Review
                    </h2>
                    <Link href="/waste-management/literature-review" passHref>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6 cursor-pointer "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
				</Link>

                {/* FAQ BLOCK */}
				<Link href="/waste-management/methodology" passHref>
                <div className="relative w-full rounded-md  bg-foreground/50 hover:bg-foreground/40 transform translate ease-linear duration-100 px-12 py-4">
                  <div className="max-w-3xl flex justify-between items-center">
                    <h2 className="font-bold text-white text-xl">
                      Methodology
                    </h2>
                    <Link href="/waste-management/methodology" passHref>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6 cursor-pointer "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
				</Link>

                {/* FAQ BLOCK */}
				<Link href="/waste-management/results-and-discussion" passHref>
                <div className="relative w-full rounded-md  bg-foreground/50 hover:bg-foreground/40 transform translate ease-linear duration-100 px-12 py-4">
                  <div className="max-w-3xl flex justify-between items-center">
                    <h2 className="font-bold text-white text-xl">
                      Results and Discussion
                    </h2>
                    <Link href="/waste-management/results-and-discussion" passHref>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6 cursor-pointer "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
				</Link>

                {/* FAQ BLOCK */}
				<Link href="/waste-management/limitations" passHref>
                <div className="relative w-full rounded-md  bg-foreground/50 hover:bg-foreground/40 transform translate ease-linear duration-100 px-12 py-4">
                  <div className="max-w-3xl flex justify-between items-center">
                    <h2 className="font-bold text-white text-xl">
                      Key Limitations and Future Research
                    </h2>
                    <Link href="/waste-management/limitations" passHref>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6 cursor-pointer "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
				</Link>

                {/* FAQ BLOCK */}
				<Link href="/waste-management/conclusion" passHref>
                <div className="relative w-full rounded-md  bg-foreground/50 hover:bg-foreground/40 transform translate ease-linear duration-100 px-12 py-4">
                  <div className="max-w-3xl flex justify-between items-center">
                    <h2 className="font-bold text-white text-xl">Conclusion</h2>
                    <Link href="/waste-management/conclusion" passHref>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6 cursor-pointer "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
				</Link>
              </div>
            </div>
          </section>
        </div>

        <div className="w-full md:w-1/2">
          <Image
            src={Picture2}
            alt="Waste Management Report"
            width={500}
            height={500}
            className="rounded-lg w-full"
          />
          <button
            onClick={handleDownload}
            className="bg-white text-black text-lg w-full font-semibold py-2 px-4 rounded-lg mt-4 hover:bg-gray-200 transition duration-300"
          >
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
}