import React, { useEffect, useState } from "react";
import { PrimaryBtn } from "../../../reusableUI/buttons/buttons.style";
import { StyleController } from "./controller.estyle";
import { fabric } from "fabric";

const Controller = ({ canvas }) => {
  const [selectedObject, setSelectedObject] = useState(null);

  const handleAdded = (event) => {
    setSelectedObject(event.target);
  };

  useEffect(() => {
    if (!canvas) {
      return;
    }
    fabric.Object.prototype.objectCaching = false;
    canvas.on("object:added", (event) => handleAdded(event));
    canvas.on('mouse:up', function (event) {
       setSelectedObject(event.target);
    });
    return () => {
      canvas.off("object:added");
      canvas.off("mouse:up")
    };
  
  }, [canvas]);
  return (
    <StyleController className="section controller">
      <PrimaryBtn
        onClick={() => {
          canvas.add(
            new fabric.Textbox("hello world", {
              left: 100,
              top: 100,
              fill: "black",
              fontFamily: "Arial",
              textAlign: 'center'
            })
          );
        }}
      >
        Add text
      </PrimaryBtn>
      {selectedObject && (
        <>
          <input
            type="color"
            onChange={(e) => {
              selectedObject.backgroundColor = e.target.value;
              canvas.renderAll();
            }}
          />
          <input
            type="range" min="1" max="100"
            onChange={(e) => {
              selectedObject.opacity = e.target.value / 100;
              canvas.renderAll();
            }}

          />
           <input
            type="color"
            onChange={(e) => {
              console.log(selectedObject)
              selectedObject.fill = e.target.value;
              canvas.renderAll();
            }}

          />
        </>
      )}
    </StyleController>
  );
};

export default Controller;
