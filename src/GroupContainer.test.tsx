import { render, screen } from "@testing-library/react";
import { GroupContainer } from "./GroupContainer";
import type { Props } from "./GroupContainer";
import type { Group, Item } from "./types";

const itemFabricator = (item: Partial<Item> = {}): Item => {
  return {
    title: "example title",
    link: "http://foo.com",
    ...item,
  };
};

const groupFabricator = (group: Partial<Group> = {}): Group => {
  return {
    name: "Group 1",
    items: [itemFabricator()],
    ...group,
  };
};

describe("<GroupContainer />", () => {
  it("should render the component", () => {
    setupComponent({ group: groupFabricator({ name: "Example title" }) });

    expect(screen.getByText("Example title")).toBeVisible();
  });

  it("should render a list of items", () => {
    setupComponent({
      group: groupFabricator({
        items: [
          itemFabricator({ title: "item 1" }),
          itemFabricator({ title: "item 2" }),
          itemFabricator({ title: "item 3" }),
        ],
      }),
    });

    expect(screen.getByText("item 1")).toBeVisible();
    expect(screen.getByText("item 2")).toBeVisible();
    expect(screen.getByText("item 3")).toBeVisible();
  });
});

const setupComponent = (props: Partial<Props> = {}) => {
  const useProps: Props = {
    group: groupFabricator(),
    ...props,
  };
  render(<GroupContainer {...useProps} />);
};
