import axios from "axios";

const API = axios.create({
  baseURL: "https://meddata-backend.onrender.com",
});

export default API;
