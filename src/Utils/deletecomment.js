import axios from "axios";

const deleteComment = async (postId,commentId,token,postDispatch) => {
    try {
        const response = await axios.post(`/api/comments/delete/${postId+'/'+commentId}`,{},{headers:{authorization:token}});
        if(response.status === 201){
            postDispatch({type:"LOAD",payload:{posts:response.data.posts}});
        }
    } catch (error) {
        console.error(error);
    }
};

export {deleteComment};