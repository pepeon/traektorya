# 🚗 Vehicles SPA

Single Page Application built with **React** and **Redux Toolkit** for managing a list of vehicles received from a REST API.

---

## 🚀 Technologies Used

- React
- Redux Toolkit
- React Leaflet
- Leaflet
- JavaScript (ES6+)

---

## 📌 Features

- Fetch vehicles from remote API
- Display vehicle list (name, model, year, price)
- Add new vehicles
- Edit vehicle name and price
- Delete vehicles
- Sort vehicles by year and price
- Interactive map with vehicle locations

---

## 🗺 Map Integration

Vehicle coordinates (`latitude`, `longitude`) are displayed on an interactive map using **React Leaflet** and OpenStreetMap tiles.  
Each vehicle is represented as a marker with a popup containing vehicle information.

---

## 🏗 Architecture

The project follows a feature-based structure and clean separation of concerns:

- **React (Functional Components + Hooks)**
- **Redux Toolkit** for centralized state management
- **Async Thunks** for API requests
- Separate API layer
- Modular components structure

---

## 🧠 State Management

Redux is used as a single source of truth:

- Vehicle list stored globally
- CRUD operations handled via reducers
- Sorting performed at state level
- Components connected via `useSelector` and `useDispatch`

---

## 🌐 API Endpoint

GET: https://task.tspb.su/test-task/vehicles

Example response:

```json
[
  {
    "id": 1,
    "name": "Toyota",
    "model": "Camry",
    "year": 2021,
    "color": "red",
    "price": 21000,
    "latitude": 55.753332,
    "longitude": 37.621676
  }
]
```

---
