import { Link } from "react-router-dom";

function RestaurantImage({
  id,
  image,
  name,
}) {
  return (
    <Link to={`/restaurants/${id}`}>
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="h-52 w-full rounded-2xl object-cover"
      />
    </Link>
  );
}

export default RestaurantImage;