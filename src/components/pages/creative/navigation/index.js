import React, { useCallback, useEffect, useState } from "react";
import NavigationText from "./components/Text";
import NavigationImages from "./components/Images";
import { StyleNavigationComponents } from "./components/style.components";


import { StyleNavigation } from "./style.naviagtion";
import { PrimaryBtn } from "../../../reusableUI/buttons/buttons.style";
import { handleNavigation } from "../editor.util";

const handleDownload = ( canvas) => {
  canvas.discardActiveObject()
  canvas.renderAll()
  canvas.getElement().style.backgroundColor ="white"
  canvas.getElement().toBlob(function(blob) {
    const blobURL = URL.createObjectURL(blob)
    let a = document.createElement('a')
    a.href = blobURL
    a.download = 'canvas.jpeg'
    a.click()
  });
}





const Navigation = ({ canvas, navigation, setSelectedField, animation }) => {
const [Component, setState] = useState(<></>)


useEffect(() => {
  setState(() => ObjectSelected.bind(null, navigation?.target ?  handleNavigation(navigation, null) : handleNavigation(null, navigation)))
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [navigation])


  function ObjectSelected(navigation) {
    switch (navigation) {
      case "textbox":
        return <NavigationText canvas={canvas} animation={animation} />;
      case "image":
        return <NavigationImages setSelectedField={setSelectedField} canvas={canvas} animation={animation} />;
      default:
        return <StyleNavigationComponents />;
    }
  }
  return (
    <StyleNavigation className="section navigation">
      {!!canvas?.getObjects().length && (
        <div className="download" onClick={(_) => handleDownload(canvas)}>
          <PrimaryBtn width="10rem">Download Image</PrimaryBtn>
        </div>
      )}

      {canvas?.getActiveObject() ? <Component />: <StyleNavigationComponents />}
    </StyleNavigation>
  );
};

export default Navigation;
