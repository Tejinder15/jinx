const sortByTrending = (posts,trending) => {
    if(trending){
        return [...posts].sort((a,b)=>parseInt(b.likes.likeCount) - parseInt(a.likes.likeCount));
    }else{
        return [...posts].reverse();
    }
};

export {sortByTrending};