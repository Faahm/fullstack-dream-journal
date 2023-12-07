import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { updateDreamAction } from "../app/components/_actions";
import UpdateDream from "../app/components/UpdateDream";

jest.mock("../app/components/_actions", () => ({
  updateDreamAction: jest.fn(),
}));

expect.extend({
  toMatchUpdatedAt(received, expected) {
    const receivedDate = new Date(received).toISOString().slice(0, 19);
    const expectedDate = new Date(expected).toISOString().slice(0, 19);

    const pass = receivedDate === expectedDate;
    if (pass) {
      return {
        message: () => `expected ${receivedDate} not to match ${expectedDate}`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${receivedDate} to match ${expectedDate}`,
        pass: false,
      };
    }
  },
});

describe("Form Submission", () => {
  it("Should update the dreamData with the expected arguments", async () => {
    const dreamData = {
      id: 1,
      title: "Dream",
      content: "Entry",
    };

    const { getByText, getByPlaceholderText } = render(
      <UpdateDream dream={dreamData} />
    );

    fireEvent.change(getByPlaceholderText("Title"), {
      target: { value: "Updated Dream" },
    });
    fireEvent.change(getByPlaceholderText("Entry"), {
      target: { value: "Updated Entry" },
    });

    fireEvent.click(getByText("Update"));

    const expectedUpdatedAt = new Date().toISOString();

    await waitFor(() =>
      expect(updateDreamAction).toHaveBeenCalledWith(1, {
        title: "Updated Dream",
        content: "Updated Entry",
        updatedAt: expect.toMatchUpdatedAt(expectedUpdatedAt),
      })
    );
  });
});
