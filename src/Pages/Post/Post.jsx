import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "../../Components";
import { Posts } from "../../Components";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addComment, delComment } from "../../redux/thunks/postThunk";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const [gotPost, setGotPost] = useState(null);
  const [comment, setComment] = useState("");

  const addCommentHandler = () => {
    if (token) {
      dispatch(addComment({ postId, token, comment }));
      setComment("");
    } else {
      navigate("/login");
    }
  };

  const deleteCommentHandler = (commentId) => {
    if (token) {
      dispatch(delComment({ postId, commentId, token }));
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    setGotPost(posts.find((item) => item._id === postId));
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
            onClick={addCommentHandler}
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
                    {item.username === user.username && (
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
