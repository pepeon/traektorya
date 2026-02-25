import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function VehiclesMap() {
  const vehicles = useSelector((state) => state.vehicles.items);

  if (!vehicles.length) return null;

  return (
    <MapContainer
      center={[vehicles[0].latitude, vehicles[0].longitude]}
      zoom={10}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {vehicles.map((v) => (
        <Marker key={v.id} position={[v.latitude, v.longitude]}>
          <Popup>
            <strong>{v.name}</strong>
            <br />
            {v.model}
            <br />${v.price}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
