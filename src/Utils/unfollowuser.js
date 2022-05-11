import axios from "axios";

const unFollowUser = async (followingId,user,token,authDispatch) => {
    try {
      const response = await axios.post(
        `/api/users/unfollow/${followingId}`,
        { user: user, followUser: user.following },
        { headers: { authorization: token } }
      );
      if (response.status === 200) {
        authDispatch({
          type: "UNFOLLOWING",
          payload: { user: response.data.user },
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
};

export {unFollowUser};