import styled from "styled-components";

export const StyleEditor = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-template-columns: repeat(2, min-content) 1fr;
    .section {
        padding: 20px;
        border: 1px solid grey;
    }

    .navigation {
        width: 100vw;
        grid-column: 1 / -1;
    }
    .sidebar {
        grid-row: 2 / -1;
        width: 40px;
    }
    .controller {
        grid-row: 2 / -1;
        width: 250px;
    }
    .display {
        height: 70vh;
    }
    .footer {
        grid-column: 3 / -1;
        height: 25px;
    }

`;
