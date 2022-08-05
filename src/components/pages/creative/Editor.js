import React, { useState, useEffect } from "react";
import useFabric from "../../hooks/useFabric";
import Controller from "./controller";
import Display from "./display";
import { fabric } from "fabric";
import { StyleEditor } from "./style.editor";
import Footer from "./footer/footer";
import Navigation from "./navigation";
import Sidebar from "./sidebar";
import { useDispatch } from "react-redux";
import { handleNavigation } from "./editor.util";
import getSelectedOpbjectType from "../../../redux/actions/navigation";
import getCanvas from "../../../redux/actions/canvas";
import {useSelector} from 'react-redux'
const Editor = () => {
   
  const [selectedField, setSelectedField] = useState("text");
  const canvas = useSelector(state => state.canvas.canvas)
  const _D = useDispatch();

  const ref = useFabric((fabricCanvas) => {
    // setCanavs(fabricCanvas);
    _D(getCanvas(fabricCanvas));
  });

  let [animation, setAnimation] = useState({});

  useEffect(() => {
    if (!canvas) return;
    fabric.Object.prototype.objectCaching = false;
    canvas.on("object:added", (event) => {
      let activeObject = canvas?.getActiveObject();
      _D(getSelectedOpbjectType({ id: activeObject?.id, name: handleNavigation(event) }));
    });

    canvas.on("mouse:up", () => {
      canvas.preserveObjectStacking = true;
      let activeObject = canvas?.getActiveObject();
      let getSelectedField = handleNavigation(null, activeObject);
      _D(getSelectedOpbjectType({ id: activeObject?.id, name: getSelectedField }));
      setSelectedField("customize");
    });

    canvas.on("mouse:wheel", function (opt) {
      var delta = opt.e.deltaY;
      var zoom = canvas.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 20) zoom = 20;
      if (zoom < 0.01) zoom = 0.01;
      canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
    });

    return () => {
      canvas.off("object:added");
      canvas.off("mouse:up");
      canvas.off("mouse:wheel");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas]);

  return (
    <StyleEditor>
      <Navigation setSelectedField={setSelectedField} animation={animation} />
      <Sidebar setSelectedField={setSelectedField} selectedField={selectedField} />
      <Controller selectedField={selectedField} setSelectedField={setSelectedField} animation={animation} />
      <Display canvasRefernence={ref} />
      <Footer animation={animation} setAnimation={setAnimation} />
    </StyleEditor>
  );
};

export default Editor;
