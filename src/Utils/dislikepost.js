import axios from "axios";

const dislikePost = async (postid,token,postDispatch) => {
try {
      const response = await axios.post(
        `/api/posts/dislike/${postid}`,
        {},
        { headers: { authorization: token } }
      );
      if (response.status === 201) {
        postDispatch({
          type: "DISLIKE",
          payload: { posts: response.data.posts },
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
};

export {dislikePost};