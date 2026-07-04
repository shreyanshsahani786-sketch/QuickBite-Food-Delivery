import { FiSearch } from "react-icons/fi";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

import {
  setQuery,
} from "../searchSlice";

import {
  selectSearch,
} from "../selectors";

function SearchBar() {
  const dispatch = useAppDispatch();

  const { query } = useAppSelector(selectSearch);

  return (
    <div className="relative">

      <FiSearch
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        value={query}
        onChange={(e) =>
          dispatch(setQuery(e.target.value))
        }
        placeholder="Search restaurants..."
        className="w-full rounded-xl border bg-white py-3 pl-12 pr-4 outline-none focus:border-orange-500"
      />

    </div>
  );
}

export default SearchBar;