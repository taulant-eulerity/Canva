import React from 'react'
import NavigationText from './components/Text'
import NavigationImages from './components/Images'
import { StyleNavigationComponents } from './components/style.components'

import { StyleNavigation } from './style.naviagtion'


const Navigation = ({selectedObject, canvas, setSelectedField}) => {

  const Component = () => {
    if(selectedObject?.text) return <NavigationText selectedObject={selectedObject} canvas={canvas} />
    else return <NavigationImages selectedObject={selectedObject} canvas={canvas} setSelectedField={setSelectedField}  />
  }
  return (
    <StyleNavigation className='section navigation'>
      { selectedObject ? Component() : <StyleNavigationComponents /> }
    </StyleNavigation>
  )
}


export default Navigation