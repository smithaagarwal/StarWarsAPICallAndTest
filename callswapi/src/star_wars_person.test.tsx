import { render, screen } from "@testing-library/react";
import { StarWarsPerson } from "./star_wars_person";

import { server } from "./__mocks__/server";
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("StarWarsPerson component", () => {
  it("renders button", () => {
    render(<StarWarsPerson />);
    const idButton = screen.findByRole("button", {
      name: /Show Random Star Wars Person Details/i,
    });
    expect(idButton);
  });

  it("Check if button is enabled", async () => {
    render(<StarWarsPerson />);
    const idButton = await screen.findByRole("button", {
      name: /Show Random Star Wars Person Details/i,
    });
    expect(idButton).toBeEnabled();
  });
});
