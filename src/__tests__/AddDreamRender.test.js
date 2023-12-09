import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import AddDream from "../app/add-dream/page";

describe("AddDream Component", () => {
  it("Renders AddDream component correctly", () => {
    const { getByText, getByPlaceholderText } = render(<AddDream />);

    expect(getByPlaceholderText("Title")).toBeInTheDocument();
    expect(getByPlaceholderText("Entry")).toBeInTheDocument();
    expect(getByText("Add")).toBeInTheDocument();
  });
});
