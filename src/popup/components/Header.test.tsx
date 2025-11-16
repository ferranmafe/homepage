import { render, screen } from "@testing-library/react";
import { Header, type Props } from "./Header";

describe("<Header />", () => {
  it("should render the header text", () => {
    setupComponent({ header: "Header" });

    expect(screen.getByText("Header")).toBeVisible();
  });

  it("should render the subheader when provided", () => {
    setupComponent({ subheader: "Subheader text" });

    expect(screen.getByText("Subheader text")).toBeVisible();
  });
});

const setupComponent = (props: Partial<Props> = {}) => {
  const useProps: Props = {
    header: "Save Link",
    ...props,
  };

  render(<Header {...useProps} />);
};
