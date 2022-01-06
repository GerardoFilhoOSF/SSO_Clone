import renderWithContext from "shared/react/test/renderWithContext";

import InscricaoBloqueada from "../InscricaoBloqueada";

describe("<InscricaoBloqueada />", () => {
  beforeEach(() => jest.clearAllMocks());

  xit("Should render correctly", () => {
    const { container } = renderWithContext(<InscricaoBloqueada />);
    expect(container).toBeInTheDocument();
  });
});
