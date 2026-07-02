import categories from "@/shared/data/categories";

import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <section className="container py-16">

      <h2 className="mb-8 text-4xl font-bold">
        Browse by Category
      </h2>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
          />
        ))}

      </div>

    </section>
  );
}

export default Categories;