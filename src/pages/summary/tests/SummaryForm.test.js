import SummaryForm from "../SummaryForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("state of checkbox by default", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: "terms and conditions",
  });

  expect(checkbox).not.toBeChecked();
});

test("state of the button on clicking checkbox", async () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: "terms and conditions",
  });
  const button = screen.getByRole("button", { name: "submit" });

  await userEvent.click(checkbox);
  expect(button).toBeEnabled();

  await userEvent.click(checkbox);
  expect(button).toBeDisabled();
});

test("popover state on initial load, mouseover and mouse leaving", async () => {
  render(<SummaryForm />);

  const user = userEvent.setup();

  const checkbox = screen.getByRole("checkbox", {
    name: "terms and conditions",
  });

  //popover should not be visible initially
  const popoverNull = screen.queryByText("Ice creams are fictional to buy");
  expect(popoverNull).not.toBeInTheDocument();

  //popover should be visible on mouseover
  await user.hover(checkbox);
  const popover = screen.getByText("Ice creams are fictional to buy");
  expect(popover).toBeVisible();

  //popover should be invisible on mouse leave
  await user.unhover(checkbox);
  expect(popover).not.toBeInTheDocument();
});
