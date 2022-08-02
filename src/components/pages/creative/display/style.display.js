import styled from "styled-components";


export const StyleDisplay = styled.div`
  border-bottom: 2px solid #F5F4F4;

`

export const StyleCanvasWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background-color: #fafafa;


    .canvas-wrapper {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;


    }
    /* .upper-canvas {
      width: 800px;
      height: 800px;
      position: relative;
    } */
    .lower-canvas {
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }
`