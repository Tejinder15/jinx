const FriendRequest = () => {
  return (
    <div className="bg-white p-4 rounded-lg sticky top-16 shadow-md">
      <h1 className="font-semibold text-slate-800 pb-3 pl-2 text-lg">
        Friend Request
      </h1>
      <div className="h-72 overflow-y-auto friendreqpanel">
        <div className="border mb-4 p-2 rounded-md">
          <div className="flex">
            <div className="w-16">
              <img
                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="friend_avatar"
                className="rounded-md max-w-full object-cover h-16"
              />
            </div>
            <div className="px-2 py-1">
              <p className="text-slate-600 text-left">
                <span className="font-semibold text-slate-700 text">Rohan</span>{" "}
                wants to be friend.
              </p>
            </div>
          </div>
          <div className="flex justify-around p-2">
            <button className="bg-orange-500 px-3 py-2 rounded-md text-slate-100 hover:shadow-md text-sm">
              Accept
            </button>
            <button className="bg-slate-400 px-2 py-1 rounded-md text-slate-100 text-sm hover:shadow-md">
              Decline
            </button>
          </div>
        </div>
        <div className="border mb-4 p-2 rounded-md">
          <div className="flex">
            <div className="w-16">
              <img
                src="https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="friend_avatar"
                className="rounded-md max-w-full object-cover h-16"
              />
            </div>
            <div className="px-2 py-1">
              <p className="text-slate-600 text-left">
                <span className="font-semibold text-slate-700 text">Rohan</span>{" "}
                wants to be friend.
              </p>
            </div>
          </div>
          <div className="flex justify-around p-2">
            <button className="bg-orange-500 px-3 py-2 rounded-md text-slate-100 hover:shadow-md text-sm">
              Accept
            </button>
            <button className="bg-slate-400 px-2 py-1 rounded-md text-slate-100 text-sm hover:shadow-md">
              Decline
            </button>
          </div>
        </div>
        <div className="border mb-4 p-2 rounded-md">
          <div className="flex">
            <div className="w-16">
              <img
                src="https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="friend_avatar"
                className="rounded-md max-w-full object-cover h-16"
              />
            </div>
            <div className="px-2 py-1">
              <p className="text-slate-600 text-left">
                <span className="font-semibold text-slate-700 text">Rohan</span>{" "}
                wants to be friend.
              </p>
            </div>
          </div>
          <div className="flex justify-around p-2">
            <button className="bg-orange-500 px-3 py-2 rounded-md text-slate-100 hover:shadow-md text-sm">
              Accept
            </button>
            <button className="bg-slate-400 px-2 py-1 rounded-md text-slate-100 text-sm hover:shadow-md">
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
