import MenuCategory from "./MenuCategory";

function Menu({ restaurant, menu }) {
  if (!menu) {
    return (
        <div className="mt-10 text-center">
            No Menu Available
        </div>
    );
  }

  return (
    <div className="mt-10 space-y-10">
      {Object.entries(menu).map(([title, items]) => (
        <MenuCategory
          key={title}
          title={title}
          items={items}
          restaurant={restaurant}
        />
      ))}
    </div>
  );
}

export default Menu;