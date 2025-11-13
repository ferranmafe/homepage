export type Item = {
  title: string;
  link: string;
};

export type Group = {
  name: string;
  items: Item[];
};

export type GroupList = Group[];
