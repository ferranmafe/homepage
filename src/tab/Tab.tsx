import { Header } from "./components/Header";
import { LinksContainer } from "./components/LinksContainer";

export const Tab = () => {
  return (
    <div className="h-screen bg-emerald-100 overflow-auto">
      <div className="py-10 px-24">
        <Header
          header="My homepage"
          subheader="A small window to my digital world"
        />
        <div>Main section</div>
        <LinksContainer />
      </div>
    </div>
  );
};
