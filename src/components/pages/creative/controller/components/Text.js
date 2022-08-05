import React from "react";
import { fabric } from "fabric";
import { PrimaryBtn } from "../../../../reusableUI/buttons/buttons.style";
import { StyleText, StyleContent } from "./style.components";
import TextHeader from "../../../../reusableUI/TextHeader";
import { HeaderMd } from "../../../../reusableUI/typography";
import uniqid from 'uniqid';
import {useSelector} from 'react-redux'

let headers = ['Hello from Paris', 'The Shape of the water', "The quick brown fox jumps over the lazy dog"]
let descriptions = ["Return From the Starts", "One more Minute", "Please let us know", "The numbers of planets is very large"]

const Content = ({list=[], canvas}) => {
  const handleText = (text) => {
    let textBox = new fabric.Textbox(text, {
      id: uniqid(),
      left: 100,
      top: 100,
      fill: "rgba(0, 0, 0, 1)",
      fontFamily: "Arial",
      textAlign: "center",
      backgroundColor: 'rgba(255,255,255,1)'
    });
    canvas.add(textBox).setActiveObject(textBox);
  }
  return (
    <StyleContent>
      {list.map(text => {
        return <div onClick={handleText.bind(null, text)} className="contents" key={text}>{text}</div>
      })}
    </StyleContent>
  )
}




const Text = () => {
  const canvas = useSelector(state => state.canvas.canvas)
  return (
    <StyleText>
      <TextHeader text={"Text"}/>
      <PrimaryBtn
        onClick={() => {
          let textBox = new fabric.Textbox("hello world", {
            id: uniqid(),
            left: 100,
            top: 100,
            fill: 'rgba(0, 0, 0, 1)',
            fontFamily: "Arial",
            textAlign: "center",
            backgroundColor: 'rgba(255,255,255,1)'
          });
          canvas.add(textBox).setActiveObject(textBox);
        }}
      >
        Add text
      </PrimaryBtn>
      <div style={{marginTop: '2rem'}} />
      <HeaderMd>Headers</HeaderMd>
      <Content list={headers} canvas={canvas}/>

      <div style={{marginTop: '2rem'}} />
      <HeaderMd>Descriptiopns</HeaderMd>
      <Content list={descriptions} canvas={canvas}/>
    </StyleText>
  );
};

export default Text;
