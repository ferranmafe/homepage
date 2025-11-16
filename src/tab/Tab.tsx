import { GroupContainer } from "./components/GroupContainer";
import type { Group } from "./types";
import { useGetStoredLinks } from "./hooks/useGetStoredLinks";

export const Tab = () => {
  const { config } = useGetStoredLinks();

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
