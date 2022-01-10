import renderWithContext from "shared/react/test/renderWithContext";

import AutorizarDispositivo from "../AutorizarDispositivo";

describe("<AutorizarDispositivo />", () => {
  beforeEach(() => jest.clearAllMocks());

  xit("Should render correctly", () => {
    const { container } = renderWithContext(<AutorizarDispositivo />);
    expect(container).toBeInTheDocument();
  });
});
