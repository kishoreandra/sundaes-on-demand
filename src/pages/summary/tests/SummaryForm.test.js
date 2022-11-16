import SummaryForm from "../SummaryForm";
import { fireEvent, render, screen } from "@testing-library/react";

test("state of checkbox by default", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: "terms and conditions",
  });

  expect(checkbox).not.toBeChecked();
});

test("state of the button on clicking checkbox", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: "terms and conditions",
  });
  const button = screen.getByRole("button", { name: "submit" });

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});
