import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeed", async () => {
    // Arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });

    render(<Async />);

    // Act
    // ... nothing

    // Assert
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
