import renderWithContext from "shared/react/test/renderWithContext";

import EmailVerificadoSucesso from "../EmailVerificadoSucesso";

describe("<EmailVerificadoSucesso />", () => {
  beforeEach(() => jest.clearAllMocks());

  xit("Should render correctly", () => {
    const { container } = renderWithContext(<EmailVerificadoSucesso />);
    expect(container).toBeInTheDocument();
  });
});
