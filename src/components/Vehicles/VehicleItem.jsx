import { useDispatch } from "react-redux";
import { deleteVehicle, updateVehicle } from "../../store/vehiclesSlice";

export default function VehicleItem({ vehicle }) {
  const dispatch = useDispatch();

  const onEdit = (label) => {
    const value = prompt(`New ${label}`, vehicle[label]);
    if (value !== 0)
      dispatch(updateVehicle({ id: vehicle.id, [label]: value }));
  };

  return (
    <div>
      <strong>
        {vehicle.name} {vehicle.model}
      </strong>
      <div>Year: {vehicle.year}</div>
      <div>Price: {vehicle.price}</div>

      <button onClick={() => onEdit("name")}>Edit name</button>
      <button onClick={() => onEdit("price")}>Edit price</button>
      <button onClick={() => dispatch(deleteVehicle(vehicle.id))}>
        Delete
      </button>
    </div>
  );
}
