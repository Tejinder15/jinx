import { FollowComp, Footer, Header } from "../../Components";

const Followers = () => {
  return (
    <div>
      <Header />
      <div className="max-w-2xl mx-auto rounded-lg mt-4 bg-white px-3 py-5 shadow-md">
        <h2 className="px-2 text-2xl font-bold mb-3">Followers</h2>
        <FollowComp />
        <Footer />
      </div>
    </div>
  );
};

export default Followers;
