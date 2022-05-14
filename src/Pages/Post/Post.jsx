import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { usePost } from "../../Context/PostContext/post-context";
import { Header } from "../../Components";
import { Posts } from "../../Components";

const Post = () => {
  const { postId } = useParams();
  const {
    postState: { posts },
  } = usePost();

  const [gotPost, setGotPost] = useState(null);

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

  const getComments = async () => {
    try {
      const response = await axios.get(`/api/comments/${postId}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getThatPost();
    getComments();
    console.log("inside effect");
  }, [posts]);
  return (
    <div>
      <Header />
      <section className="max-w-xl mx-auto pb-16 bg-white p-3">
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
        <div className="border flex justify-between items-center">
          <input
            type="text"
            name="comment"
            id="comment"
            autoFocus
            placeholder="comment"
            className="p-2 rounded-md outline-none bg-slate-200 w-11/12"
          />
          <button className="bg-orange-500 p-2 rounded text-white">
            Comment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Post;
