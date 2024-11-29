import axios from "axios";

export const Axios = axios.create({
  baseURL: process.env.AMAZN_API_URL,
});