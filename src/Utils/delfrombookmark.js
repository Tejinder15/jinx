import axios from "axios";

const delFromBookmark = async (postid,token,bookmarkDispatch) => {
    try {
        const response = await axios.post(
        `/api/users/remove-bookmark/${postid}`,
        {},
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