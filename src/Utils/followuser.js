import axios from "axios";

const followUser = async (followingId,token,authDispatch) => {
    try {
      const response = await axios.post(
        `/api/users/follow/${followingId}`,
        {},
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
      console.log(response);
    } catch (error) {
      console.error(error);
    }
};

export {followUser};