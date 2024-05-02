export type TStory = {
  by: string;
  descendants: number;
  id: number;
  kids: Array<number>;
  score: number;
  text?: string;
  time: number;
  title: string;
  type: "story";
  url?: string;
};
