const FollowComp = () => {
  return (
    <div className="mb-2">
      <div className="flex justify-between items-center px-3 py-2 border rounded-md">
        <div className="w-24">
          <img
            src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="avatar"
            className="rounded-full max-w-full object-cover h-24 w-24"
          />
        </div>
        <div className="p-3 ml-2">
          <p className="font-semibold">Username</p>
          <p className="text-gray-700">First Last</p>
        </div>
        <div className="ml-auto pr-3">
          <button className="bg-orange-500 text-white py-2 px-3 rounded-sm">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export { FollowComp };
