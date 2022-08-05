import React from "react";

import { StyleImages, StyleImageWrapper } from "../style.components";
import { fabric } from "fabric";
import uniqid from 'uniqid'
const Ilustrations = ({ canvas }) => {
  const ilustrations = ["https://eulerity-svg.s3.amazonaws.com/success.svg", "https://eulerity-svg.s3.amazonaws.com/business-launch.svg", "https://eulerity-svg.s3.amazonaws.com/business-way-to-success.svg","https://eulerity-svg.s3.amazonaws.com/character.svg", "https://eulerity-svg.s3.amazonaws.com/stripe.svg"];

  function handleSVG(img) {
    fabric.loadSVGFromURL(img, function (objects, options) {
        var svg = fabric.util.groupSVGElements(objects, options);
        svg.left = 50;
        svg.top = 50;
        svg.scaleToWidth(100);
        svg.scaleToHeight(100);
        svg.id = uniqid()
        canvas.add(svg).setActiveObject(svg);
        canvas.centerObject(svg);
        canvas.renderAll();
    });
  }

  return (
    <StyleImages>
      {ilustrations.map((il) => {
        return (
          <StyleImageWrapper box={true} key={il} onClick={() => handleSVG(il)} style={{ padding: "0.3rem" }}>
            <img width={"80px"} src={il} alt='svg' />
          </StyleImageWrapper>
        );
      })}
    </StyleImages>
  );
};

export default Ilustrations;
