import React, { useEffect, useLayoutEffect } from "react";

import { StyleController } from "./style.controller";
import { fabric } from "fabric";
import  Text  from "./components/Text";
import  Images  from "./components/Images";
import { animateOnSelect } from "../../../util/gsap";
const Controller = ({ canvas, selectedField, setSelectedObject, selectedObject }) => {


  useLayoutEffect(() => {
     animateOnSelect("init-animation")
  }, [selectedField])

  useEffect(() => {
    if (!canvas) return;
    fabric.Object.prototype.objectCaching = false;
    canvas.on("object:added", (event) => setSelectedObject(event.target));
    canvas.on('mouse:up', (event) => setSelectedObject(event.target));
    return () => {
      canvas.off("object:added");
      canvas.off("mouse:up")
    };
  }, [canvas]);

  const Component = () => {
    switch(selectedField) {
      case 'text': return <Text selectedObject={selectedObject} canvas={canvas} />
      case 'images': return <Images selectedObject={selectedObject} canvas={canvas}/>
      default: return <Text selectedObject={selectedObject} canvas={canvas} />
    }
  }
  return (
    <StyleController className="section controller">
      <div className="init-animation">
        {Component()}
      </div>
    </StyleController>
  );
};

export default Controller;
