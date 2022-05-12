import axios from "axios";

const followUser = async (followingId,user,token,authDispatch) => {
    try {
      const response = await axios.post(
        `/api/users/follow/${followingId}`,
        { user: user, followUser: user.following },
        { headers: { authorization: token } }
      );
      if (response.status === 200) {
        authDispatch({
          type: "FOLLOWING",
          payload: { user: response.data.user },
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
};

export {followUser};