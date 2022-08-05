import React, { useEffect, useState } from "react";
import NavigationText from "./components/Text";
import NavigationImages from "./components/Images";
import { StyleNavigationComponents } from "./components/style.components";
import {useSelector} from 'react-redux'

import { StyleNavigation } from "./style.naviagtion";
import { PrimaryBtn } from "../../../reusableUI/buttons/buttons.style";

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


const Navigation = ({setSelectedField, animation }) => {
const canvas = useSelector(state => state.canvas.canvas)
const [Component, setState] = useState(<></>)
const navigation = useSelector(state => state.navigation.navigate)


useEffect(() => {
  setState(() => ObjectSelected.bind(null, navigation))
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [navigation.id])



  function ObjectSelected() {
    switch (navigation.name) {
      case "textbox":
        return <NavigationText animation={animation} />;
      case "image":
        return <NavigationImages setSelectedField={setSelectedField}  animation={animation} />;
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
