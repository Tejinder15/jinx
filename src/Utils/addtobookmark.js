import axios from "axios";

const addToBookmark = async (postid,token,bookmarkDispatch) => {
    try {
        const response = await axios.post(
        `/api/users/bookmark/${postid}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      if (response.status === 200) {
        bookmarkDispatch({
          type: "ADD",
          payload: { bookmarks: response.data.bookmarks },
        });
        console.log(response);
      } else {
        throw new Error();
      }
    } catch (error) {
        console.error(error);
    }
};

export {addToBookmark};