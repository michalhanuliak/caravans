import { fetcher } from "./fetcher";
import useSWR from "swr";

// TODO: Add error handling
export function useCaravansData() {
  return useSWR("/api/data", fetcher);
}
