import axios from "axios";

const addComment = async (postId,token,commentData,postDispatch) => {
    try {
        const response = await axios.post(`/api/comments/add/${postId}`,{commentData},{headers:{authorization:token}});
        if(response.status === 201){
            postDispatch({type:"LOAD",payload:{posts:response.data.posts}});
        }else{
            throw new Error();
        }
    } catch (error) {
        console.error(error);
    }
};

export {addComment};