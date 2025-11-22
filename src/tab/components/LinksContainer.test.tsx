import { render, screen } from "@testing-library/react";
import { LinksContainer } from "./LinksContainer";
import { useGetStoredLinks } from "../hooks/useGetStoredLinks";
import type { Group } from "../types";

jest.mock("../hooks/useGetStoredLinks");
jest.mock("./GroupContainer", () => ({
  GroupContainer: ({ group }: { group: Group }) => (
    <div data-testid="group-container">{group.name}</div>
  ),
}));



describe("<LinksContainer />", () => {
  beforeEach(() => {
    jest.mocked(useGetStoredLinks).mockReturnValue({ config: [], setConfig: jest.fn() });
  });

  afterEach(() => {
    jest.mocked(useGetStoredLinks).mockClear();
  });

  it("should render a list of groups", () => {
    const mockConfig: Group[] = [
      { name: "Group 1", items: [] },
      { name: "Group 2", items: [] },
    ];

    jest.mocked(useGetStoredLinks).mockReturnValue({ config: mockConfig, setConfig: jest.fn() });

    render(<LinksContainer />);

    const groups = screen.getAllByTestId("group-container");
    expect(groups).toHaveLength(2);
    expect(groups[0]).toHaveTextContent("Group 1");
    expect(groups[1]).toHaveTextContent("Group 2");
  });

  it("should render nothing if config is empty", () => {
    jest.mocked(useGetStoredLinks).mockReturnValue({ config: [], setConfig: jest.fn() });

    render(<LinksContainer />);

    const groups = screen.queryAllByTestId("group-container");
    expect(groups).toHaveLength(0);
  });
});
