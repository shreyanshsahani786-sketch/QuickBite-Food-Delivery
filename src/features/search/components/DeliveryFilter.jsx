import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

import { selectSearch } from "../selectors";
import { setDeliveryTime } from "../searchSlice";

function DeliveryFilter() {
  const dispatch = useAppDispatch();

  const { deliveryTime } = useAppSelector(selectSearch);

  return (
    <select
      value={deliveryTime}
      onChange={(e) => dispatch(setDeliveryTime(e.target.value))}
      className="rounded-lg border px-3 py-2"
    >
      <option value="">Delivery</option>
      <option value="20">Under 20 min</option>
      <option value="30">Under 30 min</option>
      <option value="40">Under 40 min</option>
    </select>
  );
}

export default DeliveryFilter;