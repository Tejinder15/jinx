import { MdFavorite, MdBookmark, MdTextsms, MdShare } from "react-icons/md";
const Posts = ({ content, profile, username }) => {
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
        <button className="text-2xl text-slate-400">
          <MdBookmark />
        </button>
      </div>
    </div>
  );
};

export { Posts };
