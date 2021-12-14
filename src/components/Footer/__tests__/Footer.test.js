import { cleanup } from "@testing-library/react";
import renderWithContext from "shared/react/test/renderWithContext";
import Footer from "../Footer";

describe("Footer", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should be render footer correctly", () => {
    const { container } = renderWithContext(<Footer />);
    expect(container).toBeInTheDocument();
  });
});
