/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook, waitFor } from "@testing-library/react";
import { useGetActiveTabData } from "./useGetActiveTabData";

describe("useGetActiveTabData", () => {
  beforeEach(() => {
    const queryMock = jest.fn().mockImplementation((_query: any, cb: any) => {
      setTimeout(() => cb([{ url: "http://foo.com", title: "foo" }]));
    });

    (window as any).chrome = {
      tabs: { query: queryMock },
      storage: { local: { get: jest.fn().mockResolvedValue({}) } },
    };
  });

  it("should return empty data on start", () => {
    const { result } = setupHook();

    expect(result.current.activeTab).toEqual({ url: "", title: "" });
  });

  it("should fetch data from active tab", async () => {
    const { result } = setupHook();

    await waitFor(() => {
      expect(result.current.activeTab).toEqual({
        url: "http://foo.com",
        title: "foo",
      });
    });
  });
});

const setupHook = () => {
  return renderHook(() => useGetActiveTabData());
};
