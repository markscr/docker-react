import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Changed on feature1 branch/i);
  expect(linkElement).toBeInTheDocument();
});
