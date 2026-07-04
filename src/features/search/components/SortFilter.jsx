import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

import { selectSearch } from "../selectors";
import { setSortBy } from "../searchSlice";

function SortFilter() {
  const dispatch = useAppDispatch();

  const { sortBy } = useAppSelector(selectSearch);

  return (
    <select
      value={sortBy}
      onChange={(e) => dispatch(setSortBy(e.target.value))}
      className="rounded-lg border px-3 py-2"
    >
      <option value="">Sort By</option>

      <option value="rating">
        Highest Rating
      </option>

      <option value="delivery">
        Fastest Delivery
      </option>

      <option value="lowPrice">
        Price Low → High
      </option>

      <option value="highPrice">
        Price High → Low
      </option>
    </select>
  );
}

export default SortFilter;