import type { DateTimeString, UrlString } from "../common";
import type { StrApiResponse } from "./strapi";

export interface RoomResponse extends StrApiResponse {
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
