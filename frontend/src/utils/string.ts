export const toKRW = (value: number): string => {
  return value.toLocaleString("ko-KR", {
    style: "currency",
    currency: "KRW",
  });
};
