import type { Room, RoomResponse } from "../interface";

export const parseRoomResponse = (response: RoomResponse): Room => {
  return {
    ...response,
    checkInDate: new Date(response.checkInDate),
    checkOutDate: new Date(response.checkOutDate),
  };
};
