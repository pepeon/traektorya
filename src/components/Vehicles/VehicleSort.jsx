import { useDispatch } from "react-redux";
import { sortVehicles } from "../../store/vehiclesSlice";

export default function VehicleSort() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(sortVehicles("year"))}>
        Sort by year
      </button>
      <button onClick={() => dispatch(sortVehicles("price"))}>
        Sort by price
      </button>
    </div>
  );
}
