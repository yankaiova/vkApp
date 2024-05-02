import { useQuery } from "@tanstack/react-query";
import { apiInstance } from "../../shared/api";
import { TStory } from ".";

export function getStorybyId(id: number) {
  return useQuery({
    queryKey: ["story", id],
    queryFn: async () => {
      const data = await apiInstance.get<TStory>(
        `${`item/${id}.json?print=pretty`}`
      );
      return data;
    },
    enabled: !!id,
  });
}
