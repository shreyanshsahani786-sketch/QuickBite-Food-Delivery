import MenuItemCard from "./MenuItemCard";

function MenuCategory({
  title,
  items,
  restaurant,
}) {
  return (
    <section className="mb-10">

      <h2 className="mb-5 text-3xl font-bold">
        {title}
      </h2>

      <div className="space-y-4">
        {items.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            restaurantId={restaurant.id}
            restaurantName={restaurant.name}
          />
        ))}
      </div>

    </section>
  );
}

export default MenuCategory;