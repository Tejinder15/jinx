const postReducer = (state,action) => {
    switch(action.type){
        case "LOAD":
            return {
                ...state,
                posts: action.payload.posts
            };
        case "UPLOAD":
            return {
                ...state,
                posts: action.payload.posts
            };
        case "DELETE":
            return{
                ...state,
                posts:action.payload.posts
            };
        default:
            return state;
    }
}

export {postReducer};