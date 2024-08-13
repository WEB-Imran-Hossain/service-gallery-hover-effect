import React, { useState } from "react";

const services = [
  {
    title: "Service 1",
    description: "Brief description of the service.",
    imageUrl: "https://i.ibb.co/KjdSyP6/austin-distel-waw-Ef-Ydpkag-unsplash.jpg",
  },
  {
    title: "Service 2",
    description: "Brief description of the service.",
    imageUrl: "https://i.ibb.co/fSM3sdK/boliviainteligente-jk-nk-EXo4a-Y-unsplash.jpg",
  },
  {
    title: "Service 3",
    description: "Brief description of the service.",
    imageUrl: "https://i.ibb.co/brBWPXM/brigitta-schneiter-Bb-Dv-V879ar-U-unsplash.jpg",
  },
  {
    title: "Service 4",
    description: "Brief description of the service.",
    imageUrl: "https://i.ibb.co/7rB4ZX7/christopher-burns-8-Kf-CR12oe-UM-unsplash.jpg",
  },
  {
    title: "Service 5",
    description: "Brief description of the service.",
    imageUrl: "https://i.ibb.co/RQhgCkb/daniel-josef-AMss-Sj-Ua-TY4-unsplash.jpg",
  },
  {
    title: "Service 6",
    description: "Brief description of the service.",
    imageUrl: "https://i.ibb.co/PctbcHq/milad-fakurian-w-Ns-HBf-b-TBo-unsplash.jpg",
  },
  {
    title: "Service 7",
    description: "Brief description of the service.",
    imageUrl: "https://i.ibb.co/0XsszXQ/rob-lambert-9-Q-p-LLP-jm-A-unsplash.jpg",
  },
  {
    title: "Service 8",
    description: "Brief description of the service.",
    imageUrl: "https://i.ibb.co/yYs9jnB/sander-weeteling-KABfju-SOx74-unsplash.jpg",
  },
  // Add more services as needed
];

const ServiceGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative flex flex-wrap justify-center mb-10">
      {/* Background image div is always present */}
      <div
        className="fixed inset-0 z-10 bg-black bg-opacity-70 transition-opacity duration-300 ease-in-out"
        style={{
          backgroundImage: hoveredIndex !== null ? `url(${services[hoveredIndex].imageUrl})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {services.map((service, index) => (
        <div
          key={index}
          className={`relative z-20 w-80 h-80 overflow-hidden shadow-lg transition-transform duration-300 ease-in-out ${
            hoveredIndex !== null && hoveredIndex !== index ? "opacity-0" : "opacity-100"
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={service.imageUrl}
            alt={service.title}
            className={`w-full h-full object-cover transition-transform duration-300 ease-in-out ${
              hoveredIndex === index ? "scale-150 z-10" : "scale-100"
            }`}
          />
          {hoveredIndex === index && (
            <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col items-center justify-center p-4 opacity-100 transition-opacity duration-300 ease-in-out">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2">{service.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServiceGallery;
