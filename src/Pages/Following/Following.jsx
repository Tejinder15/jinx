import { useSelector } from "react-redux";
import { FollowComp, Footer, Header } from "../../Components";

const Following = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <Header />
      <div className="max-w-2xl mx-auto rounded-lg mt-4 bg-white px-3 py-5 shadow-md">
        <h2 className="px-2 text-2xl font-bold mb-3">Following</h2>
        {user.following.length > 0 ? (
          user.following.map((item) => (
            <FollowComp
              key={item.id}
              id={item._id}
              username={item.username}
              profile={item.profile}
            />
          ))
        ) : (
          <h2>You Follow No One.</h2>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Following;
