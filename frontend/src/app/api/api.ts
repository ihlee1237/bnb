import axios from "axios";
import type { Auth, Room, RoomRequest, RoomResponse } from "../interface";

export interface WrappedData<T> {
  data: T;
}

export interface RequestConfig {
  token?: string;
  server?: boolean;
}

export const getHost = (server = false) => {
  return server ? process.env.NEXT_SERVER_API_URL : process.env.NEXT_PUBLIC_API_URL;
};

export const get = async <T>(url: string, server = false): Promise<T> => {
  try {
    const res = await axios.get<WrappedData<T>>(getHost(server) + url);
    return res.data.data;
  } catch (error) {
    console.error("api get error", error);
    throw error;
  }
};

export const post = async <T, R, D>(url: string, data: D, config?: RequestConfig): Promise<R> => {
  const { token, server } = config || {};
  try {
    const res = await axios.post<T, R, WrappedData<D>>(
      getHost(server) + url,
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

export const getRooms = async (): Promise<Room[]> => {
  return await get<RoomResponse[]>("/api/rooms");
};

export const getRoom = async (id: string, server = false) => {
  return await get<RoomResponse>(`/api/rooms/${id}`, server);
};

export const postRoom = async (data: RoomRequest, config?: RequestConfig): Promise<void> => {
  const res = await post<WrappedData<Room>, RoomResponse, RoomRequest>("/api/rooms", data, config);
  console.log(res);
};

export const auth = async (id: string, pw: string): Promise<Auth> => {
  return await post("/api/auth/local", {
    identifier: id,
    password: pw,
  });
};
