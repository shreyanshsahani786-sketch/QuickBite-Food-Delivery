import offers from "@/shared/data/offers";
import OfferCard from "./OfferCard";

function Offers() {
  return (
    <section className="container py-16">

      <h2 className="mb-8 text-4xl font-bold">
        Best Offers For You
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">

        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
          />
        ))}

      </div>

    </section>
  );
}

export default Offers;