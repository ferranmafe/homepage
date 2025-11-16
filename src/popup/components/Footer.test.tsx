import { render, screen } from "@testing-library/react";
import { Footer, type Props } from "./Footer";

describe("<Footer />", () => {
  it("should render children content", () => {
    setupComponent({ children: <span>Footer note</span> });

    expect(screen.getByText("Footer note")).toBeVisible();
  });
});

const setupComponent = (props: Partial<Props> = {}) => {
  const useProps: Props = {
    children: <span>Footer text</span>,
    ...props,
  };

  render(<Footer {...useProps} />);
};
