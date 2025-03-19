import { IListData } from "@/types";
import { http } from "@/utils/http";

import { IUser } from "./interfaces";

export const getUserList = (
  offset?: number,
  limit?: number,
  ordering?: string,
): Promise<IListData<IUser>> => {
  return http.get("/admin-api/user", { offset, limit, ordering });
};

export const getUserProfile = (email: string): Promise<IListData<IUser>> => {
  return http.get("/admin-api/user", { email });
};

export const getUser = async (id: string): Promise<IUser> => {
  return http.get(`/admin-api/user/${id}`);
};

export const updateAdminType = (user_id: number, admin_type: string) => {
  return http.patch(`/admin-api/user/${user_id}`, {
    admin_type: Number(admin_type),
  });
};
