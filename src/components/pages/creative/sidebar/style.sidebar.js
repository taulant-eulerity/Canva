import styled from "styled-components";



export const StyleSidebar = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    background-color: #F7F7F7;

`


export const StyleIconWrapper = styled.div`
    cursor: pointer;
    display: grid;
    place-items: center;
    padding: 0.5rem;
    background-color: ${props => props.selected === props.field ? "#DFDFDE" : "#F7F7F7" };
    svg {
        stroke: ${props => props.selected === props.field ? 'black' : "#a3a0b5"}
    }
`

