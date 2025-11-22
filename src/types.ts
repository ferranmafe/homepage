export const LINKS_KEY: string = "links";

export type Link = {
  url: string;
  title: string;
  group: string;
};

export type LinksList = { [LINKS_KEY]: Link[] };
