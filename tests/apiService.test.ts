import { describe, expect, it, vi } from "vitest";
import * as service from "../src/_apiService.ts";
import { getColumns as mockGetColumn } from "./mockFetches.ts";

const testBaseApiUrl = "http://localnose:9001/";

describe("The API service", () => {
  const testBoardId = "6c9995fe-9e18-45b1-867b-bc44bdc3691c";
  it("gets column titles", () => {
    globalThis.fetch = vi
      .fn()
      .mockImplementation((url: string) => Promise.resolve(mockGetColumn));

    return service.apiGetColumns(testBaseApiUrl, testBoardId).then((data) => {
      expect(data).toBeTruthy();
      expect(data.length).toBe(3);
      expect(data[0].title).toBe("To do");
    });
  });

  it("gracefully handles broken UUIDs", () => {
    expect(false).toBe(true);
  });
});
