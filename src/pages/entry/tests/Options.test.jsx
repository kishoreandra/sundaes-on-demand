import { render, screen } from "@testing-library/react";

import Options from "../Options";

test("displays an image for each scoop option from the server", async () => {
  render(<Options optionType={"scoops"} />);

  //find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // check alt text of images
  const altText = scoopImages.map((el) => el.alt);
  // primitives - use toBe and object / arrays use toEqual
  expect(altText).toEqual(["Mint chip scoop", "Vanilla scoop"]);
});

test("displays an image for each toppings from the server", async () => {
  render(<Options optionType="toppings" />);

  // find images
  const toppingsImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingsImages).toHaveLength(3);

  // check alt text of images
  const altText = toppingsImages.map((img) => img.alt);
  expect(altText).toEqual([
    "M&Ms topping",
    "Hot fudge topping",
    "Cherries topping",
  ]);
});
