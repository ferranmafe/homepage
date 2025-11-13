import type { Group, Item } from "./types";

export type Props = {
  group: Group;
};

export const GroupContainer = ({ group }: Props) => {
  const { name, items } = group;
  return (
    <div className="border h-60 w-56">
      <div className="font-bold text-xl border-b p-2">{name}</div>
      <div className="p-2">
        {items.map((item: Item, index: number) => (
          <>
            <div className="text-base bg-white" key={item.title}>
              <a href={item.link}>{item.title}</a>
            </div>
            {index != items.length - 1 && <div className="my-2" />}
          </>
        ))}
      </div>
    </div>
  );
};
