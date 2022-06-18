import { Link, useNavigate } from "react-router-dom";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signupUser } from "../../redux/thunks/authThunk";
const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const [newUserData, setNewUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    cpassword: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setNewUserData({ ...newUserData, [name]: value });
  };

  const togglePass = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  const formSubmitHanlder = async (event) => {
    event.preventDefault();
    if (newUserData.password === newUserData.cpassword) {
      try {
        const response = await axios.post("/api/auth/signup", {
          firstName: newUserData.firstName,
          lastName: newUserData.lastName,
          username: newUserData.uname,
          password: newUserData.password,
        });
        if (response.status === 201) {
          // authDispatch({
          //   type: "SIGNUP",
          //   payload: {
          //     user: response.data.createdUser,
          //     token: response.data.encodedToken,
          //   },
          // });
          dispatch(signupUser(newUserData));

          localStorage.setItem("token", response.data.encodedToken);
          localStorage.setItem(
            "user",
            JSON.stringify(response.data.createdUser)
          );
          navigate("/");
          setTimeout(() => alert("Signed up"), 2000);
        } else {
          throw new Error();
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Password does not Match!!");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <div className="max-w-xs p-8 rounded shadow-xl bg-white">
        <h1 className="text-5xl font-semibold text-center">Jinx</h1>
        <form onSubmit={formSubmitHanlder}>
          <div className="flex mt-3">
            <div className="w-1/2 ">
              <label htmlFor="firstName" className="text-slate-600">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className="block border border-black p-2 rounded-sm w-full"
                value={newUserData.firstName}
                onChange={changeHandler}
                autoComplete="off"
                required
                autoFocus
              />
            </div>
            <div className="w-1/2 ml-0.5">
              <label htmlFor="lastName" className="text-slate-600">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                className="block border border-black p-2 rounded-sm w-full"
                value={newUserData.lastName}
                onChange={changeHandler}
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className="mt-3">
            <label htmlFor="username" className="text-slate-600">
              username
            </label>
            <input
              type="text"
              name="username"
              className="block border border-black p-2 rounded-sm w-full"
              value={newUserData.uname}
              onChange={changeHandler}
              required
              autoComplete="off"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="text-slate-600">
              Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              className="block border border-black p-2 rounded-sm w-full"
              value={newUserData.password}
              onChange={changeHandler}
              required
              autoComplete="off"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="cpassword" className="text-slate-600">
              Confirm Password
            </label>
            <div className="flex border border-black rounded-sm">
              <input
                type={showPass ? "text" : "password"}
                name="cpassword"
                className="border border-r-1 border-r-black p-2 rounded-sm"
                value={newUserData.cpassword}
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
            Signup
          </button>
        </form>
        <p className="text-center mt-3">Already Have An Account ?</p>
        <Link
          to="/login"
          className="block text-orange-500 font-medium mt-2 text-center"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
