import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

import { selectSearch } from "../selectors";
import { setCuisine } from "../searchSlice";

const cuisines = [
  "Burger",
  "Pizza",
  "North Indian",
  "Chinese",
  "Italian",
  "Healthy",
];

function CuisineFilter() {
  const dispatch = useAppDispatch();

  const { cuisine } = useAppSelector(selectSearch);

  return (
    <select
      value={cuisine}
      onChange={(e) => dispatch(setCuisine(e.target.value))}
      className="rounded-lg border px-3 py-2"
    >
      <option value="">Cuisine</option>

      {cuisines.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default CuisineFilter;