import { useQuery } from "@tanstack/react-query";
import { apiInstance } from "../../shared/api";
import { TComment } from ".";

export function getCommentbyId(id: number) {
  return useQuery({
    queryKey: ["comment", id],
    queryFn: async () => {
      const data = await apiInstance.get<TComment>(
        `${`item/${id}.json?print=pretty`}`
      );
      return data;
    },
    enabled: !!id,
  });
}
