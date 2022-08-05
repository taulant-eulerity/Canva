import React, { useRef, useState } from "react";

import { StyleImages, StyleImageWrapper } from "../style.components";
import { fabric } from "fabric";
import uniqid from 'uniqid'
const SVGLogos = ({ canvas }) => {
  const logos = ["https://eulerity-svg.s3.amazonaws.com/cocacola.svg", "https://eulerity-svg.s3.amazonaws.com/facebook.svg", "https://eulerity-svg.s3.amazonaws.com/google.svg", "https://eulerity-svg.s3.amazonaws.com/instagram.svg", "https://eulerity-svg.s3.amazonaws.com/pinterest.svg","https://eulerity-svg.s3.amazonaws.com/flyio.svg"];
 const loadRef = useRef(0)
 const [loader, setLoader] = useState(true)
  function handleSVG(img) {
    fabric.loadSVGFromURL(img, function (objects, options) {
      var svg = fabric.util.groupSVGElements(objects, options);
      svg.left = 50;
      svg.top = 50;
      svg.scaleToWidth(100);
      svg.scaleToHeight(100);
      svg.id = uniqid()
      canvas.add(svg).setActiveObject(svg);;
      canvas.centerObject(svg);
      canvas.renderAll();
    });
  }

  const handleOnLoad = () => {
    //* Loading latter
    loadRef.current += 1
    if(loadRef.current === logos.length) {
        setLoader(false)
    }
  }


  return (
    <StyleImages>
      {logos.map((logo) => {
        return (
          <StyleImageWrapper box={true} key={logo} onClick={() => handleSVG(logo)} style={{ padding: "0.3rem" }}>
            <img onLoad={handleOnLoad} width={"50px"} src={logo} alt='svg' />
          </StyleImageWrapper>
        );
      })}
    </StyleImages>
  );
};

export default SVGLogos;
