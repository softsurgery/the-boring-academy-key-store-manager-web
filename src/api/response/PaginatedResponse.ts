import { Key } from "../types/Key";

export type PaginatedResponse = {
  current_page: number;
  keys: Key[];
  total_keys: number;
  total_pages: number;
};
