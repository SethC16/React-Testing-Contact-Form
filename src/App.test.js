import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  const { getByText } = render(<App />);

  const header = getByText(/add new message/i);

  expect(header).toBeInTheDocument();
});
