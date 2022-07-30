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
    .colors {
        display: flex;
        gap: 0.1rem;
        justify-content: space-between;
    }

    .icons {
        width: 120px;
        display: grid;
         grid-auto-flow: column;
         justify-content: space-around;
         align-items: center;
         column-gap: 0.1rem;
         border: 1px solid #DFDFDE;
         padding: 0.2rem;
         background-color: #F1F1F1;
         border-radius: 5px;
    }
    /* display: flex;
    align-items: center;
    justify-content: center; */
    /* background-color: #DFDFDE; */
`