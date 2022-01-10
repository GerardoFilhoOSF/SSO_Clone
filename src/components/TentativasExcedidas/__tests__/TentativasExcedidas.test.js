import renderWithContext from "shared/react/test/renderWithContext";

import TentativasExcedidas from "../TentativasExcedidas";

describe("<TentativasExcedidas />", () => {
  beforeEach(() => jest.clearAllMocks());

  xit("Should render correctly", () => {
    const { container } = renderWithContext(<TentativasExcedidas />);
    expect(container).toBeInTheDocument();
  });
});
