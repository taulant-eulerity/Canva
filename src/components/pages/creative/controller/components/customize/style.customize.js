import styled from "styled-components";

export const StyleCustomize = styled.div`
  padding: 0.4rem;
`;

//

export const StyleCustumizeWrapper = styled.div``;

export const StyleSliderWrapper = styled.div`
  width: 90%;
  font-size: 13px;
`;

export const StyleSliderGroup = styled.div`
  background-color: #f7f7f7;
  padding: 0.4rem;
  box-sizing: border-box;
  /* border: 1px solid #dfdfde; */
  border-radius: 5px;
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyleWrappIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  column-gap: 0.3rem;
  align-items: center;
`;
export const StyleRemoveIcon = styled.div`
  /* border: 1px solid #dfdfde;  */
  padding: 0.3rem;
  border-radius: 5px;
  /* background-color: red; */
  background-color: #f7f7f7;
  svg {
    stroke: red;
    cursor: pointer;
  }
`;
export const StyleColors = styled.div`
  display: flex;
  padding: 0.3rem;
  /* background-color: #F7F7F7; */
  border-radius: 5px;
`;

export const StyleIcons = styled.div`
  width: 80px;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-around;
  align-items: center;
  column-gap: 0.1rem;
  /* border: 1px solid #dfdfde;  */
  padding: 0.3rem;
  /* background-color: #f1f1f1; */
  border-radius: 5px;
  background-color: #f7f7f7;
  svg {
    cursor: pointer;
  }
`;
