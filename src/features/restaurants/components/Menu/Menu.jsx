import MenuCategory from "./MenuCategory";

function Menu({
  restaurant,
  menu,
}) {
  if (!menu || Object.keys(menu).length === 0) {
    return (
      <div className="mt-10 rounded-xl border border-dashed p-8 text-center text-gray-500">
        No menu available for this restaurant.
      </div>
    );
  }

  return (
    <div className="mt-10 space-y-8">
      {Object.entries(menu).map(
        ([title, items]) => (
          <MenuCategory
            key={title}
            title={title}
            items={items}
            restaurant={restaurant}
          />
        )
      )}
    </div>
  );
}

export default Menu;