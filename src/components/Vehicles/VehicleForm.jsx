import { useState } from "react";
import { useDispatch } from "react-redux";
import { addVehicle } from "../../store/vehiclesSlice";

export default function VehicleForm() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    model: "",
    year: "",
    color: "",
    price: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addVehicle(formData));
    setFormData({
      name: "",
      model: "",
      year: "",
      color: "",
      price: "",
      latitude: "",
      longitude: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Vehicle</h3>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Model: </label>
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Year: </label>
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Color: </label>
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Price: </label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Latitude: </label>
        <input
          type="number"
          name="latitude"
          value={formData.latitude}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Longitude: </label>
        <input
          type="number"
          name="longitude"
          value={formData.longitude}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Vehicle</button>
    </form>
  );
}
