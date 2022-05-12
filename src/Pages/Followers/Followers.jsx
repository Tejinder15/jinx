import { Footer, Header } from "../../Components";
import { useAuth } from "../../Context/AuthContext/auth-context";
import { followUser } from "../../Utils/followuser";

const Followers = () => {
  const {
    authState: { user, token },
    authDispatch,
  } = useAuth();

  const followHandler = (followingId) => {
    followUser(followingId, token, authDispatch);
  };
  return (
    <div>
      <Header />
      <div className="max-w-2xl mx-auto rounded-lg mt-4 bg-white px-3 py-5 shadow-md">
        <h2 className="px-2 text-2xl font-bold mb-3">Followers</h2>
        {user.followers.length > 0 ? (
          user.followers.map((item) => (
            <div className="mb-2">
              <div className="flex justify-between items-center px-3 py-2 border rounded-md">
                <div className="w-24">
                  <img
                    src={item.profile}
                    alt={item.username + "_profile"}
                    className="rounded-full max-w-full object-cover h-24 w-24"
                  />
                </div>
                <div className="p-3 ml-2">
                  <p className="font-semibold">{item.username}</p>
                </div>
                <div className="ml-auto pr-3">
                  <button
                    className="bg-red-500 text-white py-2 px-3 rounded-sm"
                    onClick={() => followHandler(item._id)}
                  >
                    Follow
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2>You Have No Followers.</h2>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Followers;
