import { useEffect, useState } from "react";
import { type Link } from "../../types";

export const useGetActiveTabData = (): {
  activeTab: Link;
  setActiveTab: (tab: Link) => void;
} => {
  const [activeTab, setActiveTab] = useState<Link>({
    url: "",
    title: "",
    group: "",
  });

  useEffect(() => {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      function (tabs: Link[]) {
        const activeTab = tabs[0];
        setActiveTab({ url: activeTab.url, title: activeTab.title, group: "" });
      }
    );
  }, []);

  return { activeTab, setActiveTab };
};
