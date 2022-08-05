import React from "react";
import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";
import {useSelector, useDispatch} from 'react-redux'
import getSelectedOpbjectType, { clearSelectedOpbjectType } from "../../../redux/actions/navigation";
const StyleRemove = styled.div`
`;


export const Remove = ({animation}) => {
    const _D = useDispatch()
    const canvas = useSelector(state => state.canvas.canvas)
    return (
        <StyleRemove>
            <FiTrash2 size='22' color='#3C415C' onClick={() => {
                setTimeout(() => {
                    canvas.remove(canvas?.getActiveObject())
                    const objects = canvas.getObjects()
                    if(objects.length) {
                        _D(getSelectedOpbjectType({id: objects[0].id, name: objects[0].type}))
                        canvas.setActiveObject(objects[0])
                    } else {
                        _D(clearSelectedOpbjectType())
                    }
                    //
                },100)
                if(animation) animation.reverse();
            }}/>
        </StyleRemove>
    )
}