import { useInfiniteQuery } from "@tanstack/react-query";

import { Post } from "../types";
import axiosInstance from "../utils/axiosInstance";
import { queryKeys } from "./queryKeys";

const fetchData = async ({ pageParam }: { pageParam: number }) => {
  const response = await axiosInstance.get(
    `posts?_page=${pageParam}&_per_page=10`,
  );
  return response.data.map((post: Post) => ({ ...post, page: pageParam }));
};

const useInfinitePosts = () => {
  return useInfiniteQuery({
    queryKey: [queryKeys.useInfinitePosts],
    queryFn: fetchData,
    initialPageParam: 0,
    getNextPageParam: (_, allPages) => {
      return allPages.length;
    },
  });
};

export default useInfinitePosts;
