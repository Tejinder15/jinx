import { Link, useNavigate, useLocation } from "react-router-dom";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { useState, useEffect } from "react";
import { loginUser } from "../../redux/thunks/authThunk";
import { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useSelector((state) => state.auth);
  const [showPass, setShowPass] = useState(false);
  const [userData, setUserData] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(loginUser(userData));
  };

  const guestHandler = (e, uname, pass) => {
    e.preventDefault();
    setUserData({ ...userData, username: uname, password: pass });
  };

  const togglePass = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  useEffect(() => {
    if (token && location.pathname === "/login") {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [token]);

  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <Toaster />
      <div className="max-w-md p-8 rounded shadow-xl bg-white">
        <h1 className="text-5xl font-semibold text-center">Jinx</h1>
        <form onSubmit={(e) => submitForm(e)}>
          <div className="mt-3">
            <label htmlFor="username" className="text-slate-600">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="w-full block border border-black p-2 rounded-sm"
              autoComplete="off"
              id="username"
              value={userData.username}
              onChange={changeHandler}
              required
              autoFocus
            />
          </div>
          <div className="mt-3">
            <label htmlFor="lpassword" className="text-slate-600">
              Password
            </label>
            <div className="flex border border-black rounded-sm max-w-xs">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                id="lpassword"
                className="w-10/12 border border-r-1 border-r-black p-2 rounded-sm"
                value={userData.password}
                onChange={changeHandler}
                required
                autoComplete="off"
              />
              <button className="mx-auto text-lg" onClick={togglePass}>
                {showPass ? <MdVisibility /> : <MdVisibilityOff />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="block py-2.5 px-4 mt-3 w-full rounded bg-orange-500 text-white hover:bg-orange-600"
          >
            Login
          </button>
          <button
            type="submit"
            className="block border-2 border-orange-500 py-2.5 px-4 mt-3 w-full rounded text-orange-500 hover:bg-orange-500 hover:text-white"
            onClick={(e) => guestHandler(e, "testuser", "test123")}
          >
            Use Credentials
          </button>
        </form>
        <p className="text-center mt-3">Don't Have An Account ?</p>
        <Link
          to="/signup"
          className="block text-orange-500 text-sm font-medium mt-2 text-center"
        >
          Create New Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
