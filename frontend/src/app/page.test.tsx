import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { RoomResponse } from "./interface";
import Home from "./page";

vi.mock("./components/ListingCard", () => {
  const React = require("react");
  return {
    ListingCard: ({ name }: { name: string }) => <div>{name}</div>,
  };
});

vi.mock("./api/api", () => {
  const today = new Date();
  const mockRooms: RoomResponse[] = [
    {
      id: 1,
      name: "Mock Room",
      price: 10000,
      rating: 4.8,
      imageSrc: "https://example.com/img.jpg",
      checkInDate: today.toISOString(),
      checkOutDate: today.toISOString(),
      documentId: "abc123",
      publishedAt: today.toISOString(),
      updatedAt: today.toISOString(),
    },
  ];
  return {
    getRooms: vi.fn().mockResolvedValue(mockRooms),
  };
});

describe("Home page", () => {
  it("숙소 목록 제목과 카드가 렌더링되어야 한다", async () => {
    render(<Home />);

    expect(screen.getByText("숙소 목록")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText((content) => content.includes("Mock Room"))).toBeInTheDocument();
    });
  });
});
