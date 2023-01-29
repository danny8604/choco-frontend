import { api } from "./axios";

export const getPassportUser = async () => {
  const response = await api.get("auth/google/success");

  return response.data;
};
