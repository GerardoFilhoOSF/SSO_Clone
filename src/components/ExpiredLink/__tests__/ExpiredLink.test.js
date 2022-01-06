import renderWithContext from "shared/react/test/renderWithContext";

import ExpiredLink from "../ExpiredLink";

describe("<ExpiredLink />", () => {
  beforeEach(() => jest.clearAllMocks());

  xit("Should render correctly", () => {
    const { container } = renderWithContext(<ExpiredLink />);
    expect(container).toBeInTheDocument();
  });
});
