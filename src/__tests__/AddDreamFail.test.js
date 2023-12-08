import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import AddDream from "../app/components/AddDream";
import { createDreamAction } from "../app/components/_actions";
import React from "react";

// Mock createDreamAction
jest.mock("../app/components/_actions", () => ({
  createDreamAction: jest.fn(() => Promise.resolve()),
}));

describe("AddDream", () => {
  it("should log error on failed creation", async () => {
    createDreamAction.mockRejectedValue(new Error("Error adding dream:"));

    render(<AddDream />);

    const titleInput = screen.getByPlaceholderText("Title");
    const contentInput = screen.getByPlaceholderText("Entry");
    const submitButton = screen.getByText("Add");

    fireEvent.change(titleInput, { target: { value: "My Dream Title" } });

    fireEvent.change(contentInput, {
      target: { value: "This is my dream content." },
    });

    fireEvent.click(submitButton);

    expect(createDreamAction).toBeCalledWith({
      title: "My Dream Title",
      content: "This is my dream content.",
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });

    jest.spyOn(console, "error").mockImplementationOnce(() => {});

    expect(createDreamAction).toHaveBeenCalledTimes(1);
    await expect(createDreamAction()).rejects.toEqual(
      new Error("Error adding dream:")
    );
  });
});
