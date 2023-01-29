import axios from "axios";

export interface tokenAndProductId {
  userToken: string;
  productId: string;
}

export const baseURL = "https://eloquent-monstera-4c0676.netlify.app";

export const api = axios.create({
  baseURL: baseURL,
});
