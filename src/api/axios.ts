import axios from "axios";
import { ShoppingCartItem } from "../app/type";

export interface tokenAndProductId {
  userToken: string;
  productId: string;
}

export const api = axios.create({
  baseURL: "https://choco-chair-backend.herokuapp.com/",
});

// export const api = axios.create({
//   baseURL: "http://localhost:5000/",
// });
