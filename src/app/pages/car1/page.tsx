"use client";

import SwiperComponent from "@/app/components/SwiperComponent";
import Link from "next/link";
import { FaPlayCircle, FaDownload } from "react-icons/fa";

export default function IndividualCar() {
  const images = [
    { src: "/images/fotos_camioneta/camioneta_1.jpg", alt: "Autos" },
    { src: "/images/fotos_camioneta/camioneta_2.jpg", alt: "Autos" },
    { src: "/images/fotos_camioneta/camioneta_3.jpg", alt: "Autos" },
    { src: "/images/fotos_camioneta/camioneta_4.jpg", alt: "Autos" },
    { src: "/images/fotos_camioneta/camioneta_5.jpg", alt: "Autos" },
    { src: "/images/fotos_camioneta/camioneta_6.jpg", alt: "Autos" },
    { src: "/images/fotos_camioneta/camioneta_7.jpg", alt: "Autos" },
  ];

  const scrollToVideo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const videoSection = document.querySelector("#video");
    videoSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      {/* Slider de imágenes */}
      <div className="w-full">
        <SwiperComponent
          images={images}
          spaceBetween={30}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        />
        <div className="mt-4">
          <Link
            className="bg-orange-600 text-white p-3 rounded hover:bg-orange-400 flex items-center justify-center cursor-pointer"
            href={"#"}
            onClick={scrollToVideo}
          >
            <FaPlayCircle className="mr-2" />
            CONOCE ESTE AUTO
          </Link>
        </div>
      </div>

      {/* Información del vehículo */}
      <div className="w-full space-y-4 md:h-full md:flex md:flex-col md:justify-between">
        <h2 className="text-2xl font-bold text-center">
          <span className="text-red-400 uppercase">Kia </span>CERATO
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4">
            <p className="text-sm">Año</p>
            <p className="font-bold text-base">2021</p>
          </div>
          <div className="p-4">
            <p className="text-sm">Tracción</p>
            <p className="font-bold text-base">4x4</p>
          </div>
          <div className="p-4">
            <p className="text-sm">Km</p>
            <p className="font-bold text-base">25,000 km</p>
          </div>
          <div className="p-4">
            <p className="text-sm">Combustible</p>
            <p className="font-bold text-base">Gasolina</p>
          </div>
          <div className="p-4">
            <p className="text-sm">Cilindrada</p>
            <p className="font-bold text-base">Gasolina</p>
          </div>
          <div className="p-4">
            <p className="text-sm">Transmisión</p>
            <p className="font-bold text-base">Automática</p>
          </div>
        </div>

        <Link
          href="/cav.pdf"
          target="_blank"
          className="flex justify-center items-center bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-400 transition duration-200"
        >
          <FaDownload className="mr-2" />
          CAV
        </Link>

        <div className="text-4xl font-bold text-red-600 text-center">
          $25,000
        </div>
      </div>

      {/* Video del vehículo */}
      <div id="video" className="col-span-1 md:col-span-2">
        <iframe
          className="w-full h-[30rem]"
          src="https://www.youtube.com/embed/JhA9-JYLFyo"
          title="Introducing Upgraded Model 3 | Tesla"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
