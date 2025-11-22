import { render, screen } from "@testing-library/react";
import { Header, type Props } from "./Header";

describe("<Header />", () => {
  it("should render the header", () => {
    setupComponent({ header: "My Header" });

    expect(screen.getByText("My Header")).toBeVisible();
  });

  it("should render the subheader when provided", () => {
    setupComponent({ header: "My Header", subheader: "My Subheader" });

    expect(screen.getByText("My Subheader")).toBeVisible();
  });
});

const setupComponent = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    header: "Default Header",
    ...props,
  };
  render(<Header {...defaultProps} />);
};
