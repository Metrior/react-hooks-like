import React, {useState} from "react";

export const useLike = (defaultCount, defaultStatus, ) =>{
    const [likeCount, setLikeCount]=useState(defaultCount);
    const [likeStatus, setLikeStatus]=useState(defaultStatus);



    function addLike() {
        setLikeCount(likeCount + 1)
    }

    function removeLike() {
        setLikeCount(likeCount - 1)
    }

    function changeLikeStatus() {
        setLikeStatus(!likeStatus)
    }

    return {likeCount,likeStatus,addLike,removeLike,changeLikeStatus};
};
