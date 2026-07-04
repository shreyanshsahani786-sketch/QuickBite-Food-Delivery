function EmptySearch() {
  return (
    <div className="flex flex-col items-center justify-center py-20">

      <h2 className="text-3xl font-bold">
        No Restaurants Found
      </h2>

      <p className="mt-3 text-gray-500">
        Try searching with another keyword.
      </p>

    </div>
  );
}

export default EmptySearch;