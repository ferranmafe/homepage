import { LINKS_KEY, type LinksList } from "../../types";
import type { Group, Item } from "../types";
import { FaEdit, FaTrash } from "react-icons/fa";

export type Props = {
  group: Group;
};

export const GroupContainer = ({ group }: Props) => {
  const { name, items } = group;

  const handleDeleteClick = (index: number) => {
    chrome.storage.local.get([LINKS_KEY]).then((result: LinksList) => {
      const links = result[LINKS_KEY];
      const updatedLinks = links.filter(
        (_, linkIndex: number) => linkIndex !== index
      );
      chrome.storage.local.set({ [LINKS_KEY]: updatedLinks });
    });
  };

  const handleEditClick = () => {
    console.log("Edit clicked");
  };

  return (
    <div className="border rounded-lg w-96 my-4 bg-emerald-300">
      <div className="font-bold px-4 text-xl border-b py-2 bg-white rounded-t-lg">
        {name}
      </div>
      <div className="p-2">
        {items.map((item: Item, index: number) => (
          <>
            <div
              className="flex items-center text-lg bg-emerald-200 p-3 border rounded-lg hover:bg-emerald-500 hover:cursor-pointer group"
              key={item.title}
            >
              <a href={item.link} className="flex items-center flex-grow">
                {item.icon}
                <div className="px-1" />
                {item.title}
              </a>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <FaEdit
                  className="hover:text-white"
                  onClick={handleEditClick}
                  aria-label="edit"
                />
                <FaTrash
                  className="hover:text-red-600"
                  onClick={() => handleDeleteClick(index)}
                  aria-label="delete"
                />
              </div>
            </div>
            {index != items.length - 1 && <div className="my-2" />}
          </>
        ))}
      </div>
    </div>
  );
};
