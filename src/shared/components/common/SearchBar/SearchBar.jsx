import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

function SearchBar({
  value,
  onChange,
  placeholder = "Search food or restaurants...",
}) {
  return (
    <div className="relative">
      <HiOutlineMagnifyingGlass
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />

      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-orange-500"
      />
    </div>
  );
}

export default SearchBar;