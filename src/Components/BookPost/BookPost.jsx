import { MdFavorite, MdBookmark, MdTextsms, MdShare } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { delBookmark } from "../../redux/thunks/bookThunk";
import { likePost, dislikePost } from "../../redux/thunks/postThunk";
const BookPost = ({ content, profile, username, postid, likedBy }) => {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const delHandler = (postid) => {
    dispatch(delBookmark({ postid, token }));
  };

  const likeHandler = async (postid) => {
    dispatch(likePost({ postid, token }));
  };

  const dislikeHandler = async (postid) => {
    dispatch(dislikePost({ postid, token }));
  };
  return (
    <div className="mt-5 bg-white rounded-lg px-1 border border-gray-400 mx-auto shadow-sm">
      <div className="flex items-center px-3 py-2">
        <div className="w-16">
          <img
            src={profile}
            alt={username + "_post"}
            className="rounded-full max-w-full object-cover h-14 w-14"
          />
        </div>
        <div className="pl-2">
          <p className="font-semibold text-slate-700">{username}</p>
        </div>
      </div>
      <div className="px-1">
        <p className="py-2 px-4">{content}</p>
      </div>
      <div className="flex items-center p-2 px-4 justify-between">
        {likedBy.some((item) => item.username === user.username) ? (
          <button
            className="text-2xl mx-1 text-red-500"
            onClick={() => dislikeHandler(postid)}
          >
            <MdFavorite />
          </button>
        ) : (
          <button
            className="text-2xl mx-1 text-slate-400"
            onClick={() => likeHandler(postid)}
          >
            <MdFavorite />
          </button>
        )}
        <button
          className="text-2xl mx-1 ml-3 text-slate-400"
          onClick={() => navigate(`/post/${postid}`)}
        >
          <MdTextsms />
        </button>
        <button className="text-2xl mx-1 ml-3 text-slate-400">
          <MdShare />
        </button>
        <button className="text-2xl text-orange-500 ml-auto">
          <MdBookmark onClick={() => delHandler(postid)} />
        </button>
      </div>
    </div>
  );
};

export { BookPost };
