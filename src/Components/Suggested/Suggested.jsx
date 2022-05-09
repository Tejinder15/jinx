import { MdPersonAdd } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext/auth-context";
const Suggested = () => {
  const {
    authState: { user },
  } = useAuth();
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      if (response.status === 200) {
        setUsers(
          response.data.users.filter((item) => item.username !== user.username)
        );
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => getUsers, []);
  return (
    <div className="w-80 mt-4 rounded-lg bg-white p-4 pb-10 fixed shadow-lg h-72">
      <h1 className="font-semibold text-lg text-slate-800">
        Suggested For You
      </h1>
      <div className="h-60 overflow-y-auto friendreqpanel">
        {users.map((item) => (
          <div
            className="flex items-center border mt-3 p-1 rounded-lg"
            key={item._id}
          >
            <div className="w-16">
              <img
                src={item.profile}
                alt={item.username}
                className="rounded-full max-w-full object-cover h-16"
              />
            </div>
            <div className="pl-3">
              <p className="text-sm font-semibold">{item.username}</p>
              <p className="text-xs text-gray-600">Followed by xyz.</p>
            </div>
            <div className="ml-auto p-3 bg-gray-200 rounded-full text-xl hover:bg-gray-300 text-orange-500">
              <MdPersonAdd />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggested;
