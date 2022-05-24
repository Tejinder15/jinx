import { MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/features/auth/authSlice";
const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
  };
  return (
    <header className="bg-white h-16 sticky top-0 shadow-md mb-4">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between h-full px-4">
        <h1 className="text-3xl font-bold">Jinx</h1>
        <button
          className="text-2xl text-slate-500 hover:text-red-600"
          onClick={logoutHandler}
        >
          <MdLogout />
        </button>
      </nav>
    </header>
  );
};

export { Header };
