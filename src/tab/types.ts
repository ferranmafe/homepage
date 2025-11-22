export type Item = {
  title: string;
  link: string;
  icon?: React.ReactNode;
  originalIndex: number;
};

export type Group = {
  name: string;
  items: Item[];
};

export type GroupList = Group[];
