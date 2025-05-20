import { describe, expect, it } from "vitest";
import { toKRW } from "./string";

describe("toKRW", () => {
  it("한화폐 단위로 변환", () => {
    const value = 123456789;
    const result = toKRW(value);
    expect(result).toBe("₩123,456,789");
  });
});
