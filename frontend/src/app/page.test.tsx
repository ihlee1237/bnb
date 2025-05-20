import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import * as api from "./api/api";
import Home from "./page";

vi.mock("./api/api");

describe("Home page", () => {
  const mockRooms = [
    {
      id: 1,
      name: "Mock Room",
      price: 10000,
      rating: 4.8,
      imageSrc: "https://example.com/img.jpg",
      checkInDate: new Date(),
      checkOutDate: new Date(Date.now() + 86400000),
    },
  ];

  beforeEach(() => {
    vi.spyOn(api, "getRooms").mockResolvedValue(mockRooms);
  });

  it("숙소 목록 제목과 카드가 렌더링되어야 한다", async () => {
    render(<Home />);

    expect(screen.getByText("숙소 목록")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Mock Room")).toBeInTheDocument();
    });
  });
});
