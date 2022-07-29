import React from "react";
import { fabric } from "fabric";
import { PrimaryBtn } from "../../../../reusableUI/buttons/buttons.style";
const Text = ({ canvas }) => {
  return (
    <>
      <PrimaryBtn
        onClick={() => {
           let textBox =  new fabric.Textbox("hello world", {
              left: 100,
              top: 100,
              fill: "black",
              fontFamily: "Arial",
              textAlign: "center",
            })
            canvas.add(textBox).setActiveObject(textBox)
        }}
      >
        Add text
      </PrimaryBtn>
    </>
  );
};

export default Text;
