import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

test("displays the toggle button", () => {
  render(<Header />);
  expect(screen.queryByText(/ Mode/)).toBeInTheDocument();
});

test("calls the onDarkModeClick callback prop when the button is clicked", () => {
  const handleDarkModeClick = jest.fn();
  render(<Header onDarkModeClick={handleDarkModeClick} />);

  fireEvent.click(screen.queryByText(/ Mode/));
  expect(handleDarkModeClick).toHaveBeenCalled();
});
