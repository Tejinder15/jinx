import { Header, Footer, LeftPanel } from "../../Components";

const Setting = () => {
  return (
    <div>
      <Header />
      <main className="max-w-screen-xl mx-auto pt-3 flex justify-between">
        <LeftPanel />
        <section className="max-w-xl mx-auto">
          <div className="w-144 mx-auto rounded-lg bg-white px-3 py-5 shadow-md">
            <h1 className="text-2xl font-semibold p-2">Settings</h1>
            <div>
              <div className="w-32 mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="profile"
                  className="w-32 h-32 rounded-full max-w-full object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <h2 className="font-semibold text-lg">Username</h2>
                <span className="p-2">First Last</span>
              </div>
              <div className="p-3">
                <h3 className="font-semibold">About</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Setting;
