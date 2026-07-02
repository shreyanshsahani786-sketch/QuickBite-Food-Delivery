import HeroContent from "./HeroContent";
import HeroSearch from "./HeroSearch";
import HeroStats from "./HeroStats";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100">

      <div className="container py-20">

        <HeroContent />

        <div className="mt-10">
          <HeroSearch />
        </div>

        <div className="mt-12">
          <HeroStats />
        </div>

      </div>

    </section>
  );
}

export default Hero;