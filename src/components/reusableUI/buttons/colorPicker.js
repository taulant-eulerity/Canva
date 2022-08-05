import React, {useRef } from "react";
import styled from "styled-components";
import { hexToRgbA } from "../../pages/creative/controller/controller.util";
import { getLastValue } from "../../util/util";
import {useSelector} from 'react-redux'
const StyleColorPicker = styled.div`
  .color-wrapper {
    width: 35px;
    height: 25px;
    border-radius: 5px;
    border: 2px solid #DFDFDE
  }
`;

const ColorPicker = ({ setValue, value, isFont, setOpacity, attr }) => {
  const canvas = useSelector(state => state.canvas.canvas)
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

    let prewColor = getLastValue(currentOpacity.current[attr])
    let updatedColor = getLastValue(hexToRgbA(e.target.value))

    if(!prewColor) return setValue(hexToRgbA(e.target.value));

    setOpacity(Math.round(prewColor[prewColor.length-1] * 100))
    updatedColor[updatedColor.length-1] = prewColor[prewColor.length-1]

    setValue(`rgba(${updatedColor.join(",")})`);
  };

  return (
    <>
      <input onChange={handleOnChange} type='color' ref={ref} style={{ visibility: "hidden", opacity: 0, width: 0 }} />
      <StyleColorPicker>
          <div className="color-wrapper" onClick={handleOnClick} style={{ backgroundColor: value }} />
      </StyleColorPicker>
    </>
  );
};

export default ColorPicker;
