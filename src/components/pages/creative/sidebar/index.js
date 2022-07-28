import React from 'react'
import { StyleIconWrapper, StyleSidebar } from './sidebar.styles'
import { FiImage, FiType } from "react-icons/fi";


const Sidebar = () => {
  return (
    <StyleSidebar className='section sidebar'>
         <StyleIconWrapper><FiImage size='30' /></StyleIconWrapper>
         <StyleIconWrapper><FiType size='30' /></StyleIconWrapper>
    </StyleSidebar>
  )
}

export default Sidebar