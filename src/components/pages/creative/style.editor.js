import styled from "styled-components";

export const StyleEditor = styled.div`

  display: grid;
  grid-template-rows: 60px 70vh 3rem;
  grid-template-columns: repeat(2, min-content) 1fr;

    .navigation {
        width: 90vw;
        grid-column: 1 / -1;
    }
    .sidebar {
        grid-row: 2 / -1;
        width: 60px;
    }
    .controller {
        grid-row: 2 / -1;
        width: 300px;
        box-sizing: border-box;
        padding: 0.5rem;
    }
    .display {

    }
    .footer {
        grid-column: 3 / -1;

    }

`;
