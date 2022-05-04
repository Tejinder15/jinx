import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import LeftPanel from "../../Components/LeftPanel/LeftPanel";
import Footer from "../../Components/Footer/Footer";
const Explore = () => {
  return (
    <div>
      <Header />
      <main className="max-w-screen-xl mx-auto flex justify-between">
        <LeftPanel />
        <section className="max-w-xl mx-auto">
          <div className="max-w-2xl mx-auto rounded-lg px-3 md:pb-0 pb-14">
            <h1 className="text-2xl font-semibold p-2">Explore</h1>
            <div>
              <Posts />
              <Posts />
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Explore;
