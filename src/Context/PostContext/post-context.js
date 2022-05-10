import {createContext,useContext,useReducer,useEffect} from "react";
import { postReducer } from "../../Reducer/post-reducer";
import axios from "axios";

const defaultValue = {posts:[]};

const PostContext = createContext(defaultValue);

const PostProvider = ({children}) => {
    const [postState,postDispatch] = useReducer(postReducer,defaultValue);
    const loadallpost = async () => {
        try {
                const response = await axios.get("/api/posts");
                if(response.status === 200){
                    const posts = response.data.posts;
                    postDispatch({type:"LOAD",payload:{posts}});
                }else{
                    throw new Error();
                }
        } catch (error) {
            console.error(error);
        }
    };

useEffect(()=>{
loadallpost();
// console.log("testing load");
},[]);
return(
    <PostContext.Provider value={{postState,postDispatch}}>
        {children}
    </PostContext.Provider>
);
};

const usePost = () => useContext(PostContext);

export {PostProvider,usePost};