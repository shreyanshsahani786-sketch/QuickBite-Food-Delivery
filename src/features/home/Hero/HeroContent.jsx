import { motion } from "framer-motion";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .5 }}
      className="max-w-3xl"
    >

      <p className="font-semibold text-orange-500">
        🚀 India's Fastest Food Delivery
      </p>

      <h1 className="mt-4 text-6xl font-extrabold leading-tight">

        Delicious Food

        <span className="block text-orange-500">
          Delivered Fast
        </span>

      </h1>

      <p className="mt-6 text-xl text-gray-600">

        Order from your favourite restaurants
        with lightning fast delivery.

      </p>

    </motion.div>
  );
}

export default HeroContent;