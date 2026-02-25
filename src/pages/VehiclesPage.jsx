import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadVehicles } from "../store/vehiclesSlice";
import VehicleForm from "../components/Vehicles/VehicleForm";
import VehicleList from "../components/Vehicles/VehicleList";
import VehicleSort from "../components/Vehicles/VehicleSort";
import VehiclesMap from "../components/Map/VehiclesMap";

export default function VehiclesPage() {
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicles.items);

  useEffect(() => {
    dispatch(loadVehicles());
  }, [dispatch]);

  return (
    <div>
      <VehicleForm />
      <VehicleSort />
      <VehicleList vehicles={vehicles} />
      <VehiclesMap />
    </div>
  );
}
