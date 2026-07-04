import { useAppDispatch } from "@/shared/hooks/useAppDispatch";

import { clearFilters } from "../searchSlice";

import RatingFilter from "./RatingFilter";
import DeliveryFilter from "./DeliveryFilter";
import CuisineFilter from "./CuisineFilter";
import SortFilter from "./SortFilter";

function FilterBar() {
  const dispatch = useAppDispatch();

  return (
    <div className="mb-8 flex flex-wrap gap-3">

      <RatingFilter />

      <DeliveryFilter />

      <CuisineFilter />

      <SortFilter />

      <button
        onClick={() => dispatch(clearFilters())}
        className="rounded-lg bg-orange-500 px-4 py-2 text-white"
      >
        Clear
      </button>

    </div>
  );
}

export default FilterBar;