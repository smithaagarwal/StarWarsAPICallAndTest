import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import { render, screen } from "@testing-library/react";
//import "@testing-library/jest-dom";

import App from "./App";
import { setupServer } from "msw/node";
import { validResponse } from "./__mocks__/handlers";
const server = setupServer();
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App", () => {
  it("renders headline", () => {
    server.use(validResponse);
    render(<App />);

    screen.debug();
    const heading = screen.getByText("Star Wars");
    expect(heading).toBeInTheDocument();

    // check if App components renders headline
  });
});
