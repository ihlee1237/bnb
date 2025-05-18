import type { Accommodation, AccommodationResponse } from "../interface";

export const parseAccommodationResponse = (response: AccommodationResponse): Accommodation => {
  return {
    ...response,
    checkInDate: new Date(response.checkInDate),
    checkOutDate: new Date(response.checkOutDate),
  };
};
