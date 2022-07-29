import styled from "styled-components";


export const StyleImages = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 100px);

    gap: 1rem;
    padding: 20px;
    border-radius: 0.5rem;
    justify-content: center;
`

export const StyleImageWrapper = styled.div`
   border-radius: 10px;
   box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
   display: grid;
   place-items: center;
   position: relative;
    img {
        border-radius: 0.5rem;
    }
`
