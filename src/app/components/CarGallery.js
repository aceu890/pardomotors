import Image from "next/image";
import Link from "next/link";

const cars = [
  {
    id: 1,
    image: "/images/gallery_1.jpg",
    brand: "Toyota",
    year: 2020,
    price: "$20,000",
  },
  {
    id: 2,
    image: "/images/gallery_2.jpg",
    brand: "Ford",
    year: 2019,
    price: "$18,500",
  },
  {
    id: 3,
    image: "/images/gallery_3.jpg",
    brand: "Honda",
    year: 2021,
    price: "$22,300",
  },
  {
    id: 4,
    image: "/images/gallery_4.jpg",
    brand: "Toyota",
    year: 2020,
    price: "$20,000",
  },
  {
    id: 5,
    image: "/images/gallery_5.jpg",
    brand: "Ford",
    year: 2019,
    price: "$18,500",
  },
  {
    id: 6,
    image: "/images/gallery_6.jpg",
    brand: "Honda",
    year: 2021,
    price: "$22,300",
  },
  // Agrega más autos aquí
];

export default function CarGallery() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="relative overflow-hidden flex-grow">
              <Image
                src={car.image}
                alt={`${car.brand} ${car.year}`}
                layout="responsive"
                width={400}
                height={300}
                className="transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover"
              />
            </div>
            <div className="p-4 flex justify-between items-center flex-grow-0">
              <div className="flex flex-col">
                <h2 className="text-xl font-bold">{car.brand}</h2>
                <p className="text-gray-600">{car.year}</p>
              </div>
              <p className="text-red-500 font-semibold text-2xl">{car.price}</p>
            </div>

            <Link
              href={"#"}
              className="bg-gray-800  text-white text-center py-2 px-4 rounded hover:bg-orange-600 transition w-full font-bold"
            >
              Ver Auto
            </Link>
          </div>
        ))}
      </div>
      {/* Botón "Ver Todo" centrado al final de la galería */}
      <div className="flex justify-center mt-8">
        <Link
          href="/ver-todos"
          className="relative inline-block px-8 py-4 font-bold text-white bg-gradient-to-r from-orange-400 to-red-500 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <span className="relative">Ver Todo</span>
          <span className="absolute inset-0 w-full h-full rounded-lg border-2 border-transparent transition-all duration-300 ease-in-out group-hover:border-white" />
        </Link>
      </div>
    </div>
  );
}
