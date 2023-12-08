import { render, fireEvent } from "@testing-library/react";
import DreamsList from "../app/components/DreamsList";

const mockDreams = [
  {
    id: 1,
    title: "Dream 1",
    content: "This is the content of the first dream",
    createdAt: "2023-12-09T00:00:00.000Z",
    updatedAt: "2023-12-09T00:00:00.000Z",
  },
  {
    id: 2,
    title: "Dream 2",
    content: "This is the content of the second dream",
    createdAt: "2023-12-09T00:01:00.000Z",
    updatedAt: "2023-12-09T00:01:00.000Z",
  },
];

describe("DreamsList component", () => {
  it("calls the delete dream function when clicking the delete button", async () => {
    const mockDeleteDream = jest.fn();
    const { getAllByText } = render(
      <DreamsList data={mockDreams} deleteDreamAction={mockDeleteDream} />
    );

    const deleteButton = getAllByText("Delete")[0];
    fireEvent.click(deleteButton);

    await mockDeleteDream;
    console.log(mockDeleteDream.mock.calls);
  });
});
