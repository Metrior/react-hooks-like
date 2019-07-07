import {CLICK_LIKE} from "./types"

export function clickLike(status) {
    return {
        type: CLICK_LIKE,
        payload: status,
    }
}


