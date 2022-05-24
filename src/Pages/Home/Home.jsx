import { Header, Footer, LeftPanel, Posts, RightPanel } from "../../Components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/thunks/postThunk";

const Home = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
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
                  likedBy={item.likes.likedBy}
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
