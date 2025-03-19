import { useMutation, useQuery } from "@tanstack/react-query";

import { useQueryOption } from "@/constants";

import { getUser, getUserList, getUserProfile, updateAdminType } from "./url";

export const useGetUser = ({ id }: { id: string }) =>
  useQuery(["user", id], () => getUser(id), useQueryOption);

export const useGetUserList = (
  offset: number,
  limit: number,
  ordering?: string,
) =>
  useQuery(
    ["user-list", offset, ordering],
    () => getUserList(offset, limit, ordering),
    useQueryOption,
  );

export const useGetProfile = (email: string) =>
  useMutation(
    ["user-list", email],
    () => getUserProfile(email),
    useQueryOption,
  );

export const useUpdateAdminType = () =>
  useMutation(
    ["admin-type"],
    ({ userId, adminTypeId }: { userId: number; adminTypeId: string }) =>
      updateAdminType(userId, adminTypeId),
  );
