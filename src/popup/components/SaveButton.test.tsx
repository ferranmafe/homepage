import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SaveButton, type Props } from "./SaveButton";

describe("<SaveButton />", () => {
  it("should render the component", () => {
    setupComponent();

    expect(screen.getByText("Save")).toBeVisible();
  });

  it("should render the component as disabled", () => {
    setupComponent({ disabled: true });

    expect(screen.getByText("Saving...")).toBeDisabled();
  });

  it("should call onClick when clicked", async () => {
    const mockOnClick = jest.fn();
    const user = userEvent.setup();
    setupComponent({ onClick: mockOnClick });

    await user.click(screen.getByText("Save"));

    expect(mockOnClick).toHaveBeenCalled();
  });
});

const setupComponent = (props: Partial<Props> = {}) => {
  const useProps: Props = {
    onClick: jest.fn(),
    disabled: false,
    ...props,
  };

  render(<SaveButton {...useProps} />);
};
