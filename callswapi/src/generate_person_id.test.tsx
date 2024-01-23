import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { GeneratePersonID } from "./generate_person_id";
import { server } from "./__mocks__/server";
import "@testing-library/jest-dom";
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe("GeneratePersonId", () => {
  it("check if the button is enabled", async () => {
    const clickFn = vi.fn();
    render(<GeneratePersonID setPersonID={clickFn} />);
    const button = await screen.findByRole("button", {
      name: /Show Random Star Wars Person Details/i,
    });
    expect(button).toBeEnabled();
  });

  it("check if the button click calls function", async () => {
    const clickFn = vi.fn();
    render(<GeneratePersonID setPersonID={clickFn} />);
    const button = await screen.findByRole("button", {
      name: /Show Random Star Wars Person Details/i,
    });
    fireEvent.click(button);
    expect(clickFn).toHaveBeenCalled;
  });
});
