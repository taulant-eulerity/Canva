import React, { useEffect, useState } from "react";

import Increment from "../../../../reusableUI/buttons/increment";
import {useSelector} from 'react-redux'

import FontPicker from "./FontPicker";
import { StyleNavigationComponents } from "./style.components";

const NavigationText = () => {
  const canvas = useSelector(state => state.canvas.canvas)
  const [fontSize, setFontSize] = useState(canvas?.getActiveObject()?.fontSize || 12);
  const navigation = useSelector(state => state.navigation.navigate)
  useEffect(() => {
    setFontSize(canvas?.getActiveObject()?.fontSize);


    console.log(canvas?.getActiveObject()?.fontSize)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas?.getActiveObject(), navigation.id]);

  useEffect(() => {
    canvas?.getActiveObject().set("fontSize", fontSize);
    canvas?.renderAll();
  }, [fontSize, canvas ]);

  return (
    <StyleNavigationComponents>
      <FontPicker />
      <Increment setValue={setFontSize} value={fontSize} />
    </StyleNavigationComponents>
  );
};

export default NavigationText;
