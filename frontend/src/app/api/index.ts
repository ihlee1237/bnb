import axios from "axios";
import type { Accommodation, AccommodationResponse } from "../interface";
import { parseAccommodationResponse } from "./utils";

export interface StrapiResponse<T> {
  data: T;
}

export const get = async <T>(url: string): Promise<T> => {
  try {
    const res = await axios.get<StrapiResponse<T>>(url);
    return res.data.data;
  } catch (error) {
    console.error("api get error", error);
    throw error;
  }
};

export const getAccommodations = async (): Promise<Accommodation[]> => {
  return (
    await get<AccommodationResponse[]>(`${process.env.NEXT_PUBLIC_API_URL}/api/accommodations`)
  ).map(parseAccommodationResponse);
};
