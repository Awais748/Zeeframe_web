import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import video from "../../assets/video/homesectionvid.mp4";

const HomeVideo = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="bg-black py-16">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative overflow-hidden border border-[#1F1F1F] shadow-2xl h-[70vh] md:h-[90vh]"
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Cursor-following Button */}
        <Link
          to="/work"
          className={`absolute bg-white text-black  rounded-4xl px-6 py-3 flex items-center gap-3
                     transition-opacity duration-200 ease-out z-10 shadow-lg
                     ${isHovering ? "opacity-100" : "opacity-0"}`}
          style={{
            left: position.x,
            top: position.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="font-medium whitespace-nowrap">All Works</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10.329"
            height="10.329"
            viewBox="0 0 11 11"
            fill="none"
          >
            <path
              d="M0.870208 10.3285L0 9.45833L8.20042 1.25H0.745208V0H10.3285V9.58333H9.07854V2.12813L0.870208 10.3285Z"
              fill="#18181B"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default HomeVideo;
