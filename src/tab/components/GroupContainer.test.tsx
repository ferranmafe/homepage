/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from "@testing-library/react";
import { GroupContainer } from "./GroupContainer";
import type { Props } from "./GroupContainer";
import type { Group, Item } from "../types";

import userEvent from "@testing-library/user-event";
import { LINKS_KEY } from "../../types";

// Mock chrome storage
const mockGet = jest.fn();
const mockSet = jest.fn();
(window as any).chrome = {
  storage: {
    local: {
      get: mockGet,
      set: mockSet,
    },
  },
};

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
  beforeEach(() => {
    jest.clearAllMocks();
  });

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

  it("should delete an item", async () => {
    const user = userEvent.setup();
    const item1 = itemFabricator({ title: "item 1", link: "http://item1.com" });
    const item2 = itemFabricator({ title: "item 2", link: "http://item2.com" });

    const link1 = {
      title: "item 1",
      url: "http://item1.com",
      group: "Group 1",
    };
    const link2 = {
      title: "item 2",
      url: "http://item2.com",
      group: "Group 1",
    };

    mockGet.mockResolvedValue({
      [LINKS_KEY]: [link1, link2],
    });

    setupComponent({
      group: groupFabricator({
        items: [item1, item2],
      }),
    });

    const deleteButtons = screen.getAllByLabelText("delete");
    await user.click(deleteButtons[0]);

    expect(mockGet).toHaveBeenCalledWith([LINKS_KEY]);
    expect(mockSet).toHaveBeenCalledWith({
      [LINKS_KEY]: [link2],
    });
  });
});

const setupComponent = (props: Partial<Props> = {}) => {
  const useProps: Props = {
    group: groupFabricator(),
    ...props,
  };
  render(<GroupContainer {...useProps} />);
};
