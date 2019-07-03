import React, {useState} from "react";

function useLikeCount() {
    const {likeCount, setLikeCount}=useState(0);

    function makeLike() {
        setLikeCount(likeCount + 1)
    }

    return {likeCount,makeLike};
}

export function useLikeHook(event) {
    const {liked, setLike}=useState(false);

    return
}

