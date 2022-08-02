import React, {  useState } from "react";
import useFabric from "../../hooks/useFabric";
import Controller from "./controller";
import Display from "./display";

import { StyleEditor } from "./style.editor";
import Footer from "./footer/footer";
import Navigation from "./navigation";
import Sidebar from "./sidebar";

const Editor = () => {
  const [canvas, setCanavs] = useState(null);
  const [selectedField, setSelectedField] = useState('text')
  const [selectedObject, setSelectedObject] = useState(null);

  const ref = useFabric((fabricCanvas) => {
    setCanavs(fabricCanvas);
  });

  return (
    <StyleEditor>
      <Navigation selectedObject={selectedObject} canvas={canvas} setSelectedField={setSelectedField}/>
      <Sidebar setSelectedField={setSelectedField} selectedField={selectedField}/>
      <Controller canvas={canvas} selectedField={selectedField} setSelectedField={setSelectedField} setSelectedObject={setSelectedObject} selectedObject={selectedObject} />
      <Display canvasRefernence={ref} />
      <Footer />
    </StyleEditor>
  );
};

export default Editor;
