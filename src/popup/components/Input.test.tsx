import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input, type Props } from "./Input";

describe("<Input />", () => {
  it("should render the input with initial value", () => {
    setupComponent({ initialValue: "test value" });

    expect(screen.getByDisplayValue("test value")).toBeVisible();
  });

  it("should render label when provided", () => {
    setupComponent({ label: "Username" });

    expect(screen.getByText("Username")).toBeVisible();
  });

  it("should update value on user input", async () => {
    const user = userEvent.setup();
    setupComponent();

    const input = screen.getByRole("textbox");
    await user.type(input, "hello");

    expect(input).toHaveValue("hello");
  });

  it("should call onChange callback when value changes", async () => {
    const mockOnChange = jest.fn();
    const user = userEvent.setup();
    setupComponent({ onChange: mockOnChange });

    const input = screen.getByRole("textbox");
    await user.type(input, "test");

    expect(mockOnChange).toHaveBeenCalledWith("test");
  });

  it("should update when initialValue prop changes", async () => {
    const { rerender } = render(
      <Input initialValue="old" onChange={jest.fn()} />
    );

    expect(screen.getByDisplayValue("old")).toBeVisible();

    rerender(<Input initialValue="new" onChange={jest.fn()} />);

    expect(screen.getByDisplayValue("new")).toBeVisible();
  });

  it("should be read-only when readOnly prop is true", async () => {
    const user = userEvent.setup();
    setupComponent({ readOnly: true });

    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input.readOnly).toBe(true);
    await user.type(input, "new text");
    expect(input.value).toBe("");
  });

  it("should render placeholder text", () => {
    setupComponent({ placeholder: "Enter text..." });

    expect(screen.getByPlaceholderText("Enter text...")).toBeVisible();
  });
});

const setupComponent = (props: Partial<Props> = {}) => {
  const useProps: Props = {
    initialValue: "",
    onChange: jest.fn(),
    ...props,
  };

  render(<Input {...useProps} />);
};
