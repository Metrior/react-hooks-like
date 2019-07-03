import React, {useState} from "react";

export const useLikeCount = (defaultCount, defaultStatus) =>{
    const [likeCount, setLikeCount]=useState(defaultCount);
    const [likeStatus, setLikeStatus]=useState(false);

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
