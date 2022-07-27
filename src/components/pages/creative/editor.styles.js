import styled from "styled-components";

export const StyleEditor = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-template-columns: repeat(2, min-content) 1fr;
 
    .section {
        padding: 20px;
        border: 1px solid black;
    }

    .navigation {
        width: 100vw;
        background-color: orangered;
        grid-column: 1 / -1;
    }
    .sidebar {
        background-color: yellowgreen;
        grid-row: 2 / -1;
        width: 40px;
    }
    .controller {
        background-color: salmon;
        grid-row: 2 / -1;
        width: 250px;
    }
    .display {
        background-color: royalblue;
        height: 70vh;
    }
    .footer {
        background-color: goldenrod;
        grid-column: 3 / -1;
        height: 25px;
    }

`;
