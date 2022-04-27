import { MdFavorite, MdBookmark, MdTextsms, MdShare } from "react-icons/md";
const BookPost = () => {
  return (
    <div className="mt-5 bg-white rounded-lg px-1 border border-gray-400 mx-auto shadow-sm">
      <div className="flex items-center px-3 py-2">
        <div className="w-16">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="user_post"
            className="rounded-full max-w-full object-cover h-14 w-14"
          />
        </div>
        <div className="pl-2">
          <p className="font-semibold text-slate-700">Username</p>
          <p className="text-sm text-slate-500 font-regular">First Last</p>
        </div>
      </div>
      <div className="px-1">
        <p className="py-2 px-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ut
          dolorem laborum minima, molestias repudiandae possimus porro.
          Necessitatibus, ea error.
        </p>
      </div>
      <div className="flex items-center p-2 px-4 justify-between">
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

export default BookPost;
