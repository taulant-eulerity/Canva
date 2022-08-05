import { GET_SELECTED_OBJECT_TYPE, CLEAR_SELECTED_OBJECT_TYPE } from "../types";


export const getSelectedOpbjectType = (objType) => dispatch => (
    dispatch({
        type: GET_SELECTED_OBJECT_TYPE,
        payload: objType
    })
)

export const clearSelectedOpbjectType = () => dispatch => (
    dispatch({
        type: CLEAR_SELECTED_OBJECT_TYPE,
    })
)

export default getSelectedOpbjectType

