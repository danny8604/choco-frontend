import { rest } from "msw";
import { baseURL } from "../api/axios";

export const handlers = [
  rest.get(`${baseURL}api/users/getOrders/:searchInput`, (req, res, ctx) => {
    const { searchInput } = req.params;
    if (searchInput === "correctly order number") {
      return res(
        ctx.status(200),
        ctx.json({
          order: {
            _id: "test",
            products: [],
            totalQuantity: "test",
            totalPrice: "test",
            createdAt: "test",
            updatedAt: "test",
          },
        })
      );
    }
    return res(
      ctx.status(500),
      ctx.json({
        data: "no order",
      })
    );
  }),
];
