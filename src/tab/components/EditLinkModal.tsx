import { useState } from "react";
import {
  Input,
  SaveButton,
  Header,
  Card,
  Footer,
} from "../../popup/components";
import type { Item } from "../types";

type Props = {
  onClose: () => void;
  item: Item;
  currentGroup: string;
  onSave: (
    title: string,
    url: string,
    group: string,
    originalIndex: number
  ) => Promise<void>;
};

export const EditLinkModal = ({
  onClose,
  item,
  currentGroup,
  onSave,
}: Props) => {
  const [title, setTitle] = useState(item.title);
  const [url, setUrl] = useState(item.link);
  const [group, setGroup] = useState(currentGroup);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    await onSave(title, url, group, item.originalIndex);
    setIsSaving(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[400px] overflow-hidden shadow-xl">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="p-6">
            <Header header="Edit Link" subheader="Update your link details" />

            <Card>
              <Input label="Title" onChange={setTitle} initialValue={title} />
              <Input label="URL" onChange={setUrl} initialValue={url} />
              <Input
                label="Group"
                onChange={setGroup}
                initialValue={group}
                placeholder="e.g., Work, Personal, Shopping"
              />
              <SaveButton onClick={handleSave} disabled={isSaving} />
            </Card>

            <Footer>Your links are saved locally in this extension</Footer>
          </div>
        </div>
      </div>
    </div>
  );
};
