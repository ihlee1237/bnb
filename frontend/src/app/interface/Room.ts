import type { RoomResponse } from "./api/Room";

export interface Room extends Omit<RoomResponse, "checkInDate" | "checkOutDate"> {
  checkInDate: Date;
  checkOutDate: Date;
}
