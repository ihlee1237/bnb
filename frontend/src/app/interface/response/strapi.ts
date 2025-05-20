import type { DateTimeString } from "../common";

export interface StrApiResponse {
  documentId: string;
  publishedAt: DateTimeString;
  updatedAt: DateTimeString;
}
