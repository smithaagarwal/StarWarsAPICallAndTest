import { render, screen } from "@testing-library/react";
import { ShowPersonDetails } from "./show_person_details";
import { server } from "./__mocks__/server";
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe("ShowPersonDetails Component", () => {
  it("renders the name when valid person id is passed", async () => {
    render(<ShowPersonDetails personID={4} />);
    const screenName = await screen.findByText(/Darth Vader/i);
    expect(screenName).toBeInTheDocument();
  });

  it("renders error when invalid person id is passed", async () => {
    render(<ShowPersonDetails personID={0} />);
    const screenName = await screen.findByText(/I'm a tea pot, silly/i);
    expect(screenName).toBeInTheDocument();
  });

  it("renders error message when 500 status is received", async () => {
    render(<ShowPersonDetails personID={90} />);
    const screenError = await screen.findByText(
      "Oops... something went wrong, try again 🤕",
    );
    expect(screenError).toBeInTheDocument();
  });
});
