import { describe, expect, it, vi } from "vitest";
import * as service from "../src/_apiService.ts";
import { getColumns as mockGetColumn } from "./mockFetches.ts";

const testBaseApiUrl = "http://localnose:9001/";

describe("The API service", () => {
  const testBoardId = "6c9995fe-9e18-45b1-867b-bc44bdc3691c";
  it("gets column titles", () => {
    globalThis.fetch = vi.fn().mockImplementation((url: string) => {
      return new Promise((resolve, reject) => resolve(mockGetColumn));
    });

    fetch().then((input) => console.log("hey", input));
    console.log(mockGetColumn);

    return service.apiGetColumns(testBaseApiUrl, testBoardId).then((data) => {
      expect(data).toBeTruthy();
    });
  });
});
