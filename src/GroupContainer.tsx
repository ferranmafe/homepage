import type { Group, Item } from "./types";

export type Props = {
  group: Group;
};

export const GroupContainer = ({ group }: Props) => {
  const { name, items } = group;
  return (
    <div className="border rounded-lg h-64 w-96 my-4 bg-emerald-300">
      <div className="font-bold px-4 text-xl border-b py-2 bg-white rounded-t-lg">
        {name}
      </div>
      <div className="p-2">
        {items.map((item: Item, index: number) => (
          <>
            <a href={item.link}>
              <div
                className="flex items-center text-lg bg-emerald-200 p-3 border rounded-lg hover:bg-emerald-500 hover:cursor-pointer
            "
                key={item.title}
              >
                {item.icon}
                <div className="px-1" />
                {item.title}
              </div>
            </a>
            {index != items.length - 1 && <div className="my-2" />}
          </>
        ))}
      </div>
    </div>
  );
};
