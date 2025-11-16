import { render, screen } from "@testing-library/react";
import { Card, type Props } from "./Card";

describe("<Card />", () => {
  it("should render the component", () => {
    setupComponent();

    expect(screen.getByText("Card content")).toBeVisible();
  });

  it("should render custom children", () => {
    setupComponent({
      children: (
        <>
          <span>One</span>
          <span>Two</span>
        </>
      ),
    });

    expect(screen.getByText("One")).toBeVisible();
    expect(screen.getByText("Two")).toBeVisible();
  });
});

const setupComponent = (props: Partial<Props> = {}) => {
  const useProps: Props = {
    children: <div>Card content</div>,
    ...props,
  };

  render(<Card {...useProps} />);
};
