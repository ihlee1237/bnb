import { describe, expect, it } from "vitest";
import { parseRoomResponse } from "./utils";

describe("utils", () => {
  it("should parse room response", () => {
    const roomResponse = {
      id: 1,
      name: "Room 1",
      description: "Description 1",
      price: 100,
      rating: 4.5,
      checkInDate: "2023-01-01T00:00:00Z",
      checkOutDate: "2023-01-02T00:00:00Z",
      imageSrc: "https://example.com/image.jpg",
    };
    const parsedRoom = parseRoomResponse(roomResponse);
    expect(parsedRoom).toEqual({
      ...roomResponse,
      checkInDate: new Date("2023-01-01T00:00:00Z"),
      checkOutDate: new Date("2023-01-02T00:00:00Z"),
    });
  });
});
