import { useState, useRef } from "react";

function Trending() {

    const scrollContainerRef = useRef(null);
    const [visible, setVisible] = useState(false);



    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    };

    return (
      <div className="container mx-auto px-4">
        <div> 
          <h1 className="text-white text-2xl font-medium text-left mt-10">Trending Now</h1> 
        </div>
        <div className="relative">
            <button onClick={scrollLeft} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-2xl px-2 py-1 rounded-md h-40 z-10">{"<"}</button>
            <div>
            <ul ref = {scrollContainerRef} className="flex flex-row overflow-x-auto mt-5 pb-5 gap-9 scroll-smooth scrollbar-hide w-full">
            <li className = "relative flex-shrink-0 hover:scale-105 transition-transform duration-300 p-4">
              <button className="relative w-52 h-72 rounded-lg bg-cover bg-center overflow-visible" style={{ backgroundImage: "url('/t1.jpg')" }}>
                      <img src="/1.png" alt="Trending 1" className=" absolute bottom-0 left-0 transform -translate-x-1/2 -translate-y-1 w-32 h-auto rounded-lg border-white-200" />
              </button>
            </li>
            <li className = "relative flex-shrink-0 hover:scale-105 transition-transform duration-300 p-4">
              <button className="relative w-52 h-72 rounded-lg bg-cover bg-center overflow-visible" style={{ backgroundImage: "url('/t2.jpg')" }}>
                      <img src="/2.png" alt="Trending 2" className=" absolute bottom-0 left-0 transform -translate-x-1/2 -translate-y-1 w-32 h-auto rounded-lg border-white-200" />
              </button>
            </li>
            <li className = "relative flex-shrink-0 hover:scale-105 transition-transform duration-300 p-4">
              <button className="relative w-52 h-72 rounded-lg bg-cover bg-center overflow-visible" style={{ backgroundImage: "url('/t3.jpg')" }}>
                      <img src="/3.png" alt="Trending 3" className=" absolute bottom-0 left-0 transform -translate-x-1/2 -translate-y-1 w-32 h-auto rounded-lg border-white-200" />
              </button>
            </li>
            <li className = "relative flex-shrink-0 hover:scale-105 transition-transform duration-300 p-4">
              <button className="relative w-52 h-72 rounded-lg bg-cover bg-center overflow-visible" style={{ backgroundImage: "url('/t4.jpg')" }}>
                      <img src="/4.png" alt="Trending 4" className=" absolute bottom-0 left-0 transform -translate-x-1/2 -translate-y-1 w-32 h-auto rounded-lg border-white-200" />
              </button>
            </li>
            <li className = "relative flex-shrink-0 hover:scale-105 transition-transform duration-300 p-4">
              <button className="relative w-52 h-72 rounded-lg bg-cover bg-center overflow-visible" style={{ backgroundImage: "url('/t5.jpg')" }}>
                      <img src="/5.png" alt="Trending 5" className=" absolute bottom-0 left-0 transform -translate-x-1/2 -translate-y-1 w-32 h-auto rounded-lg border-white-200" />
              </button>
            </li>
            <li className = "relative flex-shrink-0 hover:scale-105 transition-transform duration-300 p-4">
              <button className="relative w-52 h-72 rounded-lg bg-cover bg-center overflow-visible" style={{ backgroundImage: "url('/t6.jpg')" }}>
                      <img src="/6.png" alt="Trending 6" className=" absolute bottom-0 left-0 transform -translate-x-1/2 -translate-y-1 w-32 h-auto rounded-lg border-white-200" />
              </button>
            </li>
            <li className = "relative flex-shrink-0 hover:scale-105 transition-transform duration-300 p-4">
              <button className="relative w-52 h-72 rounded-lg bg-cover bg-center overflow-visible" style={{ backgroundImage: "url('/t7.jpg')" }}>
                      <img src="/7.png" alt="Trending 7" className=" absolute bottom-0 left-0 transform -translate-x-1/2 -translate-y-1 w-32 h-auto rounded-lg border-white-200" />
              </button>
            </li>
            <li className = "relative flex-shrink-0 hover:scale-105 transition-transform duration-300 p-4">
              <button className="relative w-52 h-72 rounded-lg bg-cover bg-center overflow-visible" style={{ backgroundImage: "url('/t8.jpg')" }}>
                      <img src="/8.png" alt="Trending 8" className=" absolute bottom-0 left-0 transform -translate-x-1/2 -translate-y-1 w-32 h-auto rounded-lg border-white-200" />
              </button>
            </li>
            <li className = "relative flex-shrink-0 hover:scale-105 transition-transform duration-300 p-4">
              <button className="relative w-52 h-72 rounded-lg bg-cover bg-center overflow-visible" style={{ backgroundImage: "url('/t9.jpg')" }}>
                      <img src="/9.png" alt="Trending 9" className=" absolute bottom-0 left-0 transform -translate-x-1/2 -translate-y-1 w-32 h-auto rounded-lg border-white-200" />
              </button>
            </li>
            <li className = "relative flex-shrink-0 hover:scale-105 transition-transform duration-300 p-4">
              <button className="relative w-52 h-72 rounded-lg bg-cover bg-center overflow-visible" style={{ backgroundImage: "url('/t10.jpg')" }}>
                      <img src="/10.png" alt="Trending 10" className=" absolute bottom-0 left-0 transform -translate-x-1/2 -translate-y-1 w-32 h-auto rounded-lg border-white-200" />
              </button>
            </li>
            </ul>
            </div>
            {/* Right Arrow */}
            <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-2xl px-2 py-1 rounded-md h-40"
            onClick={scrollRight}
            >
            {">"}
            </button>
        </div>
      </div>   
    );
  }
  
  export default Trending;
  