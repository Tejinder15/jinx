import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { oldest, newest, trending } from "../../redux/features/post/postSlice";
const Filter = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" || location.pathname === "/explore" ? (
        <div className="rounded-lg shadow-md bg-white mt-5 fixed max-w-sm w-60 p-3">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-700 py-1 px-3">
              Filter
            </h2>
            <span className="text-gray-800 underline">Clear</span>
          </div>
          <div className="py-3 px-4">
            Sort By:
            <div className="py-1 flex items-center">
              <input
                type="radio"
                name="date"
                id="newest"
                className="Cusinp"
                onChange={() => dispatch(newest())}
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
                onChange={() => dispatch(oldest())}
              />
              <label htmlFor="oldest" className="ml-2">
                Date Oldest
              </label>
            </div>
            <div className="py-1 flex items-center">
              <input
                type="checkbox"
                name="trending"
                id="trending"
                className="Checkinp"
                onChange={() => dispatch(trending())}
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
