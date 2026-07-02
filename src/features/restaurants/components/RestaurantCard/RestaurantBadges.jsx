import Badge from "@/shared/components/ui/Badge";

function RestaurantBadges({
  promoted,
  rating,
}) {
  return (
    <div className="flex items-center justify-between">

      {promoted ? (
        <Badge color="success">
          Promoted
        </Badge>
      ) : (
        <div />
      )}

      <Badge color="primary">
        ⭐ {rating}
      </Badge>

    </div>
  );
}

export default RestaurantBadges;