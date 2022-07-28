import React from 'react'
import { StyleIconWrapper, StyleSidebar } from './style.sidebar'
import { FiImage, FiType } from "react-icons/fi";


const Sidebar = ({setSelectedField, selectedField}) => {
  return (
    <StyleSidebar className='section sidebar'>
         <StyleIconWrapper selected={selectedField} field={'images'} onClick={() => setSelectedField('images')}><FiImage size='30'/></StyleIconWrapper>
         <StyleIconWrapper selected={selectedField} field={'text'} onClick={() => setSelectedField('text')}><FiType size='30' /></StyleIconWrapper>
    </StyleSidebar>
  )
}

export default Sidebar