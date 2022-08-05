import styled, {css}  from "styled-components";


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

   box-shadow: ${props => props.box ? 'none' : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;'};
   border:     ${props => !props.box ? 'none' : '1px solid #F1F1F1'};
   display: grid;
   place-items: center;
   position: relative;
   transition: all 0.2s;
   cursor: pointer;
    img {
        border-radius: 0.5rem;
        ${props => {
           if(!props.box) {
            return css`
            width: 100px;
            height: 70px;
            object-fit: cover;
            `
           }
        }}
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

//SUB
export const StyleContent = styled.div`
  display: grid;
  row-gap: 1rem;
  .contents {
    padding: 0.5rem;
    border: 1px solid #DFDFDE;
    background-color: #F1F1F1;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
    :hover {
        background-color: #3a36e4;
        color: white
    }
  }
`


export const StyleGraphics = styled.div`

`
