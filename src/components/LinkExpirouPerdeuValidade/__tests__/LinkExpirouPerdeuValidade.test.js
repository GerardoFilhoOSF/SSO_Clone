import renderWithContext from "shared/react/test/renderWithContext";

import LinkExpirouPerdeuValidade from "../LinkExpirouPerdeuValidade";

describe("<LinkExpirouPerdeuValidade />", () => {
  beforeEach(() => jest.clearAllMocks());

  xit("Should render correctly", () => {
    const { container } = renderWithContext(<LinkExpirouPerdeuValidade />);
    expect(container).toBeInTheDocument();
  });
});
