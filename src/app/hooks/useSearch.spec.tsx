import { renderHook } from "@testing-library/react";
import useSearch from "./useSearch";
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

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

  it("Should render error message order number wrong", async () => {
    const { result } = renderHook(useSearch);

    await act(() => result.current.fetchSearchResult("test error"));

    expect(result.current.message).toBe(
      "can't find the order for the provider order number."
    );
  });
});
