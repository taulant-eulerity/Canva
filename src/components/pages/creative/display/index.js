import React from 'react'
import { StyleDisplay, StyleCanvasWrapper } from './style.display'



const Display = ({canvasRefernence}) => {

  return (
      <StyleDisplay className='section display'>
        <StyleCanvasWrapper>
          <canvas ref={canvasRefernence} width='500px' height='500px'></canvas>
        </StyleCanvasWrapper>
    </StyleDisplay>
  )
}



export default Display