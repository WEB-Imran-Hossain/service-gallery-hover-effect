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
    imageUrl: "https://i.ibb.co/yYs9jnB/sander-weeteling-KABfju-SOx74-unsplash.jpg",
  },
  {
    title: "Service 3",
    description: "Brief description of the service.",
    imageUrl: "https://i.ibb.co/KjdSyP6/austin-distel-waw-Ef-Ydpkag-unsplash.jpg",
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
    <div className="relative m-5">
      <h2 className="text-3xl font-bold text-center m-5">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <div
          className="fixed inset-0 z-10 transition-opacity duration-300 ease-in-out mx-5 my-14 "
          style={{
            backgroundImage: hoveredIndex !== null ? `url(${services[hoveredIndex].imageUrl})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {services.map((service, index) => (
          <div
            key={index}
            className={`relative z-20  xl:w-[470px] xl:h-[413px] -mt-5 shadow-lg  transition-opacity duration-300 ease-in-out ${hoveredIndex !== null && hoveredIndex !== index ? "opacity-0" : "opacity-100"
              }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={service.imageUrl}
              alt={service.title}
              className={`xl:w-[470px] xl:h-[413px] object-cover transition-transform  duration-300 ease-in-out ${hoveredIndex === index ? "scale-100 " : "scale-100"
                }`}
            />
            {hoveredIndex === index && (
              <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col items-center justify-center p-4 transition-opacity duration-300 ease-in-out">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2">{service.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGallery;
