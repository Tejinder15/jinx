import { MdPersonAdd } from "react-icons/md";
const Suggested = () => {
  return (
    <div className="w-80 mt-4 rounded-lg bg-white p-4 pb-10 fixed shadow-lg h-72">
      <h1 className="font-semibold text-lg text-slate-800">
        Suggested For You
      </h1>
      <div className="h-60 overflow-y-auto friendreqpanel">
        <div className="flex items-center border mt-3 p-1 rounded-lg">
          <div className="w-16">
            <img
              src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80"
              alt="avatar"
              className="rounded-full max-w-full object-cover h-16"
            />
          </div>
          <div className="pl-3">
            <p className="text-sm font-semibold">Username</p>
            <p className="text-xs text-gray-600">Followed by xyz.</p>
          </div>
          <div className="ml-auto p-3 bg-gray-200 rounded-full text-xl hover:bg-gray-300 text-orange-500">
            <MdPersonAdd />
          </div>
        </div>
        <div className="flex items-center border mt-3 p-1 rounded-lg">
          <div className="w-16">
            <img
              src="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="avatar"
              className="rounded-full max-w-full object-cover h-16"
            />
          </div>
          <div className="pl-3">
            <p className="text-sm font-semibold">Username</p>
            <p className="text-xs text-gray-600">Followed by xyz.</p>
          </div>
          <div className="ml-auto p-3 bg-gray-200 rounded-full text-xl hover:bg-gray-300 text-orange-500">
            <MdPersonAdd />
          </div>
        </div>
        <div className="flex items-center border mt-3 p-1 rounded-lg">
          <div className="w-16">
            <img
              src="https://images.unsplash.com/photo-1506014739647-c231072489c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt="avatar"
              className="rounded-full max-w-full object-cover h-16"
            />
          </div>
          <div className="pl-3">
            <p className="text-sm font-semibold">Username</p>
            <p className="text-xs text-gray-600">Followed by xyz.</p>
          </div>
          <div className="ml-auto p-3 bg-gray-200 rounded-full text-xl hover:bg-gray-300 text-orange-500">
            <MdPersonAdd />
          </div>
        </div>
        <div className="flex items-center border mt-3 p-1 rounded-lg">
          <div className="w-16">
            <img
              src="https://images.unsplash.com/photo-1506014739647-c231072489c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt="avatar"
              className="rounded-full max-w-full object-cover h-16"
            />
          </div>
          <div className="pl-3">
            <p className="text-sm font-semibold">Username</p>
            <p className="text-xs text-gray-600">Followed by xyz.</p>
          </div>
          <div className="ml-auto p-3 bg-gray-200 rounded-full text-xl hover:bg-gray-300 text-orange-500">
            <MdPersonAdd />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggested;
