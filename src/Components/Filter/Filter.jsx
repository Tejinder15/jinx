import { MdFilterAlt } from "react-icons/md";
const Filter = () => {
  return (
    <div className="rounded-lg shadow-md bg-white mt-5 fixed max-w-sm w-64 p-3">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-700 py-1 px-3">Filter</h2>
        <MdFilterAlt className="text-gray-800" />
      </div>
      <div className="py-3 px-4">
        Sort By:
        <div className="py-1">
          <input type="radio" name="date" id="newest" />
          <label htmlFor="newest" className="ml-2">
            Date Newest
          </label>
        </div>
        <div className="py-1">
          <input type="radio" name="date" id="oldest" />
          <label htmlFor="oldest" className="ml-2">
            Date Oldest
          </label>
        </div>
        <div className="py-1">
          <input type="checkbox" name="trending" id="trending" />
          <label htmlFor="trending" className="ml-2">
            Trending
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
