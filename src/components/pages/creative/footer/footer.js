import React from 'react'
import Layers from './Features/Layers'
import { StyleFooter } from './style.footer'



const Footer = ({ animation, setAnimation}) => {

  return (
    <StyleFooter className='section footer'>
       <Layers  animation={animation} setAnimation={setAnimation}/>
    </StyleFooter>
  )
}



export default Footer