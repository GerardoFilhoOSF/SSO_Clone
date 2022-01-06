import renderWithContext from "shared/react/test/renderWithContext";

import ErroCadastro from "../ErroCadastro";

describe("<ErroCadastro />", () => {
  beforeEach(() => jest.clearAllMocks());

  xit("Should render correctly", () => {
    const { container } = renderWithContext(<ErroCadastro />);
    expect(container).toBeInTheDocument();
  });
});
