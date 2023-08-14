import { fireEvent, render, screen } from "@testing-library/react";
import Single from "./single";

test("count product total in single product", () => {
  // render compoent 
  render(<Single />);

  // find data test id 
  const counter = screen.getByTestId("counter");
  const incrementBtn = screen.getByTestId("handelTotal");

  fireEvent.click(incrementBtn);
  expect(counter).toHaveTextContent("2");
});

test("count product decrease in single product", () => {
  render(<Single />);

  const counter = screen.getByTestId("counter");
  const decreaseBtn = screen.getByTestId("handelSubtraction")

  fireEvent.click(decreaseBtn)
  expect(counter).toHaveTextContent("0")
  
});
