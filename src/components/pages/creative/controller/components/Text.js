import React from "react";
import { fabric } from "fabric";
import { PrimaryBtn } from "../../../../reusableUI/buttons/buttons.style";
const Text = ({ selectedObject, canvas }) => {
  return (
    <>
      <PrimaryBtn
        onClick={() => {
          canvas.add(
            new fabric.Textbox("hello world", {
              left: 100,
              top: 100,
              fill: "black",
              fontFamily: "Arial",
              textAlign: "center",
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
            type="range"
            min="1"
            max="100"
            onChange={(e) => {
              selectedObject.opacity = e.target.value / 100;
              canvas.renderAll();
            }}
          />
          <input
            type="color"
            onChange={(e) => {
              console.log(selectedObject);
              selectedObject.fill = e.target.value;
              canvas.renderAll();
            }}
          />
          <input
            type="range"
            min="1"
            max="100"
            onChange={(e) => {
              selectedObject.fontSize = e.target.value;
              canvas.renderAll();
            }}
          />
        </>
      )}
    </>
  );
};

export default Text;
