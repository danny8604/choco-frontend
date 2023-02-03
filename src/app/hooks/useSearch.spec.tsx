import { renderHook } from "@testing-library/react";
import useSearch from "./useSearch";
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("useSearch", () => {
  it("Should render the initialState", () => {
    const { result } = renderHook(useSearch);

    expect(result.current.loading).toBe(false);
    expect(result.current.searchResult).toBe(null);
    expect(result.current.message).toBe("Please enter your order number.");
  });

  //   it("Should render message with abcd", async () => {
  //     const { result } = renderHook(useSearch);

  //     act(async () => await result.current.fetchSearchResult("m"));

  //     expect(result.current.message).toBe("abcd");
  //   });
});
