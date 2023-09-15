import type { postsProps } from "@/redux/feature/posts/posts.types";

export const FilterData = (postsData: postsProps[]) => {
  const done = postsData.filter((item) => item.step === "done");
  const todo = postsData.filter((item) => item.step === "to-do");
  const working = postsData.filter((item) => item.step === "working");

  return {
    done,
    todo,
    working,
  };
};
