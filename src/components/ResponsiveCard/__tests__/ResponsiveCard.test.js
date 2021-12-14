import { cleanup } from "@testing-library/react";
import renderWithContext from "shared/react/test/renderWithContext";

import ResponsiveCard from "../ResponsiveCard";

describe("<ResponsiveCard />", () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  xit("Should render correctly", () => {
    const { container } = renderWithContext(<ResponsiveCard />);
    expect(container).toBeInTheDocument();
  });
});
