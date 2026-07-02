const stats = [
  {
    title: "500+",
    subtitle: "Restaurants",
  },
  {
    title: "30 Min",
    subtitle: "Average Delivery",
  },
  {
    title: "50K+",
    subtitle: "Happy Customers",
  },
  {
    title: "4.8",
    subtitle: "App Rating",
  },
];

function HeroStats() {
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-4">

      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl bg-white p-6 shadow"
        >
          <h2 className="text-4xl font-bold text-orange-500">
            {item.title}
          </h2>

          <p className="mt-2 text-gray-500">
            {item.subtitle}
          </p>
        </div>
      ))}

    </div>
  );
}

export default HeroStats;