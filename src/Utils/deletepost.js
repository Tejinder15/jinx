import axios from "axios";
import { loadmypost } from "./loadmypost";

const deletePost = async (postid,token,setMyPosts,username,postDispatch) => {
    try {
        const response = await axios.delete(`/api/posts/${postid}`,{headers:{authorization:token}});
        if(response.status === 201){
            loadmypost(username,setMyPosts);
            postDispatch({
          type: "DELETE",
          payload: { posts: response.data.posts },
        });
        }else{
            throw new Error();
        }
    } catch (error) {
        console.error(error);
    }
};

export {deletePost};