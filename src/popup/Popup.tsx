import { useState } from "react";
import { Input, SaveButton, Header, Card, Footer } from "./components";
import { LINKS_KEY, type LinksList } from "../types";
import { useGetActiveTabData } from "./hooks/useGetActiveTabData";

export const Popup = () => {
  const [group, setGroup] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const { activeTab } = useGetActiveTabData();

  const handleSave = async () => {
    setIsSaving(true);
    chrome.storage.local.get([LINKS_KEY]).then((result: LinksList) => {
      const newLinks = [
        ...(result[LINKS_KEY] ?? []),
        { title: activeTab.title, url: activeTab.url, group },
      ];

      chrome.storage.local
        .set({
          [LINKS_KEY]: newLinks,
        })
        .then(() => {
          setIsSaving(false);
        });
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-6">
      <div className="w-96 mx-auto">
        <Header
          header="Save Link"
          subheader="Add the current page to your homepage"
        />

        <Card>
          <Input label="Title" readOnly initialValue={activeTab.title} />
          <Input label="URL" readOnly initialValue={activeTab.url} />
          <Input
            label="Group (optional)"
            onChange={setGroup}
            initialValue={group}
            placeholder="e.g., Work, Personal, Shopping"
          />
          <SaveButton onClick={handleSave} disabled={isSaving} />
        </Card>

        <Footer>Your links are saved locally in this extension</Footer>
      </div>
    </div>
  );
};
