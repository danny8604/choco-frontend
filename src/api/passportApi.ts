import { api } from "./axios";

export const getPassportUser = async () => {
  const response = await api.get("auth/google/success", {
    withCredentials: true,
  });

  return response.data;
};
