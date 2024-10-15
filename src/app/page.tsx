import "./globals.css";
import SwiperComponent from "./components/SwiperComponent";
import CarGallery from "./components/CarGallery";
import WatchVideo from "./components/WatchVideo";
import WspSection from "./components/WspSection";
import WspFlotante from "./components/WspFlotante";

// función principal - main function
export default function Home() {
  // Datos Lógicos logical data
  // importación de imágenes - Importing images
  const images = [
    { src: "/images/autos.png", alt: "Autos" },
    { src: "/images/pickups.png", alt: "Pickups" },
    { src: "/images/camiones.png", alt: "Camiones" },
    { src: "/images/vans.png", alt: "Vans" },
    { src: "/images/motos.png", alt: "Motos" },
    // Agrega más imágenes si es necesario - Add more images if needed
  ];

  // devuelve lo que se renderiza en la interfaz de usuario - returns what is rendered in the UI
  return (
    <main className="overflow-x-hidden bg-gray-100">
      <h1 className="text-3xl md:text-4xl font-bold text-center my-8">
        Elige <span className="text-orange-500">tu vehículo</span>
      </h1>

      <div className="w-full flex justify-center items-center">
        <SwiperComponent
          images={images}
          spaceBetween={15} // Personaliza el espacio entre los slides
          navigation={true} // Habilita la navegación
          pagination={{ clickable: true }} // Habilita la paginación
          scrollbar={{ draggable: true }} // Habilita la barra de desplazamiento
          className="w-full" // Cambia la clase si lo deseas
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
      <CarGallery />
      <WatchVideo />
      <WspSection />
    </main>
  );
}
