import renderWithContext from "shared/react/test/renderWithContext";

import EmailEnviado from "../EmailEnviado";

describe("<EmailEnviado />", () => {
  beforeEach(() => jest.clearAllMocks());

  xit("Should render correctly", () => {
    const { container } = renderWithContext(<EmailEnviado />);
    expect(container).toBeInTheDocument();
  });
});
