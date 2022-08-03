import React, { useEffect, useState } from "react";
import ColorPicker from "../../../../reusableUI/buttons/colorPicker";
import Increment from "../../../../reusableUI/buttons/increment";
import { Remove } from "../../../../reusableUI/buttons/remove";
import Transparent from "../../../../reusableUI/buttons/transparent";
import UpIndex from "../../../../reusableUI/buttons/UpIndex";
import { Slider } from "../../../../reusableUI/slider";


import FontPicker from "./FontPicker";
import { StyleNavigationComponents } from "./style.components";

const NavigationText = ({ canvas, animation }) => {

  const [fontSize, setFontSize] = useState(canvas?.getActiveObject()?.fontSize || 12);
  const [color, setColor] = useState(canvas?.getActiveObject()?.fill || 'black');
  const [backgroundColor, setBackgroundColor] = useState(canvas?.getActiveObject()?.backgroundColor);


  useEffect(() => {
    setFontSize(canvas?.getActiveObject()?.fontSize);
    setColor(canvas?.getActiveObject()?.fill)
    setBackgroundColor(canvas?.getActiveObject()?.backgroundColor)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas?.getActiveObject()]);


  useEffect(() => {
    canvas?.getActiveObject().set("fontSize", fontSize);
    canvas.renderAll();
  }, [fontSize, canvas ]);

  useEffect(() => {
    canvas?.getActiveObject().set("fill", color)
    canvas.renderAll();
  }, [color, canvas])


  useEffect(() => {
    // let rgba = hexToRgbA(backgroundColor)
    // console.log(rgba)
    canvas?.getActiveObject().set("backgroundColor", backgroundColor )
    canvas.renderAll();
  }, [backgroundColor, canvas])

  return (
    <StyleNavigationComponents>
      <FontPicker canvas={canvas} />
      <Increment setValue={setFontSize} value={fontSize} />
      <div className="colors">
          <ColorPicker setValue={setBackgroundColor} value={backgroundColor} title={'Background Color'}/>
          <ColorPicker setValue={setColor} value={color} title={'Font Color'}/>
      </div>
      <div className="icons">
        <Remove canvas={canvas} animation={animation} />
        <Transparent canvas={canvas} />
        <UpIndex canvas={canvas} />
      </div>
      <Slider canvas={canvas} />
    </StyleNavigationComponents>
  );
};

export default NavigationText;
