import React, { useState } from "react";
import useFabric from "../../hooks/useFabric";
import Controller from "./controller";
import Display from "./display";

import { StyleEditor } from "./editor.styles";
import Footer from "./footer/footer";
import Navigation from "./navigation";
import Sidebar from "./sidebar";

const Editor = () => {
  const [canvas, setCanavs] = useState(null);

  const ref = useFabric((fabricCanvas) => {
    setCanavs(fabricCanvas);
  });

  return (
    <StyleEditor>
      <Navigation />
      <Sidebar />
      <Controller canvas={canvas}/>
      <Display canvasRefernence={ref} />
      <Footer />
    </StyleEditor>
  );
};

export default Editor;
