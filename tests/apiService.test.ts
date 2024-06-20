import { afterEach, describe, expect, it, vi } from "vitest";
import * as service from "../src/_apiService.ts";
import {
  getColumns as mockGetColumn,
  createBoard as mockCreateBoard,
} from "./mockFetches.ts";

const testBaseApiUrl = "http://localnose:9001/";

describe("The API board service", () => {
  it("can create a new board", () => {
    globalThis.fetch = vi
      .fn()
      .mockImplementation(() => Promise.resolve(mockCreateBoard));

    return service.createBoard().then((data) => {
      expect(data).toBeTruthy();
      expect(data).toContain("api/v1/board/");
    });
  });
});

describe("The API service columns", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

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

  it("can add a column", () => {
    const spy = vi.spyOn(globalThis, "fetch");

    service.apiAddColumn(testBaseApiUrl, testBoardId, "test column name", 1);

    const args = spy.mock.lastCall[1];
    expect(args.body).toBe("test column name");
  });

  it.skip("gracefully handles broken UUIDs", () => {
    expect(false).toBe(true);
  });
});
