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
   transition: all 0.2s;
   cursor: pointer;
    img {
        border-radius: 0.5rem;
    }
    :hover {
        transform: scale(1.08);
    }
`


export const StyleTemplates = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .image-wrapper {
        margin-top: 2rem;
    }
    .text-wrapper {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        text-align: center;
    }
`

export const StyleText = styled.div``

export const StyleCustomize = styled.div``