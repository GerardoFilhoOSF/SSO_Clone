import { cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import renderWithContext from "shared/react/test/renderWithContext";
import Header from "../Header";

describe("Header", () => {
  beforeEach(() => {
    cleanup();
  });

  xit("should be render header correctly", () => {
    const { container } = renderWithContext(
      <Router>
        <Header data-section="header section" />
      </Router>
    );
    expect(container).toBeInTheDocument();
  });
});
