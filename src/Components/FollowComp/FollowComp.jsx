import { useDispatch, useSelector } from "react-redux";
import { unfollowUser } from "../../redux/thunks/authThunk";

const FollowComp = ({ id, username, profile }) => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const unfollowHandler = (followingId) => {
    dispatch(unfollowUser({ followingId, token }));
    // unFollowUser(followingId, token, authDispatch);
  };
  return (
    <div className="mb-2">
      <div className="flex justify-between items-center px-3 py-2 border rounded-md">
        <div className="w-24">
          <img
            src={profile}
            alt={username + "_profile"}
            className="rounded-full max-w-full object-cover h-24 w-24"
          />
        </div>
        <div className="p-3 ml-2">
          <p className="font-semibold">{username}</p>
        </div>
        <div className="ml-auto pr-3">
          <button
            className="bg-red-500 text-white py-2 px-3 rounded-sm"
            onClick={() => unfollowHandler(id)}
          >
            Unfollow
          </button>
        </div>
      </div>
    </div>
  );
};

export { FollowComp };
