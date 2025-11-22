import type { GroupList } from "../types";
import { useEffect, useState } from "react";
import { LINKS_KEY, type Link, type LinksList } from "../../types";

const DEFAULT_GROUP_TITLE = "Everything";

const mapLocalStorageToConfig = (result: LinksList) => {
  const resultsPerGroup: Record<string, { link: Link; index: number }[]> = {};
  const links = result[LINKS_KEY] || [];

  links.forEach((item, index) => {
    if (resultsPerGroup[item.group]) {
      resultsPerGroup[item.group].push({ link: item, index });
    } else {
      resultsPerGroup[item.group] = [{ link: item, index }];
    }
  });

  return Object.entries(resultsPerGroup).map(([group, items]) => ({
    name: group === "" ? DEFAULT_GROUP_TITLE : group,
    items: items.map(({ link, index }) => ({
      title: link.title,
      link: link.url,
      originalIndex: index,
    })),
  }));
};

export const useGetStoredLinks = (): {
  config: GroupList;
  setConfig: (group: GroupList) => void;
} => {
  const [config, setConfig] = useState<GroupList>([]);

  useEffect(() => {
    const fetchLinks = () => {
      chrome.storage.local.get([LINKS_KEY]).then((result: LinksList) => {
        setConfig(mapLocalStorageToConfig(result));
      });
    };

    fetchLinks();

    const handleStorageChange = (changes: { [key: string]: Link[] }) => {
      if (changes[LINKS_KEY]) {
        fetchLinks();
      }
    };

    chrome.storage.onChanged.addListener(handleStorageChange);

    return () => {
      chrome.storage.onChanged.removeListener(handleStorageChange);
    };
  }, []);

  return { config, setConfig };
};
