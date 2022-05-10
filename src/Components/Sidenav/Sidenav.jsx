import {
  MdOutlineHome,
  MdOutlineExplore,
  MdBookmarkBorder,
  MdOutlinePerson,
  MdClose,
} from "react-icons/md";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext/auth-context";
import { usePost } from "../../Context/PostContext/post-context";
import { loadmypost } from "../../Utils/loadmypost";

const Sidenav = ({ setMyPosts }) => {
  const [modal, setModal] = useState(false);
  const [post, setPost] = useState({ content: "" });
  const {
    authState: { token, user },
  } = useAuth();
  const { postDispatch } = usePost();

  const getActiveLink = ({ isActive }) => ({
    backgroundColor: isActive ? "#f97516" : "white",
    color: isActive ? "white" : "rgb(55,65,81)",
    display: "flex",
    justifyContent: "space-betweeen",
    alignItems: "center",
    padding: "0.5rem",
    borderRadius: "6px",
    marginBottom: "1.5rem",
  });

  const UploadPost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/posts",
        { postData: post },
        { headers: { authorization: token } }
      );
      if (response.status === 201) {
        setPost("");
        setModal(false);
        postDispatch({
          type: "UPLOAD",
          payload: { posts: response.data.posts },
        });
        loadmypost(user.username, setMyPosts);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="w-full bg-white p-3 rounded-lg sticky top-20 md:flex-col pl-8 px-12  py-10 shadow-md">
        <NavLink to="/" style={getActiveLink}>
          <MdOutlineHome className="text-3xl mr-4" />
          <span className="text-xl text-left w-2/3">Home</span>
        </NavLink>
        <NavLink to="/explore" style={getActiveLink}>
          <MdOutlineExplore className="text-3xl mr-4" />
          <span className="text-xl text-left">Explore</span>
        </NavLink>
        <NavLink to="/bookmark" style={getActiveLink}>
          <MdBookmarkBorder className="text-3xl mr-4" />
          <span className="text-xl text-left">Bookmark</span>
        </NavLink>
        <NavLink to="/profile" style={getActiveLink}>
          <MdOutlinePerson className="text-3xl mr-4" />
          <span className="text-xl text-left">Profile</span>
        </NavLink>
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
        <div className="modalback w-full bg-black absolute z-10 top-16 left-0 bg-opacity-60 flex justify-center items-center">
          <div className="absolute bg-white p-4 z-20 rounded-lg shadow-lg max-w-sm ">
            <MdClose className="text-2xl" onClick={() => setModal(!modal)} />
            <div className="mt-2 flex mb-3">
              <div className="w-20">
                <img
                  src={user.profile}
                  alt="profile"
                  className="h-20 w-20 max-full object-cover rounded-full"
                />
              </div>
              <textarea
                rows="5"
                cols="30"
                className="p-2 resize-none ml-3 bg-stone-100 outline-none"
                placeholder="What's Happening?"
                value={post.content}
                onChange={(e) => setPost({ ...post, content: e.target.value })}
              />
            </div>
            <button
              className="bg-orange-500 py-2 px-5 rounded-sm text-white float-right hover:bg-orange-600"
              onClick={UploadPost}
            >
              Post
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidenav;
