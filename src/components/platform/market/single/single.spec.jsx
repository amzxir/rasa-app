import { render, fireEvent, screen } from "@testing-library/react";
import Single from "./single";
import '@testing-library/jest-dom'


test("should first", () => {
  render(<Single />);

  const counter = screen.getByTestId("counter");
  const incrementBtn = screen.getByTestId("handelTotal");

  fireEvent.click(incrementBtn);
  expect(counter).toHaveTextContent("1");
});
