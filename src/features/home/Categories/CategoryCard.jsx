import { motion } from "framer-motion";

function CategoryCard({ category }) {
  return (
    <motion.button
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="flex min-w-[120px] flex-col items-center rounded-2xl bg-white p-6 shadow transition hover:shadow-xl"
    >
      <span className="text-5xl">
        {category.emoji}
      </span>

      <p className="mt-3 font-semibold">
        {category.name}
      </p>
    </motion.button>
  );
}

export default CategoryCard;