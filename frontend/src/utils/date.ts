import { format } from "date-fns";

export const formatDate = (date: Date, level: "full" | "month-day" | "day" = "day"): string => {
  const templateMap = {
    full: "yyyy년 M월 d일",
    "month-day": "M월 d일",
    day: "d일",
  };
  const template = templateMap[level];
  return format(date, template);
};

export const formatDateRange = (startDate: Date, endDate: Date): string => {
  const now = new Date();

  const startFormat = isSameYear(now, startDate) ? "month-day" : "full";

  const endFormat = isSameYear(startDate, endDate)
    ? isSameMonth(startDate, endDate)
      ? "day"
      : "month-day"
    : "full";

  return `${formatDate(startDate, startFormat)} ~ ${formatDate(endDate, endFormat)}`;
};

export const isSameYear = (date1: Date, date2: Date): boolean => {
  return date1.getFullYear() === date2.getFullYear();
};

export const isSameMonth = (date1: Date, date2: Date): boolean => {
  return isSameYear(date1, date2) && date1.getMonth() === date2.getMonth();
};
