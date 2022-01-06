import renderWithContext from "shared/react/test/renderWithContext";

import VerificacaoTelefone from "../VerificacaoTelefone";

describe("<VerificacaoTelefone />", () => {
  beforeEach(() => jest.clearAllMocks());

  xit("Should render correctly", () => {
    const { container } = renderWithContext(<VerificacaoTelefone />);
    expect(container).toBeInTheDocument();
  });
});
