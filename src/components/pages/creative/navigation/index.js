import React, { createElement } from "react";
import NavigationText from "./components/Text";
import NavigationImages from "./components/Images";
import { StyleNavigationComponents } from "./components/style.components";


import { StyleNavigation } from "./style.naviagtion";
import { PrimaryBtn } from "../../../reusableUI/buttons/buttons.style";

const handleDownload = ( canvas) => {
  canvas.discardActiveObject()
  canvas.renderAll()
  canvas.getElement().style.backgroundColor ="white"
  console.log(  canvas.getElement())
  canvas.getElement().toBlob(function(blob) {
    const bl = URL.createObjectURL(blob)
    let a = document.createElement('a')
    a.id = 'mana'
    a.href = bl
    console.log(a)
    a.download = 'canvas.jpeg'
    a.click()
  });



}
//     let a = document.createElement('a')
//     a.href = canvas.toDataURL({
//         format: 'png',
//         quality: 0.8
//     });

//     console.log(a)
//     a.download = 'canvas.png'
// }


const Navigation = ({ canvas, navigation, setSelectedField, animation }) => {
  function ObjectSelected() {
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

      {canvas?.getActiveObject() ? ObjectSelected() : <StyleNavigationComponents />}
    </StyleNavigation>
  );
};

export default Navigation;

// canvas.toDataURL({
//   format: 'jpeg',
//   quality: 0.8
// });
