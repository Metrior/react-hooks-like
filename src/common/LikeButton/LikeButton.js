import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import {useLikeCount} from "../../hooks/useLikeCount";
// import {useLikeStatus} from "../../hooks/useLikeStatus";

const LikeButton = ({defaultCount, defaultStatus})=>{

    // const {liked, changeLikeStatus} = useLikeStatus(defaultStatus);
    const {likeCount,likeStatus,addLike, removeLike, changeLikeStatus} = useLikeCount(defaultCount,defaultStatus);

    const button = useRef();
    useEffect(() => {
        if (likeStatus===true){
            button.current.style.color = "red"
        } else {
            button.current.style.color = "black"
        }
    });

    function handleAddLike(){
        changeLikeStatus();
        addLike();
    }

    function handleRemoveLike(){
        changeLikeStatus();
        removeLike();
    }

    return(
        <div>
            <span>{likeCount}</span>
            <button ref={button} onClick={likeStatus===false ? handleAddLike : handleRemoveLike}>PRESS</button>
        </div>
    )
};

LikeButton.propTypes = {
    defaultNumber: PropTypes.number
};

LikeButton.defaultProps = {
  defaultNumber: 0
};

export default LikeButton