import { useQuery } from "@tanstack/react-query";
import { apiInstance } from "../../../shared/api";
import { QueryClient } from "@tanstack/react-query";
export function getNewStories() {
  return useQuery({
    queryKey: ["newscomment"],
    queryFn: async () => {
      const data = await apiInstance.get<number[]>(
        "topstories.json?print=pretty"
      );
      console.log(data);
      return data;
    },
    refetchInterval: 1000 * 60,
  });
}
