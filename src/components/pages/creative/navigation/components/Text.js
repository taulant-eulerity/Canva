import React, { useEffect, useState } from "react";

import Increment from "../../../../reusableUI/buttons/increment";
import { useSelector } from "react-redux";
import { TbItalic, TbBold } from "react-icons/tb";

import FontPicker from "./FontPicker";
import { StyleNavigationComponents } from "./style.components";
import { StyleIcons } from "../../controller/components/customize/style.customize";

const NavigationText = () => {
  const canvas = useSelector((state) => state.canvas.canvas);
  const [fontSize, setFontSize] = useState(canvas?.getActiveObject()?.fontSize || 12);
  const navigation = useSelector((state) => state.navigation.navigate);


  useEffect(() => {
    setFontSize(canvas?.getActiveObject()?.fontSize);
    console.log(canvas?.getActiveObject()?.fontSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas?.getActiveObject(), navigation.id]);

  useEffect(() => {
    canvas?.getActiveObject().set("fontSize", fontSize);
    canvas?.renderAll();
  }, [fontSize, canvas]);

  const onBold = () => {
    const activeObject = canvas?.getActiveObject();
    if(activeObject.fontWeight === 'bold')  {
      activeObject.set('fontWeight','400')
    } else activeObject.set('fontWeight','bold')
    canvas?.renderAll();
  }
  const onItalic = () => {
    const activeObject = canvas?.getActiveObject();
    if(activeObject.fontStyle === 'italic')  {
      activeObject.set('fontStyle','normal')
    } else activeObject.set('fontStyle','italic')
    canvas?.renderAll();
  }




  return (
    <StyleNavigationComponents>
      <FontPicker />
      <Increment setValue={setFontSize} value={fontSize} />
        <StyleIcons>
          <TbBold onClick={onBold} color='#3C415C' size='24' />
          <TbItalic onClick={onItalic} color='#3C415C' size='23'/>
        </StyleIcons>
    </StyleNavigationComponents>
  );
};

export default NavigationText;
