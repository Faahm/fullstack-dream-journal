import "@testing-library/jest-dom";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import UpdateDream from "../app/components/UpdateDream";

jest.mock("../app/components/_actions", () => ({
  updateDreamAction: jest.fn(),
}));

describe("Update Dream", () => {
  it("should allow editing the dream title and content", () => {
    const mockDream = {
      id: "1",
      title: "My Amazing Dream",
      content: "I flew over a rainbow and met a talking unicorn.",
      createdAt: new Date(2023, 11, 10),
      updatedAt: new Date(2023, 11, 10),
    };

    render(<UpdateDream dream={mockDream} />);

    fireEvent.click(screen.getByTestId("edit-title"));
    fireEvent.click(screen.getByTestId("edit-entry"));

    expect(screen.getByRole("textbox", { name: "Title" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Entry" })).toBeInTheDocument();

    fireEvent.change(screen.getByRole("textbox", { name: "Title" }), {
      target: { value: "My New Dream Title" },
    });
    fireEvent.change(screen.getByRole("textbox", { name: "Entry" }), {
      target: { value: "This is my updated dream content." },
    });

    fireEvent.click(screen.getByRole("button", { name: "Update" }));

    expect(screen.getByDisplayValue("My New Dream Title")).toBeInTheDocument();
    expect(
      screen.getByText("This is my updated dream content.")
    ).toBeInTheDocument();
  });
});
