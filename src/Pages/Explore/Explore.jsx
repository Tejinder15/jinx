import { Header, Posts, LeftPanel, Footer } from "../../Components";
import { usePost } from "../../Context/PostContext/post-context";
import { useAuth } from "../../Context/AuthContext/auth-context";
const Explore = () => {
  const {
    postState: { posts },
  } = usePost();
  const {
    authState: { user },
  } = useAuth();
  const exceptMyPost = posts.filter((item) => item.username !== user.username);
  return (
    <div>
      <Header />
      <main className="max-w-screen-xl mx-auto flex justify-between">
        <LeftPanel />
        <section className="max-w-xl mx-auto">
          <div className="max-w-2xl mx-auto rounded-lg px-3 md:pb-0 pb-14">
            <h1 className="text-2xl font-semibold p-2">Explore</h1>
            <div>
              {exceptMyPost.length > 0 ? (
                exceptMyPost.map((item) => (
                  <Posts
                    key={item.id}
                    content={item.content}
                    username={item.username}
                    profile={item.profile}
                    postid={item._id}
                  />
                ))
              ) : (
                <h2>Nothing to Explore</h2>
              )}
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Explore;
