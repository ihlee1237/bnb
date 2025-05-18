import type { DateTimeString } from "../common";

export interface Auth {
  jwt: string;
  user: User;
}

export interface User {
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
