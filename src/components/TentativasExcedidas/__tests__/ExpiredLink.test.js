import renderWithContext from "shared/react/test/renderWithContext";

import ExpiredLink from "../TentativasExcedidas";

describe("<ExpiredLink />", () => {
  beforeEach(() => jest.clearAllMocks());

  xit("Should render correctly", () => {
    const { container } = renderWithContext(<ExpiredLink />);
    expect(container).toBeInTheDocument();
  });
});
