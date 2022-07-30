import React from "react";
import styled from "styled-components";
import { FiCodepen } from "react-icons/fi";
const StyleTransparent = styled.div`


`;


export const Transparent = ({canvas}) => {

    return (
        <StyleTransparent>
            <FiCodepen size='21' color='#3C415C' onClick={() => {
                canvas?.getActiveObject().set("backgroundColor", 'transparent')
                canvas.renderAll();
            }}/>
        </StyleTransparent>
    )
}

export default Transparent