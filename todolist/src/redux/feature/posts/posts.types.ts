type initialStateProps = {
  data: postsProps[];
  status: string;
  error: string | null;
};

type postsProps = {
  id: number;
  title: string;
  description: string;
  step: string;
  time: number;
  date: Date | string;
  pinColor: string;
};

export type { initialStateProps, postsProps };
