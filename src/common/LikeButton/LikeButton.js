import React, {useEffect, useRef, memo} from "react";
import PropTypes from "prop-types";
import {useLike} from "../../hooks/useLike";

const LikeButton = ({defaultCount, defaultStatus, changeLike})=>{

    const {likeCount,likeStatus,addLike, removeLike, changeLikeStatus} = useLike(defaultCount,defaultStatus);

    const button = useRef();
    useEffect(() => {
        if (defaultStatus===true){
            button.current.style.color = "red"
        } else {
            button.current.style.color = "black"
        }
    });

    function clickLike () {
        changeLike(defaultStatus)
    }

    // function handleAddLike(){
    //     changeLikeStatus();
    //     addLike();
    // }
    //
    // function handleRemoveLike(){
    //     changeLikeStatus();
    //     removeLike();
    // }

    return(
        <div>
            <span>{defaultCount}</span>
            <button ref={button} onClick={clickLike}>PRESS</button>
        </div>
    )
};

LikeButton.propTypes = {
    defaultCount: PropTypes.number,
    defaultStatus: PropTypes.bool,
    changeLike: PropTypes.func,
};

export default memo(LikeButton)