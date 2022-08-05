import React, { useRef } from "react";
import { PrimaryBtn } from "../../../../../reusableUI/buttons/buttons.style";
import TextHeader from "../../../../../reusableUI/TextHeader";
import { StyleGraphics } from "../style.components";
import { FiUpload } from "react-icons/fi";
import SVGLogos from "./SvgLogos";
import { fabric } from "fabric";
import { HeaderMd } from "../../../../../reusableUI/typography";
import { useSelector } from "react-redux";
import Ilustrations from "./Ilustrations";
import uniqid from "uniqid";

const Graphics = () => {
  const canvas = useSelector((state) => state.canvas.canvas);
  const ref = useRef();

  const trigger = () => {
    ref.current.click();
  };
  function openSVG(e) {
    var url = URL.createObjectURL(e.target.files[0]);
    fabric.loadSVGFromURL(url, function (objects, options) {
      var svg = fabric.util.groupSVGElements(objects, options);
      canvas.add(svg).setActiveObject(svg);
      svg.left = 50;
      svg.top = 50;
      svg.id = uniqid();
      svg.scaleToWidth(100);
      svg.scaleToHeight(100);
      canvas.centerObject(svg);
      canvas.renderAll();
    });
  }

  return (
    <StyleGraphics>
      <input ref={ref} type="file" onChange={openSVG} style={{ display: "none" }} />
      <TextHeader text={"Graphics"} />
      <PrimaryBtn onClick={trigger}>
        <FiUpload size="20" /> Upload
      </PrimaryBtn>
      <HeaderMd style={{ margin: "4px" }}>Logos</HeaderMd>
      <SVGLogos canvas={canvas} />
      <HeaderMd style={{ margin: "4px" }}>Ilustrations</HeaderMd>
      <Ilustrations canvas={canvas} />
    </StyleGraphics>
  );
};

export default Graphics;
