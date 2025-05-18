import { format } from "date-fns";

export const formatDate = (date: Date, showYear = false, showMonth = true): string => {
  const template = `${showYear ? "yyyy년 " : ""}${showMonth ? "M월 " : ""}d일`;
  return format(date, template);
};

export const formatDateRange = (startDate: Date, endDate: Date): string => {
  return `${formatDate(startDate, !isSameYear(new Date(), startDate))}~${formatDate(endDate, !isSameYear(startDate, endDate), !isSameMonth(startDate, endDate))}`;
};

export const isSameYear = (date1: Date, date2: Date): boolean => {
  return date1.getFullYear() === date2.getFullYear();
};

export const isSameMonth = (date1: Date, date2: Date): boolean => {
  return isSameYear(date1, date2) && date1.getMonth() === date2.getMonth();
};
