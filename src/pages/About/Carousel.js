import { useState, useEffect } from "react";
import one   from "../../public/images/image1.jpg";
import two   from "../../public/images/image3.jpg";
import three from "../../public/images/image2.jpg";
import four  from "../../public/images/image4.jpg";
import seven from "../../public/images/image7.jpg";

const images = [
  { src: seven, alt: "Photo 1" },
  { src: one,   alt: "Photo 2" },
  { src: two,   alt: "Photo 3" },
  { src: three, alt: "Photo 4" },
  { src: four,  alt: "Photo 5" },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-900">
        {/* Image */}
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="w-full h-72 object-cover transition-opacity duration-300"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

        {/* Prev button */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-blue-600
                     flex items-center justify-center text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-blue-600
                     flex items-center justify-center text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Next image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-200 focus:outline-none ${
                i === current ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
