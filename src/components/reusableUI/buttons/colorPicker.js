import React, { useRef } from "react";
import styled from "styled-components";
import { SmParagraph } from "../typography";

const StyleColorPicker = styled.div`

  .color-wrapper {
    width: 40px;
    height: 25px;
    border-radius: 2px;
    border: 1px solid grey
  }
`;

const ColorPicker = ({ setValue, value, title, letter }) => {
  const ref = useRef();
  const handleOnClick = () => {
    ref.current.click();
  };
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input onChange={handleOnChange} type='color' ref={ref} style={{ visibility: "hidden", opacity: "0" }} />
      <StyleColorPicker>
        <SmParagraph>{title}</SmParagraph>
          <div className="color-wrapper" onClick={handleOnClick} style={{ backgroundColor: value }} />
      </StyleColorPicker>
    </>
  );
};

export default ColorPicker;
