import React from "react";
import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";
const StyleRemove = styled.div`


`;


export const Remove = ({canvas}) => {

    return (
        <StyleRemove>
            <FiTrash2 size='22' color='#3C415C' onClick={() => {
                canvas.remove(canvas?.getActiveObject())
            }}/>
        </StyleRemove>
    )
}