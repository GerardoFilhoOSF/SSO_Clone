import renderWithContext from "shared/react/test/renderWithContext";

import Register from "../Register";

describe("<Register />", () => {
  beforeEach(() => jest.clearAllMocks());

  xit("Should render correctly", () => {
    const { container } = renderWithContext(<Register />);
    expect(container).toBeInTheDocument();
  });
});
