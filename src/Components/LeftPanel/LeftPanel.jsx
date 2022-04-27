import Filter from "../Filter/Filter";
import Sidenav from "../Sidenav/Sidenav";

const LeftPanel = () => {
  return (
    <aside className="max-w-xs hidden md:block box-content">
      <Sidenav />
      <Filter />
    </aside>
  );
};

export default LeftPanel;
