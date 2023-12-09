import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import UpdateDream from "../app/components/UpdateDream";

jest.mock("../app/components/_actions", () => ({
  updateDreamAction: jest.fn(),
}));

describe("UpdateDream component", () => {
  const mockDream = {
    id: 1,
    title: "My Dream",
    content: "This is my dream entry.",
    createdAt: new Date(2023, 11, 9),
    updatedAt: new Date(2023, 11, 9),
  };

  it("allows editing the dream title", () => {
    render(<UpdateDream dream={mockDream} />);
    fireEvent.click(screen.getByText("Edit"));

    expect(screen.getByRole("textbox", { name: "Title" })).toBeInTheDocument();
  });

  it("allows editing the dream content", () => {
    render(<UpdateDream dream={mockDream} />);
    fireEvent.click(screen.getByText("Edit Entry"));

    expect(screen.getByRole("textbox", { name: "Entry" })).toBeInTheDocument();
  });
});
