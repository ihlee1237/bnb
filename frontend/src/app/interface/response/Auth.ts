import type { DateTimeString } from "../common";
import type { StrApiResponse } from "./strapi";

export interface Auth {
  jwt: string;
  user: User;
}

export interface User extends StrApiResponse {
  id: number;
  documentId: string;
  username: string;
  email: string;
  provider: "local";
  confirmed: boolean;
  blocked: boolean;
  createdAt: DateTimeString;
  updatedAt: DateTimeString;
  publishedAt: DateTimeString;
}
