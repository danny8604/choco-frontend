import axios from "axios";
import { ShoppingCartItem } from "../app/type";

export interface tokenAndProductId {
  userToken: string;
  productId: string;
}

export const api = axios.create({
  baseURL: "http://localhost:5000/",
});
