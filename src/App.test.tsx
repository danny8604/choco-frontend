import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";

it("should render choco link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Search CHOCO Store/i);
  expect(linkElement).toBeInTheDocument();
});
