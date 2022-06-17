import { MdFavorite, MdBookmark, MdTextsms, MdShare } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dislikePost, likePost } from "../../redux/thunks/postThunk";
import { addBookmark, delBookmark } from "../../redux/thunks/bookThunk";
const Posts = ({ content, profile, username, postid, likedBy }) => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const { bookmarks } = useSelector((state) => state.bookmarks);

  const navigate = useNavigate();

  const addBookmarkHandler = (postid) => {
    dispatch(addBookmark({ postid, token }));
  };

  const delBookmarkHandler = (postid) => {
    dispatch(delBookmark({ postid, token }));
  };

  const likeHandler = async (postid) => {
    dispatch(likePost({ postid, token }));
  };

  const dislikeHandler = async (postid) => {
    dispatch(dislikePost({ postid, token }));
  };

  const shareHandler = (postid) => {
    navigator.clipboard.writeText(`https://jinxb.netlify.app/post/${postid}`);
  };

  return (
    <div className="max-w-xl shadow-xl mb-5 bg-white rounded-lg px-1">
      <div className="flex items-center px-3 py-2">
        <div className="w-16">
          <img
            src={user.username === username ? user.profile : profile}
            alt="user_post"
            className="rounded-full max-w-full object-cover h-14 w-14"
          />
        </div>
        <div className="pl-2">
          <p className="font-semibold text-slate-700 mb-auto">{username}</p>
        </div>
      </div>
      <div className="px-1">
        <p className="py-2 px-4">{content}</p>
      </div>
      <div className="flex items-center p-2 justify-between">
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
        <button
          className="text-2xl mx-1 ml-3 text-slate-400"
          onClick={() => shareHandler(postid)}
        >
          <MdShare />
        </button>
        {bookmarks.some((item) => item._id === postid) ? (
          <button
            className="text-2xl text-orange-500"
            onClick={() => delBookmarkHandler(postid)}
          >
            <MdBookmark />
          </button>
        ) : (
          <button
            className="text-2xl text-slate-400"
            onClick={() => addBookmarkHandler(postid)}
          >
            <MdBookmark />
          </button>
        )}
      </div>
    </div>
  );
};

export { Posts };
