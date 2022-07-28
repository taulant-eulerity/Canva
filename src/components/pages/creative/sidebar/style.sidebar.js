import styled from "styled-components";



export const StyleSidebar = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
    border-bottom: 1px solid grey;
`


export const StyleIconWrapper = styled.div`
    cursor: pointer;
    background-color: ${props => props.selected === props.field ? "#DFDFDE" : "white" };
    svg {
        stroke: ${props => props.selected === props.field ? 'black' : "#DFDFDE"}
    }
`

