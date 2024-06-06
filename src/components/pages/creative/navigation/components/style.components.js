import styled from "styled-components";

export const StyleNavigationComponents= styled.div`
    min-width: 500px;
    display: grid;
    grid-auto-flow: column;
    place-items: center;
    justify-content: center;
    align-items: center;
    column-gap: 0.7rem;
    cursor: pointer;
`

export const StyleTest = styled.div`
    padding: 8px;
    background-color: wheat;
    border-radius: 10px;
    transition: all 0.5s;
    &:hover {
        background-color: antiquewhite;
    }
`