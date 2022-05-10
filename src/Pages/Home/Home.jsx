import { Header, Footer, LeftPanel, Posts, RightPanel } from "../../Components";
import { usePost } from "../../Context/PostContext/post-context";

const Home = () => {
  const {
    postState: { posts },
  } = usePost();
  return (
    <div>
      <Header />
      <main className="max-w-screen-xl mx-auto flex justify-between">
        <LeftPanel />
        <section className="max-w-xl mx-auto pb-16">
          <div className="px-3">
            {posts.length > 0 ? (
              posts.map((item) => (
                <Posts
                  content={item.content}
                  key={item.id}
                  profile={item.profile}
                  username={item.username}
                  postid={item._id}
                />
              ))
            ) : (
              <h1>Start Exploring Jinx.</h1>
            )}
          </div>
          <Footer />
        </section>
        <RightPanel />
      </main>
    </div>
  );
};

export default Home;
