import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getpizzas() {
    return apiClient.get("/pizzas");
  },
  getPizza(id) {
    return apiClient.get(`/pizzas/${id}`);
  },
};
