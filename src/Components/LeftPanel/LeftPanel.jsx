import Sidenav from "../Sidenav/Sidenav";
import Filter from "../Filter/Filter";

const LeftPanel = ({
  setMyPosts,
  setTrending,
  trending,
  setSortBy,
  sortBy,
}) => {
  return (
    <aside className="max-w-xs hidden md:block box-content">
      <Sidenav setMyPosts={setMyPosts} />
      <Filter
        setTrending={setTrending}
        trending={trending}
        setSortBy={setSortBy}
        sortBy={sortBy}
      />
    </aside>
  );
};

export { LeftPanel };
