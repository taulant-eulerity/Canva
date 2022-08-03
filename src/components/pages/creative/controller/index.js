import React, { useLayoutEffect } from "react";

import { StyleController } from "./style.controller";

import  Text  from "./components/Text";
import  Images  from "./components/Images";
import { animateOnSelect } from "../../../util/gsap";
import ImageFilters from "./components/ImageFilters";
import Templates from "./components/Templates";
import Customize from "./components/Customize";
import Graphics from "./components/Graphics";
const Controller = ({ canvas, selectedField }) => {


  useLayoutEffect(() => {
     animateOnSelect("init-animation")
  }, [selectedField])


  const Component = () => {
    switch(selectedField) {
      case 'text': return <Text canvas={canvas} />
      case 'images': return <Images  canvas={canvas}/>
      case 'image:filters': return <ImageFilters  canvas={canvas}/>
      case 'templates': return <Templates canvas={canvas}/>
      case 'customize': return <Customize canvas={canvas}/>
      case 'graphics': return <Graphics canvas={canvas} />
      default: return <Text canvas={canvas} />
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
