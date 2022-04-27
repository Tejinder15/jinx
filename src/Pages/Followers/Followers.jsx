import FollowComp from "../../Components/FollowComp/FollowComp";
import Header from "../../Components/Header/Header";

const Followers = () => {
  return (
    <div>
      <Header />
      <div className="max-w-2xl mx-auto rounded-lg mt-4 bg-white px-3 py-5 shadow-md">
        <h2 className="px-2 text-2xl font-bold mb-3">Followers</h2>
        <FollowComp />
      </div>
    </div>
  );
};

export default Followers;
