import React, {  useState, useEffect } from "react";
import useFabric from "../../hooks/useFabric";
import Controller from "./controller";
import Display from "./display";
import { fabric } from "fabric";
import { StyleEditor } from "./style.editor";
import Footer from "./footer/footer";
import Navigation from "./navigation";
import Sidebar from "./sidebar";
import { handleNavigation } from "./editor.util";

const Editor = () => {
  const [canvas, setCanavs] = useState(null);
  const [selectedField, setSelectedField] = useState('text')
  const [navigation, setNavigation] = useState(null)

  const ref = useFabric((fabricCanvas) => {
    setCanavs(fabricCanvas);
  });

  let [animation, setAnimation] = useState({})
  console.log(canvas)
  useEffect(() => {
    if (!canvas) return;




    fabric.Object.prototype.objectCaching = false;
    canvas.on("object:added", (event) => {
      setNavigation(event)
      animation?.reverse?.();
    });


    canvas.on('mouse:up', (event) => {
      canvas.preserveObjectStacking = true;

      setNavigation(canvas?.getActiveObject())
      if(!canvas.getActiveObject()) setSelectedField('text')
    });


     canvas.on('selection:updated', (event) => {
      setNavigation(canvas?.getActiveObject())
     })

    canvas.on('mouse:wheel', function(opt) {
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
      canvas.off("mouse:up")
      canvas.off('selection:updated')
      canvas.off('mouse:wheel')
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas]);

  return (
    <StyleEditor>
      <Navigation canvas={canvas} navigation={navigation} setSelectedField={setSelectedField} animation={animation}/>
      <Sidebar setSelectedField={setSelectedField} selectedField={selectedField}/>
      <Controller canvas={canvas} selectedField={selectedField} setSelectedField={setSelectedField}  />
      <Display canvasRefernence={ref} />
      <Footer canvas={canvas} animation={animation} setAnimation={setAnimation}/>
    </StyleEditor>
  );
};

export default Editor;
