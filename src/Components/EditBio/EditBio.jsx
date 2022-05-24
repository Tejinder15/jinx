import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { editBio } from "../../redux/thunks/authThunk";
const EditBio = ({ setEditModal, profile, newBio, setNewBio }) => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const editHandler = async (e) => {
    e.preventDefault();
    dispatch(editBio({ newBio, token }));
    setEditModal(false);
    setNewBio("");
  };
  return (
    <div className="modalback w-full bg-black absolute z-10 top-16 left-0 bg-opacity-60 flex justify-center items-center">
      <div className="absolute bg-white p-4 z-20 rounded-lg shadow-lg max-w-sm ">
        <MdClose className="text-2xl" onClick={() => setEditModal(false)} />
        <div className="mt-2 flex mb-3">
          <div className="w-20">
            <img
              src={profile}
              alt="profile"
              className="h-20 w-20 max-full object-cover rounded-full"
            />
          </div>
          <textarea
            rows="5"
            cols="30"
            className="p-2 resize-none ml-3 bg-stone-100 outline-none"
            placeholder="What's Happening?"
            value={newBio}
            onChange={(e) => setNewBio(e.target.value)}
          />
        </div>
        <button
          className="bg-orange-500 py-2 px-5 rounded-sm text-white float-right hover:bg-orange-600"
          onClick={(e) => editHandler(e)}
        >
          Update Bio
        </button>
      </div>
    </div>
  );
};

export default EditBio;
