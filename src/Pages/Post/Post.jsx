import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { usePost } from "../../Context/PostContext/post-context";
import { Header } from "../../Components";
import { Posts } from "../../Components";
import { MdDelete } from "react-icons/md";
import { useAuth } from "../../Context/AuthContext/auth-context";
import { addComment } from "../../Utils/addcomment";
import { deleteComment } from "../../Utils/deletecomment";

const Post = () => {
  const { postId } = useParams();
  const {
    postState: { posts },
    postDispatch,
  } = usePost();
  const navigate = useNavigate();

  const {
    authState: {
      user: { username },
      token,
    },
  } = useAuth();

  const [gotPost, setGotPost] = useState(null);
  const [comment, setComment] = useState("");

  const getThatPost = async () => {
    try {
      const response = await axios.get(`/api/posts/${postId}`);
      if (response.status === 200) {
        setGotPost(response.data.post);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addCommentHandler = (postId) => {
    if (token) {
      addComment(postId, token, comment, postDispatch);
      setComment("");
    } else {
      navigate("/login");
    }
  };

  const deleteCommentHandler = (commentId) => {
    if (token) {
      deleteComment(postId, commentId, token, postDispatch);
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    getThatPost();
    // eslint-disable-next-line
  }, [posts]);
  return (
    <div>
      <Header />
      <section className="max-w-xl mx-auto pb-16 bg-white p-3 rounded-md">
        {gotPost ? (
          <Posts
            content={gotPost.content}
            key={gotPost.id}
            profile={gotPost.profile}
            username={gotPost.username}
            postid={gotPost._id}
            likedBy={gotPost.likes.likedBy}
          />
        ) : null}
        <div className="border flex justify-between items-center rounded-md">
          <input
            type="text"
            name="comment"
            id="comment"
            placeholder="comment"
            className="p-2 rounded-md outline-none bg-slate-200 w-11/12"
            autoFocus
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <button
            className="bg-orange-500 p-2 rounded text-white"
            onClick={() => addCommentHandler(postId)}
          >
            Comment
          </button>
        </div>

        <div className="mt-3">
          {gotPost ? (
            gotPost.comments.length > 0 ? (
              gotPost.comments.map((item) => (
                <div
                  className="max-w-xl shadow-md border mb-5 bg-white rounded-lg px-1"
                  key={item._id}
                >
                  <div className="flex items-center px-3 py-2">
                    <div className="pl-2">
                      <p className="font-semibold text-slate-700 mb-auto">
                        {item.username}
                      </p>
                    </div>
                    {item.username === username && (
                      <button
                        className="ml-auto text-2xl text-slate-400 hover:text-red-500"
                        onClick={() => deleteCommentHandler(item._id)}
                      >
                        <MdDelete />
                      </button>
                    )}
                  </div>
                  <div className="px-1">
                    <p className="py-2 px-4">{item.text}</p>
                  </div>
                </div>
              ))
            ) : (
              <h2>No Comments on this Post.</h2>
            )
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default Post;
