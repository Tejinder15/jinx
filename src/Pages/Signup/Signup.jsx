const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <div className="max-w-xs p-8 rounded shadow-xl bg-white">
        <h1 className="text-5xl font-semibold text-center">Jinx</h1>
        <div className="flex mt-3">
          <div className="w-1/2 ">
            <label htmlFor="firstName" className="text-slate-600">
              First Name
            </label>
            <input
              type="text"
              required
              className="block border border-black p-2 rounded-sm w-full"
            />
          </div>
          <div className="w-1/2 ml-0.5">
            <label htmlFor="lastName" className="text-slate-600">
              Last Name
            </label>
            <input
              type="text"
              required
              className="block border border-black p-2 rounded-sm w-full"
            />
          </div>
        </div>
        <div className="mt-3">
          <label htmlFor="" className="text-slate-600">
            Email
          </label>
          <input
            type="email"
            required
            className="block border border-black p-2 rounded-sm w-full"
          />
        </div>
        <div className="mt-3">
          <label htmlFor="" className="text-slate-600">
            Password
          </label>
          <input
            type="password"
            required
            className="block border border-black p-2 rounded-sm w-full"
          />
        </div>
        <div className="mt-3">
          <label htmlFor="" className="text-slate-600">
            Confirm Password
          </label>
          <div className="flex border border-black rounded-sm">
            <input
              type="password"
              required
              className="border border-r-1 border-r-black p-2 rounded-sm"
            />
            <button className="mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clipRule="evenodd"
                />
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
              </svg>
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="block py-2.5 px-4 mt-3 w-full rounded bg-indigo-500 text-white hover:bg-indigo-600"
        >
          Signup
        </button>
        <p className="text-center mt-3">Already Have An Account ?</p>
        <button className="block text-indigo-500 font-medium mx-auto mt-2">
          Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
