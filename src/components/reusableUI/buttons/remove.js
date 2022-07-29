import React from "react";
import styled from "styled-components";
import { SmParagraph } from "../typography";
import { FiTrash2 } from "react-icons/fi";
const StyleRemove = styled.div`


`;


export const Remove = ({canvas}) => {

    return (
        <StyleRemove>
            <SmParagraph>Remove item</SmParagraph>
            <FiTrash2 size='25' onClick={() => {
                canvas.remove(canvas?.getActiveObject())
            }}/>
        </StyleRemove>
    )
}