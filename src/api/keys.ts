import axios from "axios";
import { PaginatedResponse } from "./response/PaginatedResponse";

const find = async (page: number, size: number): Promise<PaginatedResponse> => {
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log(`${apiUrl}/keys?page=${page}&size=${size}`);
  const response = await axios.get(`${apiUrl}/keys?page=${page}&size=${size}`);
  return response.data;
};

export const keys = {
  find,
};
