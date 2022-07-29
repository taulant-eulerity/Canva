import React from 'react'
import styled from "styled-components";
import loader from '../../../assets/images/loader.gif'


const StyleDotsLoader = styled.div`
   width: 100%;
   height: 100%;
    display: grid;
    place-items: center;

`

const DotsLoader = () => {
    return (
        <StyleDotsLoader>
            <img src={loader} style={{width: '80px'}} alt='loader'/>
        </StyleDotsLoader>
    )
}
export default DotsLoader