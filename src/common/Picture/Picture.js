import React, {useRef, memo} from "react"
import {useLike} from "../../hooks/useLike";
import image from "../../image/image.jpg"
import PropTypes from "prop-types";

const Picture = ({defaultCount, defaultStatus, changeLike})=>{

    const {likeCount,likeStatus,addLike, removeLike, changeLikeStatus} = useLike(defaultCount,defaultStatus);

    function clickLike () {
        changeLike(defaultStatus)
    }

    const img = useRef();

    return(
        <div>
            <img ref={img} src={image} alt="" onClick={clickLike}/>
        </div>
    )
};

Picture.propTypes = {
    defaultNumber: PropTypes.number
};

Picture.defaultProps = {
    defaultNumber: 0
};

export default memo(Picture)