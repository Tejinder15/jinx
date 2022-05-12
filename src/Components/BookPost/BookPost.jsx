import { MdBookmark } from "react-icons/md";
import { useAuth } from "../../Context/AuthContext/auth-context";
import { useBookmark } from "../../Context/BookContext/bookmark-context";
import { delFromBookmark } from "../../Utils/delfrombookmark";
const BookPost = ({ content, profile, username, postid }) => {
  const {
    authState: { token },
  } = useAuth();
  const { bookmarkDispatch } = useBookmark();

  const delHandler = (postid) => {
    delFromBookmark(postid, token, bookmarkDispatch);
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
        <button className="text-2xl text-orange-500 ml-auto">
          <MdBookmark onClick={() => delHandler(postid)} />
        </button>
      </div>
    </div>
  );
};

export { BookPost };
