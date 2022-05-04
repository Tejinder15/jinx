import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LeftPanel from "../../Components/LeftPanel/LeftPanel";
import Posts from "../../Components/Posts/Posts";
import RightPanel from "../../Components/RightPanel/RightPanel";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="max-w-screen-xl mx-auto flex justify-between">
        <LeftPanel />
        <section className="max-w-xl mx-auto pb-16">
          <div className="px-3">
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
          </div>
          <Footer />
        </section>
        <RightPanel />
      </main>
    </div>
  );
};

export default Home;
