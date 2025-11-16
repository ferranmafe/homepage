import { GroupContainer } from "./GroupContainer";
import type { Group, GroupList } from "../types";
import { useEffect, useState } from "react";
import { type Link, LINKS_KEY } from "../../types";

export const App = () => {
  const [config, setConfig] = useState<GroupList>([]);

  useEffect(() => {
    chrome.storage.local
      .get(["links"])
      .then((result: { [LINKS_KEY]: Link[] }) => {
        const tempConfig: Group = {
          name: "Everything",
          items: [],
        };
        result.links.map((item: Link) => {
          tempConfig.items.push({
            title: item.title,
            link: item.url,
          });
        });
        setConfig([tempConfig]);
      });
  }, []);

  return (
    <div className="h-screen bg-emerald-100 overflow-auto">
      <div className="py-10 px-24">
        <h1 className="text-3xl font-bold">My homepage</h1>
        <div className="pt-3 flex flex-row flex-wrap justify-between ">
          {config.map((group: Group) => (
            <GroupContainer group={group} />
          ))}
        </div>
      </div>
    </div>
  );
};
