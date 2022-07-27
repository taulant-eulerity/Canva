import React from 'react'
import Controller from './controller'
import Display from './display'
import { StyleEditor } from './editor.styles'
import Footer from './footer/footer'
import Navigation from './navigation'
import Sidebar from './sidebar'



const Editor = () => {
  return (
    <StyleEditor>
        <Navigation></Navigation>
        <Sidebar></Sidebar>
        <Controller></Controller>
        <Display></Display>
        <Footer></Footer>
    </StyleEditor>
  )
}



export default Editor