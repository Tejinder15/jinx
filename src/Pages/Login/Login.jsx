import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext/auth-context";
const Login = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const [userData, setUserData] = useState({ username: "", password: "" });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const formSubmissionHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        username: userData.username,
        password: userData.password,
      });
      if (response.status === 200) {
        authDispatch({
          type: "LOGIN",
          payload: {
            user: response.data.foundUser,
            token: response.data.encodedToken,
          },
        });
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.foundUser));
        navigate("/");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const guestHandler = (e, uname, pass) => {
    e.preventDefault();
    setUserData({ ...userData, username: uname, password: pass });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <div className="max-w-md p-8 rounded shadow-xl bg-white">
        <h1 className="text-5xl font-semibold text-center">Jinx</h1>
        <form onSubmit={formSubmissionHandler}>
          <div className="mt-3">
            <label htmlFor="username" className="text-slate-600">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="block border border-black p-2 rounded-sm"
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
            <input
              type="password"
              name="password"
              id="lpassword"
              required
              className="block border border-black p-2 rounded-sm"
              value={userData.password}
              onChange={changeHandler}
              autoComplete="off"
            />
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
            onClick={(e) => guestHandler(e, "adarshbalika", "adarshBalika123")}
          >
            Login in as Guest
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
