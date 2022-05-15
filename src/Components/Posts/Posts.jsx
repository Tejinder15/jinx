import { MdFavorite, MdBookmark, MdTextsms, MdShare } from "react-icons/md";
import { useAuth } from "../../Context/AuthContext/auth-context";
import { useBookmark } from "../../Context/BookContext/bookmark-context";
import { usePost } from "../../Context/PostContext/post-context";
import { addToBookmark } from "../../Utils/addtobookmark";
import { delFromBookmark } from "../../Utils/delfrombookmark";
import { dislikePost } from "../../Utils/dislikepost";
import { likePost } from "../../Utils/likepost";
const Posts = ({ content, profile, username, postid, likedBy }) => {
  const {
    authState: { user, token },
  } = useAuth();

  const {
    bookmarkState: { bookmarks },
    bookmarkDispatch,
  } = useBookmark();

  const { postDispatch } = usePost();

  const addBookmarkHandler = (postid) => {
    addToBookmark(postid, token, bookmarkDispatch);
  };

  const delBookmarkHandler = (postid) => {
    delFromBookmark(postid, token, bookmarkDispatch);
  };

  const likeHandler = async (postid) => {
    likePost(postid, token, postDispatch);
  };

  const dislikeHandler = async (postid) => {
    dislikePost(postid, token, postDispatch);
  };

  return (
    <div className="max-w-xl shadow-xl mb-5 bg-white rounded-lg px-1">
      <div className="flex items-center px-3 py-2">
        <div className="w-16">
          <img
            src={profile}
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
          <button className="text-2xl mx-1 text-red-500">
            <MdFavorite onClick={() => dislikeHandler(postid)} />
          </button>
        ) : (
          <button className="text-2xl mx-1 text-slate-400">
            <MdFavorite onClick={() => likeHandler(postid)} />
          </button>
        )}
        <button className="text-2xl mx-1 ml-3 text-slate-400">
          <MdTextsms onClick={() => console.log(postid)} />
        </button>
        <button className="text-2xl mx-1 ml-3 text-slate-400">
          <MdShare />
        </button>
        {bookmarks.some((item) => item._id === postid) ? (
          <button className="text-2xl text-orange-500">
            <MdBookmark onClick={() => delBookmarkHandler(postid)} />
          </button>
        ) : (
          <button className="text-2xl text-slate-400">
            <MdBookmark onClick={() => addBookmarkHandler(postid)} />
          </button>
        )}
      </div>
    </div>
  );
};

export { Posts };
