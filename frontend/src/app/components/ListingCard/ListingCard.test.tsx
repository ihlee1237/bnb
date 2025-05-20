import { formatDateRange } from "@/utils/date";
import { toKRW } from "@/utils/string";
import { render, screen } from "@testing-library/react";
import { addDays } from "date-fns";
import { describe, expect, it } from "vitest";
import ListingCard from "./ListingCard";

describe("ListingCard", () => {
  const today = new Date();

  const tomorrow = addDays(today, 1);
  const props = {
    imageSrc: "https://example.com/image.jpg",
    price: 100000,
    rating: 4.5,
    name: "테스트 숙소",
    checkInDate: today.toISOString(),
    checkOutDate: tomorrow.toISOString(),
    documentId: "test-document-id",
    publishedAt: today.toISOString(),
    updatedAt: today.toISOString(),
  };

  it("숙소 정보가 정상적으로 렌더링되어야 한다", () => {
    render(<ListingCard {...props} />);

    expect(screen.getByAltText("테스트 숙소")).toBeInTheDocument();
    expect(screen.getByText("테스트 숙소")).toBeInTheDocument();
    expect(screen.getByText(toKRW(props.price))).toBeInTheDocument();
    expect(screen.getByText("1박")).toBeInTheDocument();
    expect(screen.getByText(`⭐ ${props.rating}`)).toBeInTheDocument();
    expect(
      screen.getByText(formatDateRange(new Date(props.checkInDate), new Date(props.checkOutDate))),
    ).toBeInTheDocument();
  });

  it("imageSrc나 name이 없으면 렌더링되지 않아야 한다", () => {
    const { container } = render(<ListingCard {...props} imageSrc={""} />);
    expect(container.firstChild).toBeNull();

    const { container: c2 } = render(<ListingCard {...props} name={""} />);
    expect(c2.firstChild).toBeNull();
  });
});
