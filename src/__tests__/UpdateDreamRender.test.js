import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import UpdateDream from "../app/components/UpdateDream";

jest.mock("../app/components/_actions", () => ({
  updateDreamAction: jest.fn(),
}));

describe("UpdateDream", () => {
  describe("Render UpdateDream Component", () => {
    it("Should render UpdateDream component with data", () => {
      const dreamData = {
        id: 1,
        title: "Dream",
        content: "Entry",
      };

      const { getByPlaceholderText, getByText } = render(
        <UpdateDream dream={dreamData} />
      );

      expect(getByPlaceholderText("Title").value).toBe("Dream");
      expect(getByPlaceholderText("Entry").value).toBe("Entry");

      expect(getByText("Update")).toBeInTheDocument();
    });
  });
});
