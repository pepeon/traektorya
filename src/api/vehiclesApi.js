const URL = "https://task.tspb.su/test-task/vehicles";

export const fetchVehicles = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error(error.message || "Network error");
  }
};
