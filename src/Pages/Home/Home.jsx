import { Header, Footer, LeftPanel, Posts, RightPanel } from "../../Components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/thunks/postThunk";
import { sortByTrending } from "../../Utils/sortByTrending";
import { sortByDate } from "../../Utils/sortByDate";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);
  const [trending, setTrending] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const dispatch = useDispatch();
  const feedPosts = posts?.filter(
    (post) =>
      user.username === post.username ||
      user.following.some((following) => following.username === post.username)
  );
  const trendingSort = sortByTrending(feedPosts, trending);
  const dateSort = sortByDate(trendingSort, sortBy);
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <main className="max-w-screen-xl mx-auto flex justify-between">
        <LeftPanel
          setTrending={setTrending}
          trending={trending}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <section className="max-w-xl w-full mx-auto pb-16">
          <div className="px-3">
            {dateSort.length > 0 ? (
              dateSort.map((item) => (
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
