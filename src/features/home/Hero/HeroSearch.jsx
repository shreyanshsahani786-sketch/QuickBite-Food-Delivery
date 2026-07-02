import {
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";

function HeroSearch() {
  return (
    <div className="flex overflow-hidden rounded-2xl bg-white shadow-xl">

      <input
        type="text"
        placeholder="Search restaurant, food..."
        className="flex-1 px-6 py-5 text-lg outline-none"
      />

      <button className="bg-orange-500 px-8 text-white">

        <HiOutlineMagnifyingGlass size={26} />

      </button>

    </div>
  );
}

export default HeroSearch;