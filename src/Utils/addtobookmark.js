import axios from "axios";

const addToBookmark = async (postid,bookmarks,token,bookmarkDispatch) => {
    try {
        const response = await axios.post(
        `/api/users/bookmark/${postid}`,
        { bookmarks: bookmarks },
        {
          headers: { authorization: token },
        }
      );
      if (response.status === 200) {
        bookmarkDispatch({
          type: "ADD",
          payload: { bookmarks: response.data.bookmarks },
        });
      } else {
        throw new Error();
      }
    } catch (error) {
        console.error(error);
    }
};

export {addToBookmark};