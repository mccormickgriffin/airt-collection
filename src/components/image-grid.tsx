"use client"

import { useState } from "react";

interface ImageGridProps {
  images: { src: string; alt: string }[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
    return (
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden transition-opacity duration-500 transform ${
              hoveredIndex !== null && hoveredIndex !== index
                ? "opacity-80"
                : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full transisition-scale duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default ImageGrid;