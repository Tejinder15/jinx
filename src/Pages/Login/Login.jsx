import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <div className="max-w-md p-8 rounded shadow-xl bg-white">
        <h1 className="text-5xl font-semibold text-center">Jinx</h1>
        <form action="" method="post">
          <div className="mt-3">
            <label htmlFor="email" className="text-slate-600">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="block border border-black p-2 rounded-sm"
              required
              autoComplete="off"
              id="email"
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
              //   value={userData.password}
              //   onChange={changeHandler}
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
