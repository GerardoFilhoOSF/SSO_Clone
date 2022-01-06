import renderWithContext from "shared/react/test/renderWithContext";

import EmailVerification from "../EmailVerification";

describe("<EmailVerification />", () => {
  beforeEach(() => jest.clearAllMocks());

  xit("Should render correctly", () => {
    const { container } = renderWithContext(<EmailVerification />);
    expect(container).toBeInTheDocument();
  });
});
