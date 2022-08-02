import styled from "styled-components";


export const StyleLayers = styled.div`
    cursor: pointer;
    position: relative;
    .layer {
        width: max-content;
        padding: 0.3rem;
        display: grid;
        place-content: center;
        border-radius: 100%;
        :hover {
            background-color: #F1F1F1;
        }
    }

`

export const StyleLayersTooltip = styled.div`
    box-sizing: border-box;
    width: 18rem;
    height: max-content;
    background-color: white;
    position: absolute;
    bottom: 36px;
    border-radius: 4px;
    visibility: hidden;
    opacity: 0;
    transform:  translateX(-80px) translateY(50px) scale(0.7);
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
    border: 2px solid #F1F1F1;
    padding: 1rem;
    padding-top: 0.4rem;
`

export const StyleLayersOrder = styled.ul`
display: flex;
row-gap: 0.5rem;
flex-direction: column;
.closing {
    display: flex;
    justify-content: space-between;

}


`


export const StyleElements = styled.li`
    width: 100%;
    box-sizing: border-box;
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid #DFDFDE;
    background-color: #F1F1F1;
    display: flex;
    align-items: center;
    height: 36px;


`