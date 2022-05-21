import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <header className="bg-white h-16 sticky top-0 shadow-md mb-4">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between h-full px-4">
        <h1 className="text-3xl font-bold">Jinx</h1>
        <Link to="/profile">
          <div>
            <img
              src={user.profile}
              alt="avatar"
              className="rounded-full h-12 w-12 max-w-full object-cover"
            />
          </div>
        </Link>
      </nav>
    </header>
  );
};

export { Header };
