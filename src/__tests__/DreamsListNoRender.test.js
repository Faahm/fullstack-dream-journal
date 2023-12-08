import { render } from "@testing-library/react";
import DreamsList from "../app/components/DreamsList";

describe("DreamsList component", () => {
  it("renders correctly with no data", () => {
    const {} = render(<DreamsList data={[]} />);

    expect(null);
  });
});
