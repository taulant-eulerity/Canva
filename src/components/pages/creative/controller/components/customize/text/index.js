import React, { useState, useEffect } from "react";
import ColorPicker from "../../../../../../reusableUI/buttons/colorPicker";
import { Remove } from "../../../../../../reusableUI/buttons/remove";
import Transparent from "../../../../../../reusableUI/buttons/transparent";
import UpIndex from "../../../../../../reusableUI/buttons/UpIndex";
import { getLastValue } from "../../../../../../util/util";
import OpacitySlider from "./OpacitySlider";
import { useSelector } from "react-redux";

import { StyleColors, StyleCustumizeWrapper, StyleIcons, StyleRemoveIcon, StyleSliderGroup, StyleSliderWrapper, StyleWrappIcons } from "../style.customize";

const CustomizeText = ({ animation }) => {
  const canvas = useSelector((state) => state.canvas.canvas);
  const [color, setColor] = useState(canvas?.getActiveObject()?.fill || "black");
  const [backgroundColor, setBackgroundColor] = useState(canvas?.getActiveObject()?.backgroundColor);

  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const [fontOpacity, setFontOpacity] = useState(1);

  useEffect(() => {
    const activeObject = canvas?.getActiveObject();
    if (!activeObject) return;
    setColor(activeObject.fill);
    setBackgroundColor(activeObject.backgroundColor);

    let backgroundOpacity = getLastValue(activeObject.backgroundColor);
    let fontOpacity = getLastValue(activeObject.fill);

    setFontOpacity(Math.round(fontOpacity[fontOpacity.length - 1] * 100));
    setBackgroundOpacity(Math.round(backgroundOpacity[backgroundOpacity.length - 1] * 100));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas?.getActiveObject()]);

  useEffect(() => {
    canvas?.getActiveObject()?.set("fill", color);
    canvas.renderAll();
  }, [color, canvas]);

  useEffect(() => {
    canvas?.getActiveObject()?.set("backgroundColor", backgroundColor);
    canvas.renderAll();
  }, [backgroundColor, canvas]);

  return (
    <StyleCustumizeWrapper>
      <StyleWrappIcons>
        <StyleRemoveIcon>
          <Remove animation={animation} />
        </StyleRemoveIcon>
        <StyleIcons>
          <Transparent />
          <UpIndex />
        </StyleIcons>

        <StyleColors>
          <ColorPicker setOpacity={setBackgroundOpacity} setValue={setBackgroundColor} value={backgroundColor} attr="backgroundColor" />
          <ColorPicker setOpacity={setFontOpacity} setValue={setColor} value={color} attr="fill" />
        </StyleColors>
      </StyleWrappIcons>

      <StyleSliderGroup>
        <StyleSliderWrapper>
          <p>Background Opacity</p>
          <OpacitySlider value={backgroundOpacity} setOpacity={setBackgroundOpacity} attr="backgroundColor" />
        </StyleSliderWrapper>

        <StyleSliderWrapper>
          <p>Font Opacity</p>
          <OpacitySlider value={fontOpacity} setOpacity={setFontOpacity} attr="fill" />
        </StyleSliderWrapper>
      </StyleSliderGroup>
    </StyleCustumizeWrapper>
  );
};

export default CustomizeText;
