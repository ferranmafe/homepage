import type { GroupList } from "../types";
import { useEffect, useState } from "react";
import { type Link, type LinksList } from "../../types";

export const useGetStoredLinks = (): {
  config: GroupList;
  setConfig: (group: GroupList) => void;
} => {
  const [config, setConfig] = useState<GroupList>([]);

  useEffect(() => {
    chrome.storage.local.get(["links"]).then((result: LinksList) => {
      setConfig([
        {
          name: "Everything",
          items: result.links.map((item: Link) => ({
            title: item.title,
            link: item.url,
          })),
        },
      ]);
    });
  }, []);

  return { config, setConfig };
};
