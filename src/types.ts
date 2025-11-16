export const LINKS_KEY: string = "links";

export type Link = {
  url: string;
  title: string;
};

export type LinksList = { [LINKS_KEY]: Link[] };
