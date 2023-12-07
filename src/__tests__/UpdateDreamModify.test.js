import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import UpdateDream from "../app/components/UpdateDream";

jest.mock("../app/components/_actions", () => ({
  updateDreamAction: jest.fn(),
}));

describe("UpdateDream", () => {
  describe("Form Modification", () => {
    it("Should modify the form input fields correctly", () => {
      const dreamData = {
        id: 1,
        title: "Dream",
        content: "Entry",
      };

      const { getByPlaceholderText } = render(
        <UpdateDream dream={dreamData} />
      );

      fireEvent.change(getByPlaceholderText("Title"), {
        target: { value: "Updated Dream" },
      });
      fireEvent.change(getByPlaceholderText("Entry"), {
        target: { value: "Updated Entry" },
      });

      expect(getByPlaceholderText("Title").value).toBe("Updated Dream");
      expect(getByPlaceholderText("Entry").value).toBe("Updated Entry");
    });
  });
});
