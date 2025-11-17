import type { GroupList } from "../types";
import { useEffect, useState } from "react";
import { LINKS_KEY, type Link, type LinksList } from "../../types";

export const useGetStoredLinks = (): {
  config: GroupList;
  setConfig: (group: GroupList) => void;
} => {
  const [config, setConfig] = useState<GroupList>([]);

  useEffect(() => {
    chrome.storage.local.get([LINKS_KEY]).then((result: LinksList) => {
      setConfig([
        {
          name: "Everything",
          items: result[LINKS_KEY].map((item: Link) => ({
            title: item.title,
            link: item.url,
          })),
        },
      ]);
    });
  }, []);

  return { config, setConfig };
};
