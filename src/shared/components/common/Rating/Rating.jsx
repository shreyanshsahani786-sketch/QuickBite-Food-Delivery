import { HiStar } from "react-icons/hi2";

function Rating({ value }) {
  return (
    <div className="flex items-center gap-1">
      <HiStar className="text-yellow-500" />

      <span className="font-semibold">
        {value}
      </span>
    </div>
  );
}

export default Rating;