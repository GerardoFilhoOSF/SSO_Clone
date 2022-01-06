import renderWithContext from "shared/react/test/renderWithContext";

import ContactMenuModal from "../ContactMenuModal";

describe("<ContactMenuModal />", () => {
  beforeEach(() => jest.clearAllMocks());

  it("Should render correctly", () => {
    const { container } = renderWithContext(<ContactMenuModal />);
    expect(container).toBeInTheDocument();
  });
});
