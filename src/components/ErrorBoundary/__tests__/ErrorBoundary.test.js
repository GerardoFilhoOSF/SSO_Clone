import { cleanup } from "@testing-library/react";
import { withRouter } from "react-router";
import renderWithContext from "shared/react/test/renderWithContext";
import ErrorBoundary from "../ErrorBoundary";

describe("<ErrorBoundary />", () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("Should render correctly", () => {
    const { container } = renderWithContext(withRouter(<ErrorBoundary />));
    expect(container).toBeInTheDocument();
  });
});
