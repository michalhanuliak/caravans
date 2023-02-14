import { fetcher } from "./fetcher";
import useSWR from "swr";

export function useCaravansData() {
  return useSWR("/api/data", fetcher);
}
