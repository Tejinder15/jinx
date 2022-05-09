import Sidenav from "../Sidenav/Sidenav";
import Filter from "../Filter/Filter";

const LeftPanel = ({ upPost }) => {
  return (
    <aside className="max-w-xs hidden md:block box-content">
      <Sidenav setMyPosts={upPost} />
      <Filter />
    </aside>
  );
};

export { LeftPanel };
