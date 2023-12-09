import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UpdateDream from "../app/components/UpdateDream";

jest.mock("../app/components/_actions");

describe("UpdateDream component", () => {
  const mockDream = {
    id: 1,
    title: "My Dream",
    content: "This is my dream entry.",
    createdAt: new Date(2023, 11, 9),
    updatedAt: new Date(2023, 11, 9),
  };

  it("renders the dream title", () => {
    render(<UpdateDream dream={mockDream} />);
    expect(screen.getByTestId("title")).toHaveTextContent("My Dream");
  });

  it("renders the dream creation date", () => {
    render(<UpdateDream dream={mockDream} />);
    expect(screen.getByTestId("created-at")).toHaveTextContent("Created At:");
    expect(screen.getByTestId("updated-at")).toHaveTextContent("Updated At:");
  });

  it("renders the dream content", () => {
    render(<UpdateDream dream={mockDream} />);
    expect(screen.getByTestId("content")).toHaveTextContent(
      "This is my dream entry."
    );
  });

  it("renders the update button", () => {
    render(<UpdateDream dream={mockDream} />);
    expect(screen.getByRole("button", { name: "Update" })).toBeInTheDocument();
  });

  it("renders the back to homepage button", () => {
    render(<UpdateDream dream={mockDream} />);
    expect(
      screen.getByRole("link", { name: "Back to Homepage" })
    ).toBeInTheDocument();
  });
});
