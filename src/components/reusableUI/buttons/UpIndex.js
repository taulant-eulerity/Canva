import React from "react";
import styled from "styled-components";
import { BiLayerPlus } from "react-icons/bi";
import {useSelector} from 'react-redux'
const StyleUpIndex = styled.div`


`;


export const UpIndex = () => {


    const canvas = useSelector(state => state.canvas.canvas)
    return (
        <StyleUpIndex>
            <BiLayerPlus size='24' color='#3C415C' onClick={() => {
                  canvas?.getActiveObject().moveTo(canvas.getObjects().length);
                  canvas.renderAll();
            }}/>
        </StyleUpIndex>
    )
}

export default UpIndex