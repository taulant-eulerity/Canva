import styled from "styled-components";

export const StyleEditor = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-template-columns: repeat(2, min-content) 1fr;
    .section {
    }

    .navigation {
        width: 100vw;
        grid-column: 1 / -1;
        height: 60px;
    }
    .sidebar {
        grid-row: 2 / -1;
        width: 60px;
    }
    .controller {
        grid-row: 2 / -1;
        width: 300px;
    }
    .display {
        height: 70vh;
    }
    .footer {
        grid-column: 3 / -1;
        height: 40px;
    }

`;
