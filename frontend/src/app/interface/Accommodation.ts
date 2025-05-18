import type { AccommodationResponse } from "./api/Accommodation";

export interface Accommodation extends Omit<AccommodationResponse, "checkInDate" | "checkOutDate"> {
  checkInDate: Date;
  checkOutDate: Date;
}
