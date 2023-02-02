import axios from "axios";

export interface tokenAndProductId {
  userToken: string;
  productId: string;
}

// export const baseURL = "https://choco-chair-backend.herokuapp.com/";

export const baseURL = "http://localhost:5000";

export const api = axios.create({
  baseURL: baseURL,
});
