import React from "react"
import useLikeCount from "../../hooks/useLikeCount";
import useLikeStatus from "../../hooks/useLikeStatus";

const Picture = ({defaultCount, defaultStatus})=>{

    const {liked, changeLikeStatus} = useLikeStatus(defaultStatus);
    const {likeCount,addLike} = useLikeCount(defaultCount);


    return(
        <div>
            <span>{likeCount}</span>
            <button onClick={addLike}>PRESS</button>
        </div>
    )
};

export default Picture