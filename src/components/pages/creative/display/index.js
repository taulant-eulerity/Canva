import React from 'react'

import { StyleDisplay, StyleCanvasWrapper } from './style.display'



const Display = ({canvasRefernence}) => {

  return (
      <StyleDisplay className='section display'>
        <StyleCanvasWrapper>
          <div style={{backgroundColor: 'white'}}>
          {/* <canvas width='700px' height='700px' class="upper-canvas"></canvas> */}
          <canvas className="lower-canvas" ref={canvasRefernence} width='500px' height='500px'></canvas>
          </div>
        </StyleCanvasWrapper>
    </StyleDisplay>
  )
}



export default Display