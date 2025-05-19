import { describe, expect, it } from "vitest";
import { formatDate, formatDateRange, isSameMonth, isSameYear } from "./date";

describe("formatDate", () => {
  it("연도와 월을 포함하여 날짜를 표시 해야 함", () => {
    const date = new Date("2023-10-01");
    const result = formatDate(date, "full");
    expect(result).toBe("2023년 10월 1일");
  });

  it("월과 일을 포함하여 날짜를 표시 해야 함", () => {
    const date = new Date("2023-10-01");
    const result = formatDate(date, "month-day");
    expect(result).toBe("10월 1일");
  });

  it("연도와 월을 생략하고 일을 표시 해야 함", () => {
    const date = new Date("2023-10-01");
    const result = formatDate(date, "day");
    expect(result).toBe("1일");
  });
});

describe("formatDateRange", () => {
  it("같은 연도이면서 같은 월일 때 날짜 범위를 올바르게 표시 해야 함", () => {
    const currentYear = new Date().getFullYear();
    const startDate = new Date(`${currentYear}-10-01`);
    const endDate = new Date(`${currentYear}-10-31`);
    const result = formatDateRange(startDate, endDate);
    expect(result).toBe("10월 1일 ~ 31일");
  });

  it("같은 연도지만 다른 월일 때 날짜 범위를 올바르게 표시 해야 함", () => {
    const currentYear = new Date().getFullYear();
    const startDate = new Date(`${currentYear}-10-01`);
    const endDate = new Date(`${currentYear}-11-01`);
    const result = formatDateRange(startDate, endDate);
    expect(result).toBe("10월 1일 ~ 11월 1일");
  });

  it("다른 연도일 때 날짜 범위를 올바르게 표시 해야 함", () => {
    const startDate = new Date("2022-10-01");
    const endDate = new Date("2023-11-01");
    const result = formatDateRange(startDate, endDate);
    expect(result).toBe("2022년 10월 1일 ~ 2023년 11월 1일");
  });
});

describe("isSameYear", () => {
  it("같은 연도일 경우 true를 반환해야 함", () => {
    const date1 = new Date("2023-01-01");
    const date2 = new Date("2023-12-31");
    expect(isSameYear(date1, date2)).toBe(true);
  });

  it("다른 연도일 경우 false를 반환해야 함", () => {
    const date1 = new Date("2023-01-01");
    const date2 = new Date("2024-01-01");
    expect(isSameYear(date1, date2)).toBe(false);
  });
});

describe("isSameMonth", () => {
  it("같은 월일 경우 true를 반환해야 함", () => {
    const date1 = new Date("2023-10-01");
    const date2 = new Date("2023-10-31");
    expect(isSameMonth(date1, date2)).toBe(true);
  });

  it("다른 월일 경우 false를 반환해야 함", () => {
    const date1 = new Date("2023-10-01");
    const date2 = new Date("2023-11-01");
    expect(isSameMonth(date1, date2)).toBe(false);
  });
});
