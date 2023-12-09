import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import AddDream from "../app/add-dream/page";

describe("AddDream Component", () => {
  it("updates state when title and content input change", () => {
    const { getByPlaceholderText } = render(<AddDream />);

    const titleInput = getByPlaceholderText("Title");
    fireEvent.change(titleInput, { target: { value: "My Dream Title" } });
    expect(titleInput.value).toBe("My Dream Title");

    const contentInput = getByPlaceholderText("Entry");
    fireEvent.change(contentInput, {
      target: { value: "This is my dream content." },
    });
    expect(contentInput.value).toBe("This is my dream content.");
  });
});
