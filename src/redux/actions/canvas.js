import { GET_CANVAS } from "../types"



export const getCanvas = (canvas) => dispatch => (
    dispatch({
        type: GET_CANVAS,
        payload: canvas
    })
)

export default getCanvas

