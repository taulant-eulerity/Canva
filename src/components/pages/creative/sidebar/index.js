import React from 'react'
import { StyleIconWrapper, StyleSidebar } from './style.sidebar'
import { FiImage, FiType, FiLayout,FiSliders  } from "react-icons/fi";
import { TbIcons } from "react-icons/tb";


const Sidebar = ({setSelectedField, selectedField}) => {
  return (
    <StyleSidebar className='section sidebar'>
         <StyleIconWrapper selected={selectedField} field={'templates'} onClick={() => setSelectedField('templates')}><FiLayout size='22'/></StyleIconWrapper>
         <StyleIconWrapper selected={selectedField} field={'customize'} onClick={() => setSelectedField('customize')}><FiSliders size='22' /></StyleIconWrapper>
         <StyleIconWrapper selected={selectedField} field={'text'} onClick={() => setSelectedField('text')}><FiType size='22' /></StyleIconWrapper>
         <StyleIconWrapper selected={selectedField} field={'images'} onClick={() => setSelectedField('images')}><FiImage size='22'/></StyleIconWrapper>
         <StyleIconWrapper selected={selectedField} field={'graphics'} onClick={() => setSelectedField('graphics')}><TbIcons size='22'/></StyleIconWrapper>
    </StyleSidebar>
  )
}

export default Sidebar