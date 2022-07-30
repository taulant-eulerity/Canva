import React, { useRef } from "react";
import styled from "styled-components";

const StyleColorPicker = styled.div`
  .color-wrapper {
    width: 35px;
    height: 25px;
    border-radius: 5px;
    border: 2px solid #DFDFDE
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
      <input onChange={handleOnChange} type='color' ref={ref} style={{ visibility: "hidden", opacity: "0", width: 0 }} />
      <StyleColorPicker>
        {/* <SmParagraph>{title}</SmParagraph> */}
          <div className="color-wrapper" onClick={handleOnClick} style={{ backgroundColor: value }} />
      </StyleColorPicker>
    </>
  );
};

export default ColorPicker;
