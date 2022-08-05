import React from 'react'
import styled from "styled-components";


const StyleHiddenInput = styled.input`
   display: none;
`
export const HiddenInput = ({reference, onChange}) => {
    return (
        <StyleHiddenInput type='file' ref={reference} onChange={onChange} />
    )
}