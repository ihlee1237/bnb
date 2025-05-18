import axios from "axios";
import type {
  Accommodation,
  AccommodationRequest,
  AccommodationResponse,
  Auth,
} from "../interface";
import { parseAccommodationResponse } from "./utils";

export interface WrappedData<T> {
  data: T;
}

export interface RequestConfig {
  token?: string;
}

export const get = async <T>(url: string): Promise<T> => {
  try {
    const res = await axios.get<WrappedData<T>>(url);
    return res.data.data;
  } catch (error) {
    console.error("api get error", error);
    throw error;
  }
};

export const post = async <T, R, D>(url: string, data: D, config?: RequestConfig): Promise<R> => {
  const { token } = config || {};
  try {
    const res = await axios.post<T, R, WrappedData<D>>(
      url,
      { data },
      {
        headers: token
          ? {
              Authorization: `Bearer ${token}`,
            }
          : {},
      },
    );
    return res;
  } catch (error) {
    console.error("api post error", error);
    throw error;
  }
};

export const getAccommodations = async (): Promise<Accommodation[]> => {
  return (
    await get<AccommodationResponse[]>(`${process.env.NEXT_PUBLIC_API_URL}/api/accommodations`)
  ).map(parseAccommodationResponse);
};

export const postAccommodation = async (
  data: AccommodationRequest,
  config?: RequestConfig,
): Promise<void> => {
  const res = await post<WrappedData<Accommodation>, AccommodationResponse, AccommodationRequest>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/accommodations`,
    data,
    config,
  );
  console.log(res);
};

export const auth = async (id: string, pw: string): Promise<Auth> => {
  return await post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
    identifier: id,
    password: pw,
  });
};
