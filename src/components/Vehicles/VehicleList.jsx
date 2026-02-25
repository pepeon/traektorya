import { useSelector } from "react-redux";
import VehicleItem from "./VehicleItem";

export default function VehicleList() {
  const vehicles = useSelector((state) => state.vehicles.items);

  return (
    <div>
      {vehicles.map((vehicle) => (
        <VehicleItem key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
}
