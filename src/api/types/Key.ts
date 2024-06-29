import { Course } from "./Course";

export type Key = {
  uuid: string;
  created_at: string;
  expires_at: string;
  is_active: boolean;
  is_connected_once_desktop: boolean;
  is_connected_once_mobile: boolean;
  updated_at: string;
  user_id: string;
  course_ids: Course[];
};