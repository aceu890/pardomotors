'use client'
import "./globals.css";
import SwiperComponent from "./components/SwiperComponent";
import CarGallery from "./components/CarGallery";
import WatchVideo from "./components/WatchVideo";
import WspSection from "./components/WspSection";
import WspFlotante from "./components/WspFlotante";
import ViewAllButton from "./components/ViewAllButton";

export default function Home() {
  // Importación de imágenes
  const images = [
    { src: "/images/autos.png", alt: "Autos" },
    { src: "/images/pickups.png", alt: "Pickups" },
    { src: "/images/camiones.png", alt: "Camiones" },
    { src: "/images/vans.png", alt: "Vans" },
    { src: "/images/motos.png", alt: "Motos" },
  ];

  return (
    <main className="overflow-x-hidden bg-gray-100">
      <h1 className="text-3xl md:text-4xl font-bold text-center my-8">
        Elige <span className="text-orange-500">tu vehículo</span>
      </h1>

      <div className="w-full flex justify-center items-center">
        <SwiperComponent
          images={images}
          spaceBetween={15}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-center my-5">
        Más <span className="text-orange-500">vistos</span>
      </h1>

      <WspFlotante />

      <div>
        <CarGallery />
        <ViewAllButton buttonText="Ver Todo" linkUrl="/pages/catalogo" />
      </div>

      <div>
        <WatchVideo />
      </div>

      <div>
        <WspSection />
      </div>
    </main>
  );
}
