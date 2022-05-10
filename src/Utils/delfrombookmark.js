import axios from "axios";

const delFromBookmark = async (postid,bookmarks,token,bookmarkDispatch) => {
    try {
        const response = await axios.post(
        `/api/users/remove-bookmark/${postid}`,
        { bookmarks: bookmarks },
        {
          headers: { authorization: token },
        }
      );
      if (response.status === 200) {
        bookmarkDispatch({
          type: "REMOVE",
          payload: { bookmarks: response.data.bookmarks },
        });
      } else {
        throw new Error();
      }  
    } catch (error) {
        console.log(error);
    }
};

export {delFromBookmark};