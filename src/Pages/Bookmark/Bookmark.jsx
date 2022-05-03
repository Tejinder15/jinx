import BookPost from "../../Components/BookPost/BookPost";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LeftPanel from "../../Components/LeftPanel/LeftPanel";

const Bookmark = () => {
  return (
    <div>
      <Header />
      <main className="max-w-screen-xl mx-auto pt-3 flex justify-between">
        <LeftPanel />
        <section className="max-w-xl mx-auto">
          <div className="max-w-2xl mx-auto rounded-lg mt-4 bg-white px-3 py-5 shadow-md">
            <h1 className="text-2xl font-semibold p-2">Bookmarks</h1>
            <div className="mt-2 px-3">
              <BookPost />
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Bookmark;
