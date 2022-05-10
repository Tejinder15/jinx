import { BookPost, Header, Footer, LeftPanel } from "../../Components";
import { useEffect } from "react";
import { useAuth } from "../../Context/AuthContext/auth-context";
import { loadBookmarks } from "../../Utils/loadBookmarks";
import { useBookmark } from "../../Context/BookContext/bookmark-context";

const Bookmark = () => {
  const {
    authState: { token },
  } = useAuth();

  const {
    bookmarkState: { bookmarks },
    bookmarkDispatch,
  } = useBookmark();

  useEffect(() => {
    loadBookmarks(token, bookmarkDispatch);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Header />
      <main className="max-w-screen-xl mx-auto pt-3 flex justify-between">
        <LeftPanel />
        <section className="max-w-xl mx-auto">
          <div className="max-w-2xl mx-auto rounded-lg mt-4 bg-white px-3 py-5 shadow-md">
            <h1 className="text-2xl font-semibold p-2">Bookmarks</h1>
            <div className="mt-2 px-3">
              {bookmarks.length > 0 ? (
                bookmarks.map((item) => (
                  <BookPost
                    content={item.content}
                    key={item.id}
                    profile={item.profile}
                    username={item.username}
                    postid={item._id}
                  />
                ))
              ) : (
                <h2 className="font-semibold text-lg">No Bookmarks Yet 😢.</h2>
              )}
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Bookmark;
