import type { AccommodationResponse } from "./api/AccommodationResponse";

export interface Accommodation extends Omit<AccommodationResponse, "checkInDate" | "checkOutDate"> {
  checkInDate: Date;
  checkOutDate: Date;
}
