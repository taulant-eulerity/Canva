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



  useEffect(() => {
    if (!canvas) return;
    fabric.Object.prototype.objectCaching = false;
    canvas.on("object:added", (event) => {
      setNavigation(handleNavigation(event, null))
      animation?.reverse?.();
    });
    canvas.on('mouse:up', (event,) => {
      canvas.preserveObjectStacking = true;
      setNavigation(handleNavigation(event, canvas?.getActiveObject()))
      if(!canvas.getActiveObject()) setSelectedField('text')
    });



    return () => {
      canvas.off("object:added");
      canvas.off("mouse:up")
      canvas.off('object:selected')
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
