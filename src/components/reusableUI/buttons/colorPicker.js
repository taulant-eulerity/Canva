import React, { useRef } from "react";
import styled from "styled-components";
import { hexToRgbA } from "../../pages/creative/controller/controller.util";

const StyleColorPicker = styled.div`
  .color-wrapper {
    width: 35px;
    height: 25px;
    border-radius: 5px;
    border: 2px solid #DFDFDE
  }
`;

const ColorPicker = ({ setValue, value }) => {
  const ref = useRef();
  const handleOnClick = () => {
    ref.current.click();
  };
  const handleOnChange = (e) => {
    setValue(hexToRgbA(e.target.value));
  };

  return (
    <>
      <input onChange={handleOnChange} type='color' ref={ref} style={{ visibility: "hidden", opacity: "0", width: 0 }} />
      <StyleColorPicker>
          <div className="color-wrapper" onClick={handleOnClick} style={{ backgroundColor: value }} />
      </StyleColorPicker>
    </>
  );
};

export default ColorPicker;
