import { motion } from "framer-motion";

function OfferCard({ offer }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
      }}
      className={`min-w-[320px] rounded-3xl bg-gradient-to-r ${offer.color} p-8 text-white shadow-xl`}
    >
      <div className="text-5xl">
        {offer.icon}
      </div>

      <h2 className="mt-5 text-3xl font-bold">
        {offer.title}
      </h2>

      <p className="mt-2 opacity-90">
        {offer.subtitle}
      </p>

      <div className="mt-6 inline-block rounded-xl bg-white px-5 py-2 font-bold text-black">
        {offer.code}
      </div>
    </motion.div>
  );
}

export default OfferCard;