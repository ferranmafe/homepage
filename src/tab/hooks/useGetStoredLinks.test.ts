/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook, waitFor } from "@testing-library/react";
import { useGetStoredLinks } from "./useGetStoredLinks";
import { LINKS_KEY } from "../../types";

describe("useGetStoredLinks", () => {
  beforeEach(() => {
    (window as any).chrome = {
      storage: {
        local: {
          get: jest.fn().mockResolvedValue({
            [LINKS_KEY]: [
              {
                url: "http://foo.com",
                title: "foo",
                group: "Everything",
              },
            ],
          }),
        },
        onChanged: {
          addListener: jest.fn(),
          removeListener: jest.fn(),
        },
      },
    };
  });

  it("should return empty data on start", () => {
    const { result } = setupHook();

    expect(result.current.config).toEqual([]);
  });
  it("should fetch data local store", async () => {
    const { result } = setupHook();

    await waitFor(() => {
      expect(result.current.config).toEqual([
        {
          name: "Everything",
          items: [
            {
              title: "foo",
              link: "http://foo.com",
              originalIndex: 0,
            },
          ],
        },
      ]);
    });
  });
});

const setupHook = () => {
  return renderHook(() => useGetStoredLinks());
};
