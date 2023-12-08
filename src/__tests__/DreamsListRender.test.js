import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DreamsList from "../app/components/DreamsList";

// Mock data
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
  it("renders each dream with its title, content, and dates", () => {
    const { getByText, getByRole, getAllByText } = render(
      <DreamsList data={mockDreams} />
    );

    expect(getByText(mockDreams[0].title)).toBeTruthy();
    expect(getByText(mockDreams[0].content)).toBeTruthy();
    const hasValidDate = (content) => {
      return content.includes("Created At:") || content.includes("Updated At:");
    };

    for (let i = 0; i < getAllByText(hasValidDate).length; i++) {
      const element = getAllByText(hasValidDate)[i];
      expect(element.textContent).toBeTruthy();
    }
  });
});
