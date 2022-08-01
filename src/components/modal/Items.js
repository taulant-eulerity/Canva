import React from "react";
import styled from "styled-components";

const StyleMediaItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 0.5rem;
    align-items: center;
    cursor: pointer;
`
const handleOnClick = (dimentions, canvas, close) => {
  if(!canvas) return;
   let [width, height] = dimentions.split('x')
  canvas.setDimensions({width, height});
  canvas.renderAll()
  close()
}
const MediaItem = ({data, canvas, close}) => {
    return (
        <StyleMediaItem onClick={() => handleOnClick(data.text.dimentions, canvas, close)}>
            <img src={data.icon} alt='icons'/>
            <div>{data.text.title}</div>
            <div>{data.text.dimentions}</div>
        </StyleMediaItem>
    )
}

export default MediaItem