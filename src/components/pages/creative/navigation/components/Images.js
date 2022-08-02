import React from "react";
import { Remove } from "../../../../reusableUI/buttons/remove";
import { StyleNavigationComponents } from "./style.components";
import { BiBrush } from "react-icons/bi";
import UpIndex from "../../../../reusableUI/buttons/UpIndex";

const NavigationImages = ({ setSelectedField, canvas, animation }) => {
  return (
    <StyleNavigationComponents>
      <div className="icons">
        <BiBrush size="26" color="#3C415C" onClick={() => setSelectedField("image:filters")} />
        <UpIndex canvas={canvas} />
        <Remove canvas={canvas} animation={animation} />
      </div>
    </StyleNavigationComponents>
  );
};

export default NavigationImages;
