import FollowComp from "../../Components/FollowComp/FollowComp";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const Following = () => {
  return (
    <div>
      <Header />
      <div className="max-w-2xl mx-auto rounded-lg mt-4 bg-white px-3 py-5 shadow-md">
        <h2 className="px-2 text-2xl font-bold mb-3">Following</h2>
        <FollowComp />
        <FollowComp />
        <Footer />
      </div>
    </div>
  );
};

export default Following;
