import type { GroupList } from "../types";
import { useEffect, useState } from "react";
import { LINKS_KEY, type Link, type LinksList } from "../../types";

const DEFAULT_GROUP_TITLE = "Everything";

const mapLocalStorageToConfig = (result: LinksList) => {
  const resultsPerGroup: Record<string, Link[]> = {};
  for (const item of result[LINKS_KEY]) {
    if (resultsPerGroup[item.group]) {
      resultsPerGroup[item.group].push(item);
    } else {
      resultsPerGroup[item.group] = [item];
    }
  }
  return Object.entries(resultsPerGroup).map(([group, items]) => ({
    name: group === "" ? DEFAULT_GROUP_TITLE : group,
    items: items.map((item: Link) => ({
      title: item.title,
      link: item.url,
    })),
  }));
};

export const useGetStoredLinks = (): {
  config: GroupList;
  setConfig: (group: GroupList) => void;
} => {
  const [config, setConfig] = useState<GroupList>([]);

  useEffect(() => {
    chrome.storage.local.get([LINKS_KEY]).then((result: LinksList) => {
      setConfig(mapLocalStorageToConfig(result));
    });
  }, []);

  return { config, setConfig };
};
