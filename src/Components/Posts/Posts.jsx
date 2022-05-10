import { MdFavorite, MdBookmark, MdTextsms, MdShare } from "react-icons/md";
import { useAuth } from "../../Context/AuthContext/auth-context";
import { useBookmark } from "../../Context/BookContext/bookmark-context";
import { addToBookmark } from "../../Utils/addtobookmark";
import { delFromBookmark } from "../../Utils/delfrombookmark";
const Posts = ({ content, profile, username, postid }) => {
  const {
    authState: { token },
  } = useAuth();

  const {
    bookmarkState: { bookmarks },
    bookmarkDispatch,
  } = useBookmark();

  const addBookmarkHandler = (postid) => {
    addToBookmark(postid, bookmarks, token, bookmarkDispatch);
  };

  const delBookmarkHandler = (postid) => {
    delFromBookmark(postid, bookmarks, token, bookmarkDispatch);
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
        <button className="text-2xl mx-1 text-slate-400">
          <MdFavorite />
        </button>
        <button className="text-2xl mx-1 ml-3 text-slate-400">
          <MdTextsms />
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
