import { useGetStoredLinks } from "../hooks/useGetStoredLinks";
import { GroupContainer } from "./GroupContainer";
import type { Group } from "../types";

export const LinksContainer = () => {
  const { config } = useGetStoredLinks();
  return (
    <div className="pt-3 flex flex-row flex-wrap justify-end gap-6">
      {config.map((group: Group) => (
        <GroupContainer key={group.name} group={group} />
      ))}
    </div>
  );
};
