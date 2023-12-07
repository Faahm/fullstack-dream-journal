import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import AddDream from "../app/components/AddDream";

describe("AddDream Component", () => {
  it("renders AddDream component correctly", () => {
    const { getByText, getByPlaceholderText } = render(<AddDream />);

    expect(getByPlaceholderText("Title")).toBeInTheDocument();
    expect(getByPlaceholderText("Entry")).toBeInTheDocument();
    expect(getByText("Add")).toBeInTheDocument();
  });
});
