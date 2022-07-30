import React, { useEffect, useLayoutEffect } from "react";

import { StyleController } from "./style.controller";
import { fabric } from "fabric";
import  Text  from "./components/Text";
import  Images  from "./components/Images";
import { animateOnSelect } from "../../../util/gsap";
import ImageFilters from "./components/ImageFilters";
import Templates from "./components/Templates";
import Customize from "./components/Customize";
const Controller = ({ canvas, selectedField, setSelectedObject, selectedObject, setSelectedField }) => {


  useLayoutEffect(() => {
     animateOnSelect("init-animation")
  }, [selectedField])

  useEffect(() => {
    if (!canvas) return;
    fabric.Object.prototype.objectCaching = false;
    canvas.on("object:added", (event) => {
      setSelectedObject(event.target)
    });
    canvas.on('mouse:up', (event) => {
      setSelectedObject(event.target)

      if(!canvas.getActiveObject()) setSelectedField('text')
    });
    return () => {
      canvas.off("object:added");
      canvas.off("mouse:up")
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas]);


  const Component = () => {
    switch(selectedField) {
      case 'text': return <Text canvas={canvas} />
      case 'images': return <Images  canvas={canvas}/>
      case 'image:filters': return <ImageFilters  canvas={canvas}/>
      case 'templates': return <Templates canvas={canvas}/>
      case 'customize': return <Customize canvas={canvas}/>
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
