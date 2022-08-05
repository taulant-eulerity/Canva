import React from "react";
// import { PrimaryBtn } from "../../../../reusableUI/buttons/buttons.style";
import TextHeader from "../../../../../reusableUI/TextHeader";
import CustomizeText from "./text";
import { StyleCustomize } from "./style.customize";
import {useSelector} from 'react-redux'
import CustomizeImages from "./images";





const Customize = ({animation}) => {

    const {name} = useSelector(state => state.navigation.navigate)

        const Component = () => {
            switch(name) {
                case 'textbox': return <CustomizeText  animation={animation} />
                case 'image': return <CustomizeImages  animation={animation} />
                default: return <h1>Hello</h1>
            }
        }

    return (
        <StyleCustomize>
            <TextHeader text={`Customize ${name}`}/>
            {Component()}
        </StyleCustomize>
    )
}


export default Customize




