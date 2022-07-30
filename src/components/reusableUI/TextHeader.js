import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import styled from "styled-components";
import { HeaderMd } from "./typography";

const StyleTextHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    width: 90%;
`


const TextHeader = ({ text }) => {
  return (
    <StyleTextHeader>
        <HeaderMd>{text}</HeaderMd>
        <FiAlertCircle size='21'/>
      </StyleTextHeader>
  )

}

export default TextHeader;
