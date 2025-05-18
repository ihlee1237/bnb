import type { DateTimeString, UrlString } from "../common";

export interface RoomResponse {
  id: number;
  name: string;
  description?: string;
  price: number;
  rating: number;
  checkInDate: DateTimeString;
  checkOutDate: DateTimeString;
  imageSrc: UrlString;
}

export type RoomRequest = Omit<RoomResponse, "id">;
