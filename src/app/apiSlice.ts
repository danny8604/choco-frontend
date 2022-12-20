import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { databaseURL } from "./firebase-config";

// Only fetch data
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: databaseURL,
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (name: string) => `${name}.json`,
    }),
    getUserInfor: builder.query({
      query: (name: string) => `/users/${name}.json`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetUserInforQuery } = productsApi;
