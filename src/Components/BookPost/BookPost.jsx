import { MdFavorite, MdBookmark, MdTextsms, MdShare } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext/auth-context";
import { useBookmark } from "../../Context/BookContext/bookmark-context";
import { usePost } from "../../Context/PostContext/post-context";
import { delFromBookmark } from "../../Utils/delfrombookmark";
import { likePost } from "../../Utils/likepost";
import { dislikePost } from "../../Utils/dislikepost";
const BookPost = ({ content, profile, username, postid, likedBy }) => {
  const {
    authState: { user, token },
  } = useAuth();
  const { bookmarkDispatch } = useBookmark();

  const { postDispatch } = usePost();

  const navigate = useNavigate();

  const delHandler = (postid) => {
    delFromBookmark(postid, token, bookmarkDispatch);
  };

  const likeHandler = async (postid) => {
    likePost(postid, token, postDispatch);
  };

  const dislikeHandler = async (postid) => {
    dislikePost(postid, token, postDispatch);
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
