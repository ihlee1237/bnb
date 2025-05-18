import type { DateTimeString, UrlString } from "../common";

export interface AccommodationResponse {
  id: number;
  name: string;
  description?: string;
  price: number;
  rating: number;
  checkInDate: DateTimeString;
  checkOutDate: DateTimeString;
  imageSrc: UrlString;
}

export type AccommodationRequest = Omit<AccommodationResponse, "id">;
