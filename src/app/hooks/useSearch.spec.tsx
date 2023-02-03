import { renderHook } from "@testing-library/react";
import useSearch from "./useSearch";
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { server } from "../../mocks/server";
import { rest } from "msw";
import { baseURL } from "../../api/axios";

describe("useSearch", () => {
  const SearchInitialState = {
    loading: false,
    searchResult: null,
    message: "Please enter your order number.",
  };

  it("Should render the initialState", () => {
    const { result } = renderHook(useSearch);

    expect(result.current.loading).toBe(SearchInitialState.loading);
    expect(result.current.searchResult).toBe(SearchInitialState.searchResult);
    expect(result.current.message).toBe(SearchInitialState.message);
  });

  it("Should not render null with searchResult if order correct", async () => {
    const { result } = renderHook(useSearch);

    await act(() => result.current.fetchSearchResult("correctly order number"));

    expect(result.current.searchResult).not.toBe(null);
    expect(result.current.message).toBe(SearchInitialState.message);
  });

  it("Should render no order message if order number is wrong", async () => {
    const { result } = renderHook(useSearch);

    await act(() =>
      result.current.fetchSearchResult("test wrong order number")
    );

    expect(result.current.message).toBe(
      "Can't find order for the provided order number, please check your number and try again later."
    );
  });

  it("Should render server error message", async () => {
    server.use(
      rest.get(`${baseURL}api/users/getOrders/:searchInput`, (req, res, ctx) =>
        res(ctx.status(500))
      )
    );

    const { result } = renderHook(useSearch);

    await act(() =>
      result.current.fetchSearchResult("test server error message")
    );

    expect(result.current.message).toBe(
      "can't find the order for the provider order number."
    );
  });
});
