const bookReducer = (state,action) => {
    switch(action.type){
        case 'LOAD':
        return{
            ...state,
            bookmarks:action.payload.bookmarks
        };
        case 'ADD':
            return{
                ...state,
                bookmarks:action.payload.bookmarks
            };
        case 'REMOVE':
            return{
                ...state,
                bookmarks: action.payload.bookmarks
            };
            default:
                return state;
    }
}

export {bookReducer};