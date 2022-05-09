import Sidenav from "../Sidenav/Sidenav";
import Filter from "../Filter/Filter";
import { useEffect } from "react";

const LeftPanel = ({ setMyPosts }) => {
  return (
    <aside className="max-w-xs hidden md:block box-content">
      <Sidenav setMyPosts={setMyPosts} />
      <Filter />
    </aside>
  );
};

export { LeftPanel };
