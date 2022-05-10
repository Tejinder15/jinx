import axios from "axios";

const loadBookmarks = async (token,bookmarkDispatch) => {
    try {
      const response = await axios.get("/api/users/bookmark", {
        headers: { authorization: token },
      });
      if(response.status === 200){
          bookmarkDispatch({type:'LOAD',payload:{ bookmarks:response.data.bookmarks}});
      }
    } catch (error) {
      console.error(error);
    }
};

export {loadBookmarks};