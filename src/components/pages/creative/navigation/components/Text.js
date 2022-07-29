import React, { useEffect, useState } from "react";
import ColorPicker from "../../../../reusableUI/buttons/colorPicker";
import Increment from "../../../../reusableUI/buttons/increment";
import { Remove } from "../../../../reusableUI/buttons/remove";
import { StyleNavigationComponents } from "./style.components";

const NavigationText = ({ canvas }) => {

  const [fontSize, setFontSize] = useState(canvas?.getActiveObject()?.fontSize || 12);
  const [color, setColor] = useState(canvas?.getActiveObject()?.fill || 'black');
  const [backgroundColor, setBackgroundColor] = useState(canvas?.getActiveObject()?.backgroundColor || 'white');

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
    canvas?.getActiveObject().set("backgroundColor", backgroundColor)
    canvas.renderAll();
  }, [backgroundColor, canvas])




  return (
    <StyleNavigationComponents>
      <Increment setValue={setFontSize} value={fontSize} />
      <ColorPicker setValue={setColor} value={color} title={'Font Color'} letter/>
      <ColorPicker setValue={setBackgroundColor} value={backgroundColor} title={'Background Color'}/>
      <Remove canvas={canvas} />
      <h1 onClick={() => {
        canvas?.getActiveObject().set("backgroundColor", 'transparent')
        canvas.renderAll();
      }}>*T*</h1>

      <h1 onClick={() => {
        // canvas?.getActiveObject().set("backgroundColor", 'transparent')
        canvas?.getActiveObject().moveTo(1);
        canvas.renderAll();
      }}>*I*</h1>

    </StyleNavigationComponents>
  );
};

export default NavigationText;
