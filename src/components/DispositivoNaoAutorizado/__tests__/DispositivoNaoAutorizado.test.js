import renderWithContext from "shared/react/test/renderWithContext";

import DispositivoNaoAutorizado from "../DispositivoNaoAutorizado";

describe("<DispositivoNaoAutorizado />", () => {
  beforeEach(() => jest.clearAllMocks());

  xit("Should render correctly", () => {
    const { container } = renderWithContext(<DispositivoNaoAutorizado />);
    expect(container).toBeInTheDocument();
  });
});
