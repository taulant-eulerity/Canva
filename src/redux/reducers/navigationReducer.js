import { GET_SELECTED_OBJECT_TYPE, CLEAR_SELECTED_OBJECT_TYPE } from "../types"

const initialState = {
    navigate: {id: null, name: null}
}

const navigateReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SELECTED_OBJECT_TYPE: {
            return {...state, navigate: action.payload}
        }
        case CLEAR_SELECTED_OBJECT_TYPE: {
            return initialState
        }
        default: {
            return { ...state }
        }
    }
}


export default navigateReducer