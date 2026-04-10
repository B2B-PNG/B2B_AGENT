import apiClient from "@/axios";
import type { ILogin, IUser } from "../interfaces/auth";
import { QUERY_KEYS } from "./query-keys";
import { useQuery } from "@tanstack/react-query";

export const useLogin = async (data: ILogin) => {
  const res = await apiClient.post("login", data);
  return res;
};


export const fetchUser = async () => {
  const response = await apiClient.get(`user/information`);
  return response.data;
};

export function useUser() {

  const { data, isLoading, error, isFetching, refetch } = useQuery<IUser>({
    queryKey: [QUERY_KEYS.AUTH.USER_INFO],
    queryFn: fetchUser,
    enabled: true,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const isEmpty = !data || (Object.keys(data).length === 0);

  return {
    user: data || null,
    userLoading: isLoading,
    userFetching: isFetching,
    userError: error,
    userEmpty: isEmpty,
    refetchUser: refetch,
  };
}