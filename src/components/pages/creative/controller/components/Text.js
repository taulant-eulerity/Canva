import React from "react";
import { fabric } from "fabric";
import { PrimaryBtn } from "../../../../reusableUI/buttons/buttons.style";
import { StyleText } from "./style.components";
import TextHeader from "../../../../reusableUI/TextHeader";

const Text = ({ canvas }) => {
  return (
    <StyleText>
      <TextHeader text={"Text"}/>
      <PrimaryBtn
        onClick={() => {
          let textBox = new fabric.Textbox("hello world", {
            left: 100,
            top: 100,
            fill: "black",
            fontFamily: "Arial",
            textAlign: "center",
          });
          canvas.add(textBox).setActiveObject(textBox);
        }}
      >
        Add text
      </PrimaryBtn>
    </StyleText>
  );
};

export default Text;
