import React from 'react'
import NavigationText from './components/Text'
import NavigationImages from './components/Images'
import { StyleNavigationComponents } from './components/style.components'

import { StyleNavigation } from './style.naviagtion'


const Navigation = ({selectedObject, canvas, setSelectedField}) => {

  function ObjectSelected(){

    let activeObject = canvas?.getActiveObject();
    if(activeObject.isType('text')){
       return <NavigationText selectedObject={selectedObject} canvas={canvas} />
    }
    else if(activeObject.isType('image')){
      <NavigationImages selectedObject={selectedObject} canvas={canvas} setSelectedField={setSelectedField}  />
    }
    else if( activeObject.isType('xyz')){
      <h1>Hello</h1>
    }
}
  return (
    <StyleNavigation className='section navigation'>
      { canvas.getActiveObject() ? ObjectSelected() : <StyleNavigationComponents /> }
    </StyleNavigation>
  )
}


export default Navigation