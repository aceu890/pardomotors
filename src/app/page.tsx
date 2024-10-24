'use client'
import "./globals.css";
import SwiperComponent from "./components/SwiperComponent";
import CarGallery from "./components/CarGallery";
import WatchVideo from "./components/WatchVideo";
import WspSection from "./components/WspSection";
import WspFlotante from "./components/WspFlotante";
import ViewAllButton from "./components/ViewAllButton";
import { motion } from "framer-motion";

export default function Home() {
  // Importación de imágenes
  const images = [
    { src: "/images/autos.png", alt: "Autos" },
    { src: "/images/pickups.png", alt: "Pickups" },
    { src: "/images/camiones.png", alt: "Camiones" },
    { src: "/images/vans.png", alt: "Vans" },
    { src: "/images/motos.png", alt: "Motos" },
  ];

  // Variantes de animación para los encabezados
  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Variantes de animación para los componentes
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <main className="overflow-x-hidden bg-gray-100">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center my-8"
        initial="hidden"
        animate="visible"
        variants={headingVariants}
      >
        Elige <span className="text-orange-500">tu vehículo</span>
      </motion.h1>

      <motion.div
        className="w-full flex justify-center items-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
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
      </motion.div>

      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center my-5"
        initial="hidden"
        animate="visible"
        variants={headingVariants}
      >
        Más <span className="text-orange-500">vistos</span>
      </motion.h1>

      <WspFlotante />

      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <CarGallery />
        <ViewAllButton />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <WatchVideo />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <WspSection />
      </motion.div>
    </main>
  );
}
