import { useLocation } from "react-router-dom";
const Filter = ({ setTrending, trending, setSortBy, sortBy }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? (
        <div className="rounded-lg shadow-md bg-white mt-5 fixed max-w-sm w-60 p-3">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-700 py-1 px-3">
              Filter
            </h2>
            <span
              className="text-gray-800 underline cursor-pointer"
              onClick={() => {
                setTrending(false);
                setSortBy("clear");
              }}
            >
              Clear
            </span>
          </div>
          <div className="py-3 px-4">
            Sort By:
            <div className="py-1 flex items-center">
              <input
                type="radio"
                name="date"
                id="newest"
                className="Cusinp"
                checked={sortBy === "newest"}
                onChange={() => {
                  setTrending(false);
                  setSortBy("newest");
                }}
              />
              <label htmlFor="newest" className="ml-2">
                Date Newest
              </label>
            </div>
            <div className="py-1 flex items-center">
              <input
                type="radio"
                name="date"
                id="oldest"
                className="Cusinp"
                checked={sortBy === "oldest"}
                onChange={() => {
                  setTrending(false);
                  setSortBy("oldest");
                }}
              />
              <label htmlFor="oldest" className="ml-2">
                Date Oldest
              </label>
            </div>
            <div className="py-1 flex items-center">
              <input
                type="radio"
                name="date"
                id="trending"
                className="Cusinp"
                checked={trending}
                onChange={() => {
                  setSortBy("");
                  setTrending(true);
                }}
              />
              <label htmlFor="trending" className="ml-2">
                Trending
              </label>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Filter;
