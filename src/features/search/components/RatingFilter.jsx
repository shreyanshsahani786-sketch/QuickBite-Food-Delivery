import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

import { selectSearch } from "../selectors";
import { setRating } from "../searchSlice";

function RatingFilter() {
  const dispatch = useAppDispatch();

  const { rating } = useAppSelector(selectSearch);

  return (
    <select
      value={rating}
      onChange={(e) => dispatch(setRating(e.target.value))}
      className="rounded-lg border px-3 py-2"
    >
      <option value="">Rating</option>
      <option value="4.5">4.5+</option>
      <option value="4">4+</option>
      <option value="3">3+</option>
    </select>
  );
}

export default RatingFilter;