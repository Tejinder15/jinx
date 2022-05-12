import axios from "axios";

const likePost = async (postid,token,postDispatch) => {
    try {
      const response = await axios.post(
        `/api/posts/like/${postid}`,
        {},
        { headers: { authorization: token } }
      );
      if (response.status === 201) {
        postDispatch({ type: "LIKE", payload: { posts: response.data.posts } });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
};

export {likePost};