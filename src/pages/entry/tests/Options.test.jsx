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
  