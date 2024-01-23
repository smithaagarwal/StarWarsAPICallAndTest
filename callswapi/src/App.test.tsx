import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";
import { server } from "./__mocks__/server";
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App", () => {
  it("renders heading", () => {
    render(<App />);
    const heading = screen.getByText("Star Wars");
    expect(heading).toBeInTheDocument();
  });
  it("renders error as at start of app id is invalid", async () => {
    render(<App />);
    const error = await screen.findByText(/I'm a tea pot, silly/i);
    expect(error).toBeInTheDocument();
  });
});
