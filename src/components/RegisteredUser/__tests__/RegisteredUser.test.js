import renderWithContext from "shared/react/test/renderWithContext";

import RegisteredUser from "../RegisteredUser";

describe("<RegisteredUser />", () => {
  beforeEach(() => jest.clearAllMocks());

  xit("Should render correctly", () => {
    const { container } = renderWithContext(<RegisteredUser />);
    expect(container).toBeInTheDocument();
  });
});
