import axios from "axios";

const loadmypost = async (username,setMyPosts) => {
    try {
        const response = await axios.get(`/api/posts/user/${username}`);
        if(response.status === 200){
            setMyPosts(response.data.posts);
        }else{
            throw new Error();
        }
    } catch (error) {
        console.error(error);
    }
};

export {loadmypost};