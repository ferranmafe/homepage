import { GroupContainer } from "./GroupContainer";
import { config } from "./config/work";
import type { Group } from "./types";

export const App = () => {
  return (
    <div className="h-screen bg-emerald-100">
      <div className="py-10 px-24">
        <h1 className="text-3xl font-bold">My homepage</h1>
        <div className="pt-3 flex flex-row flex-wrap justify-between">
          {config.map((group: Group) => (
            <GroupContainer group={group} />
          ))}
        </div>
      </div>
    </div>
  );
};
