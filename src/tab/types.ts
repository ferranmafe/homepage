export type Item = {
  title: string;
  link: string;
  icon?: React.ReactNode;
};

export type Group = {
  name: string;
  items: Item[];
};

export type GroupList = Group[];
