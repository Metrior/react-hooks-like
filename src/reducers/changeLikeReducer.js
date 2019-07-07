const initialState = {
    count: 0,
    status: false
};

export function changeLikeReducer(state=initialState, action) {
    switch (action.type) {
        case "CLICK_LIKE":
            let newCount;
            if (state.status===false){
                newCount = state.count + 1
            } else {
                newCount = state.count - 1
            }
            return {...state, count: newCount, status: !state.status};
        default:
            return state
    }
}