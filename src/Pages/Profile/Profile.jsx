import { Header, Footer, LeftPanel, RightPanel } from "../../Components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadmypost } from "../../Utils/loadmypost";
import {
  MdFavorite,
  MdDelete,
  MdTextsms,
  MdShare,
  MdEdit,
  MdAddAPhoto,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { delPost } from "../../redux/thunks/postThunk";
import EditPost from "../../Components/EditPost/EditPost";
import { editProfile } from "../../redux/thunks/authThunk";
import EditBio from "../../Components/EditBio/EditBio";
import { Toaster } from "react-hot-toast";
const Profile = () => {
  const { user, token } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);
  const [myposts, setMyPosts] = useState([]);
  const [editMyPost, setEditMyPost] = useState({ id: "", content: "" });
  const [editModal, setEditModal] = useState(false);
  const [editPModal, setEditPModal] = useState(false);
  const [newBio, setNewBio] = useState("");
  const dispatch = useDispatch();

  const delPostHandler = async (postid) => {
    const username = user.username;
    dispatch(delPost({ postid, token, setMyPosts, username }));
  };

  useEffect(() => {
    loadmypost(user.username, setMyPosts);
  }, [user.username, posts]);

  const editModalHandler = (postid, content) => {
    setEditPModal(!editModal);
    setEditMyPost({ ...editMyPost, id: postid, content: content });
  };

  const imageHandler = async (e) => {
    try {
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
      data.append(
        "upload_preset",
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET ?? ""
      );

      fetch(process.env.REACT_APP_CLOUDINARY_API_URL ?? "", {
        method: "post",
        mode: "cors",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          const obj = {
            // ...visitingUser,
            data: data,
            profileImg: data.url,
          };

          dispatch(editProfile({ user, obj, token }));
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const bioModalHandler = () => {
    setEditModal(true);
    setNewBio(user.bio);
  };

  return (
    <div>
      <Header />
      <Toaster />
      <main className="max-w-screen-xl mx-auto pt-3 flex gap-4">
        <LeftPanel setMyPosts={setMyPosts} />
        <section className="max-w-xl mx-auto w-full md:mx-0">
          <div className="max-w-2xl mx-auto rounded-lg bg-white px-4 py-5 pb-12 shadow-md">
            <div>
              <div className="w-40 mx-auto relative">
                <img
                  src={
                    user.profile ||
                    `https://avatars.dicebear.com/api/bottts/${user.username}.svg`
                  }
                  alt="profile"
                  className="h-40 w-40 max-w-full object-cover rounded-full"
                />
                <label
                  htmlFor="profile_pic"
                  className="absolute right-2 bottom-1 text-2xl p-2 bg-gray-200 rounded-full cursor-pointer flex items-center justify-center"
                >
                  <MdAddAPhoto />
                  <input
                    type="file"
                    name="selprof"
                    id="profile_pic"
                    onChange={(e) => imageHandler(e)}
                    hidden
                  />
                </label>
              </div>
            </div>
            <div className="p-2 flex flex-col items-center justify-center">
              <h2 className="font-semibold text-2xl text-gray-800">
                {user.username}
              </h2>
              <div className="flex justify-between w-10/12 px-1">
                <div className="text-center">
                  <p className="text-gray-800 font-bold">{myposts.length}</p>
                  <p className="text-gray-700 ">Posts</p>
                </div>
                <Link to="/followers">
                  <div className="ml-6 text-center">
                    <p className="text-gray-800 font-bold">
                      {user.followers.length}
                    </p>
                    <p className="text-gray-700">Followers</p>
                  </div>
                </Link>
                <Link to="/following">
                  <div className="text-center">
                    <p className="text-gray-800 font-bold">
                      {user.following.length}
                    </p>
                    <p className="text-gray-700">Following</p>
                  </div>
                </Link>
              </div>
              <div className="flex items-center">
                <span className="px-2 text-sm text-gray-700 mt-1">
                  {user.bio}
                </span>
                <button
                  className="text-orange-500 text-xl"
                  onClick={bioModalHandler}
                >
                  <MdEdit />
                </button>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-center font-semibold text-gray-800 text-xl">
                Posts
              </h2>
              <div className="md:px-10 px-2">
                {myposts.length > 0 ? (
                  myposts.map((item) => (
                    <div
                      className="mt-5 bg-white rounded-lg px-1 border border-gray-400 mx-auto shadow-sm"
                      key={item.id}
                    >
                      <div className="flex items-center px-3 py-2">
                        <div className="w-16">
                          <img
                            src={
                              (user.username === item.username
                                ? user.profile
                                : item.profile) ||
                              `https://avatars.dicebear.com/api/bottts/${user.username}.svg?b=%23c4c4c4`
                            }
                            alt={item.profile + "_profile"}
                            className="rounded-full max-w-full object-cover h-14 w-14"
                          />
                        </div>
                        <div className="pl-2">
                          <p className="font-semibold text-slate-700">
                            {item.username}
                          </p>
                        </div>
                        <button
                          className="ml-auto text-xl text-slate-500"
                          onClick={() =>
                            editModalHandler(item._id, item.content)
                          }
                        >
                          <MdEdit />
                        </button>
                      </div>
                      <div className="px-1">
                        <p className="py-2 px-4">{item.content}</p>
                      </div>
                      <div className="flex items-center p-2 px-4 justify-between">
                        <button className="text-2xl mx-1 text-slate-400">
                          <MdFavorite />
                        </button>
                        <button className="text-2xl mx-1 ml-3 text-slate-400">
                          <MdTextsms />
                        </button>
                        <button className="text-2xl mx-1 ml-3 text-slate-400">
                          <MdShare />
                        </button>
                        <button
                          className="text-2xl text-slate-400"
                          onClick={() => delPostHandler(item._id)}
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <h1 className="text-center pt-4">No Posts Yet.</h1>
                )}
              </div>
            </div>
            {editPModal ? (
              <EditPost
                setEditPModal={setEditPModal}
                setEditMyPost={setEditMyPost}
                profile={user.profile}
                editMyPost={editMyPost}
              />
            ) : (
              ""
            )}
            {editModal ? (
              <EditBio
                setEditModal={setEditModal}
                profile={user.profile}
                newBio={newBio}
                setNewBio={setNewBio}
              />
            ) : (
              ""
            )}
          </div>
          <Footer />
        </section>
        <RightPanel />
      </main>
    </div>
  );
};

export default Profile;
