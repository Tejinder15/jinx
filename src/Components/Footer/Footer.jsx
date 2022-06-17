import {
  MdOutlineHome,
  MdOutlineExplore,
  MdOutlineAddCircleOutline,
  MdBookmarkBorder,
  MdOutlinePerson,
  MdClose,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../../redux/thunks/postThunk";
const Footer = () => {
  const [modal, setModal] = useState(false);
  const { token, user } = useSelector((state) => state.auth);
  const [post, setPost] = useState({ content: "" });
  const dispatch = useDispatch();
  const getActiveLink = ({ isActive }) => ({
    color: isActive ? "rgb(249, 117, 22)" : "rgb(55,65,81)",
  });
  const UploadPost = async (e) => {
    e.preventDefault();
    setPost("");
    setModal(false);
    dispatch(addPost({ post, token }));
  };
  return (
    <>
      <div className="md:hidden w-full bg-white rounded-md fixed bottom-0 py-3 px-6 flex justify-between text-2xl z-10">
        <NavLink to="/" style={getActiveLink}>
          <MdOutlineHome />
        </NavLink>
        <NavLink to="/explore" style={getActiveLink}>
          <MdOutlineExplore />
        </NavLink>
        <MdOutlineAddCircleOutline onClick={() => setModal(!modal)} />
        <NavLink to="/bookmark" style={getActiveLink}>
          <MdBookmarkBorder />
        </NavLink>
        <NavLink to="/profile" style={getActiveLink}>
          <MdOutlinePerson />
        </NavLink>
      </div>
      {modal ? (
        <div className="modalback w-full bg-black absolute z-10 top-16 left-0 bg-opacity-60 flex justify-center items-center">
          <div className="absolute bg-white p-4 z-20 rounded-lg shadow-lg max-w-sm ">
            <MdClose className="text-2xl" onClick={() => setModal(!modal)} />
            <div className="mt-2 flex mb-3">
              <div className="w-14">
                <img
                  src={user.profile}
                  alt="profile"
                  className="h-14 w-14 max-full object-cover rounded-full"
                />
              </div>
              <textarea
                rows="5"
                cols="24"
                className="p-2 resize-none ml-3 bg-stone-100 outline-none"
                placeholder="What's Happening?"
                value={post.content}
                onChange={(e) => setPost({ ...post, content: e.target.value })}
              ></textarea>
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

export { Footer };
