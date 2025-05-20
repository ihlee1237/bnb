import axios from "axios";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("axios");
const mockedAxios = axios as unknown as { get: any; post: any };

beforeAll(() => {
  process.env.NEXT_PUBLIC_API_URL = "http://mock.api";
  process.env.NEXT_SERVER_API_URL = "http://mock.server.api";
});

describe("api module", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("get", () => {
    it("should fetch and unwrap data", async () => {
      mockedAxios.get.mockResolvedValue({ data: { data: "result" } });
      const apiModule = await import("./api");
      const result = await apiModule.get<string>("/test-url");
      expect(result).toBe("result");
      expect(mockedAxios.get).toHaveBeenCalledWith("http://mock.api/test-url");
    });

    it("should throw on error", async () => {
      mockedAxios.get.mockRejectedValue(new Error("fail"));
      const apiModule = await import("./api");
      await expect(apiModule.get("/test-url")).rejects.toThrow("fail");
      expect(mockedAxios.get).toHaveBeenCalledWith("http://mock.api/test-url");
    });
  });

  describe("post", () => {
    it("should post data and return response", async () => {
      mockedAxios.post.mockResolvedValue("posted");
      const apiModule = await import("./api");
      const result = await apiModule.post<any, any, any>("/test-url", { foo: "bar" });
      expect(result).toBe("posted");
      expect(mockedAxios.post).toHaveBeenCalledWith(
        "http://mock.api/test-url",
        { data: { foo: "bar" } },
        { headers: {} },
      );
    });

    it("should include Authorization header if token is present", async () => {
      mockedAxios.post.mockResolvedValue("posted");
      const apiModule = await import("./api");
      await apiModule.post<any, any, any>("/test-url", { foo: "bar" }, { token: "abc" });
      expect(mockedAxios.post).toHaveBeenCalledWith(
        "http://mock.api/test-url",
        { data: { foo: "bar" } },
        { headers: { Authorization: "Bearer abc" } },
      );
    });
  });

  describe("getRooms", () => {
    it("방 목록을 올바르게 반환한다", async () => {
      const mockRooms = [{ id: 1 }, { id: 2 }];
      mockedAxios.get.mockResolvedValue({ data: { data: mockRooms } });
      const apiModule = await import("./api");
      const result = await apiModule.getRooms();
      expect(result).toEqual([
        { id: 1 },
        { id: 2 },
      ]);
      vi.resetModules();
    });
  });

  describe("postRoom", () => {
    it("방 생성 API가 정상적으로 호출된다", async () => {
      mockedAxios.post.mockResolvedValue({ id: 1 });
      const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
      const mockRoomRequest = { title: "test", price: 10000 } as any; // RoomRequest 타입에 맞게 최소 필드 작성
      const apiModule = await import("./api");
      await apiModule.postRoom(mockRoomRequest);
      expect(mockedAxios.post).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalled();
      logSpy.mockRestore();
    });
  });

  describe("auth", () => {
    it("인증 API가 정상적으로 호출된다", async () => {
      mockedAxios.post.mockResolvedValue({ id: "user" });
      const apiModule = await import("./api");
      const result = await apiModule.auth("id", "pw");
      expect(mockedAxios.post).toHaveBeenCalledWith(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
        { data: { identifier: "id", password: "pw" } },
        { headers: {} }
      );
      expect(result).toEqual({ id: "user" });
    });
  });
});
