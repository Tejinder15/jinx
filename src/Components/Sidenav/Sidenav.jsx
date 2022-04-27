import {
  MdOutlineHome,
  MdOutlineExplore,
  MdOutlineNotifications,
  MdOutlinePerson,
  MdClose,
} from "react-icons/md";
import { useState } from "react";
const Sidenav = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="w-full bg-white p-3 rounded-lg text-gray-700 sticky top-20 md:flex-col pl-8 px-12  py-10 shadow-md">
        <div className="flex justify-between mb-6 bg-orange-500 text-white p-2 rounded-md">
          <MdOutlineHome className="text-3xl" />
          <span className="text-xl text-left w-2/3">Home</span>
        </div>
        <div className="flex justify-between mb-6 p-2">
          <MdOutlineExplore className="text-3xl" />
          <span className="text-xl text-left w-2/3">Explore</span>
        </div>
        <div className="flex justify-between mb-6 p-2">
          <MdOutlineNotifications className="text-3xl" />
          <span className="text-xl text-left w-2/3">Notifications</span>
        </div>
        <div className="flex justify-between mb-6 p-2">
          <MdOutlinePerson className="text-3xl" />
          <span className="text-xl text-left w-2/3">Profile</span>
        </div>
        <div className="mx-auto">
          <button
            className="w-full rounded-md p-3 text-orange-500 border-2 border-orange-500"
            onClick={() => setModal(!modal)}
          >
            Post
          </button>
        </div>
      </div>
      {modal ? (
        <div className="absolute bg-white p-4 top-1/3 left-1/3 z-20 rounded-lg shadow-lg max-w-sm">
          <MdClose className="text-2xl" onClick={() => setModal(!modal)} />
          <div className="mt-2 flex mb-3">
            <div className="w-20">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="profile"
                className="h-20 w-20 max-full object-cover rounded-full"
              />
            </div>
            <textarea
              rows="5"
              cols="30"
              className="p-2 resize-none ml-3 bg-stone-100 outline-none"
              placeholder="What's Happening?"
            ></textarea>
          </div>
          <button className="bg-orange-500 py-2 px-5 rounded-sm text-white float-right hover:bg-orange-600">
            Post
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidenav;
