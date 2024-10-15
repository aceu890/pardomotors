import { motion, AnimatePresence } from "framer-motion";

// Define las props del componente
interface ResponsiveMenuProps {
  open: boolean; // El tipo de 'open' debe ser booleano
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl cursor-pointer">
            <ul className="flex flex-col justify-center items-center gap-10 ">
              <li className="w-full hover:bg-[hsl(0,78%,62%)] hover:scale-105 transition-all duration-300 px-4 py-2 rounded-lg text-center">
                inicio
              </li>
              <li className="w-full hover:bg-[hsl(0,78%,62%)] hover:scale-105 transition-all duration-300 px-4 py-2 rounded-lg text-center">
                catálogo
              </li>
              <li className="w-full hover:bg-[hsl(0,78%,62%)] hover:scale-105 transition-all duration-300 px-4 py-2 rounded-lg text-center">
                Nosotros
              </li>
              <li className="w-full hover:bg-[hsl(0,78%,62%)] hover:scale-105 transition-all duration-300 px-4 py-2 rounded-lg text-center">
                contacto
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
