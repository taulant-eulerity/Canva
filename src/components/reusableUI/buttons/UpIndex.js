import React from "react";
import styled from "styled-components";
import { BiLayerPlus } from "react-icons/bi";
const StyleUpIndex = styled.div`


`;


export const UpIndex = ({canvas}) => {

    return (
        <StyleUpIndex>
            <BiLayerPlus size='24' color='#3C415C' onClick={() => {
                  canvas?.getActiveObject().moveTo(1);
                  canvas.renderAll();
            }}/>
        </StyleUpIndex>
    )
}

export default UpIndex