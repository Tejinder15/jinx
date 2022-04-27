import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ProfPost from "../../Components/ProfPost/ProfPost";
import LeftPanel from "../../Components/LeftPanel/LeftPanel";
import { MdSettings } from "react-icons/md";
const Profile = () => {
  return (
    <div>
      <Header />
      <main className="max-w-screen-xl mx-auto pt-3 flex gap-36">
        <LeftPanel />
        <section className="max-w-xl mx-auto md:mx-0">
          <div className="max-w-2xl mx-auto rounded-lg mt-4 bg-white px-4 py-5 shadow-md">
            <div className="flex justify-evenly">
              <div className="w-40">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="profile"
                  className="h-40 w-40 max-w-full object-cover rounded-full"
                />
              </div>
              <div className="px-2 flex flex-col items-center justify-center">
                <button className="ml-auto text-2xl p-2 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200">
                  <MdSettings />
                </button>
                <h2 className="font-semibold text-2xl text-gray-800">Andrea</h2>
                <div className="flex justify-between w-3/4 px-2">
                  <div className="text-center">
                    <p className="text-gray-800 font-bold">20</p>
                    <p className="text-gray-700 ">Posts</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-800 font-bold">20</p>
                    <p className="text-gray-700">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-800 font-bold">20</p>
                    <p className="text-gray-700">Following</p>
                  </div>
                </div>
                <p className="px-2 text-sm text-gray-700 mt-1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-center font-semibold text-gray-800 text-xl">
                Posts
              </h2>
              <div className="md:px-10 px-2">
                <ProfPost />
                <ProfPost />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
