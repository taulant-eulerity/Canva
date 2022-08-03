import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { hexToRgbA } from "../../pages/creative/controller/controller.util";
import { getLastValue } from "../../util/util";

const StyleColorPicker = styled.div`
  .color-wrapper {
    width: 35px;
    height: 25px;
    border-radius: 5px;
    border: 2px solid #DFDFDE
  }
`;

const ColorPicker = ({ setValue, value, canvas, isFont }) => {
  const ref = useRef();
  const currentOpacity = useRef()


  const handleOnClick = () => {
    ref.current.click();
    currentOpacity.current = canvas?.getActiveObject()
  };
  const handleOnChange = (e) => {

    if(isFont) {
      setValue(hexToRgbA(e.target.value));
      return
    }

    let opacity  = getLastValue(currentOpacity.current.backgroundColor)
    let updatedColor = getLastValue(hexToRgbA(e.target.value))

    if(!opacity) return setValue(hexToRgbA(e.target.value));
    updatedColor[updatedColor.length-1] = opacity[opacity.length-1]
    setValue(`rgba(${updatedColor.join(",")})`);
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
