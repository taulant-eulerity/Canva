import React from 'react'

import { StyleDisplay, StyleCanvasWrapper } from './style.display'
import T from '../../../util/T'



const Display = ({canvasRefernence}) => {

  return (
      <StyleDisplay className='section display'>
        <StyleCanvasWrapper>
          <div className='canvas-wrapper'>
          <canvas className="lower-canvas" ref={canvasRefernence} width='500px' height='500px'></canvas>
          {/* <canvas className="uppcanvas"></canvas> */}
          <T user={{name: 'john', age: 30}}/>
          </div>
        </StyleCanvasWrapper>
    </StyleDisplay>
  )
}



export default Display