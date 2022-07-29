import React from 'react'
import { StyleNavigationComponents } from './style.components'



const NavigationImages = ({setSelectedField}) => {
    return (
        <StyleNavigationComponents>
           <h1 onClick={() => setSelectedField('image:filters')}>Images</h1>
        </StyleNavigationComponents>
    )
}

export default  NavigationImages 