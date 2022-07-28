import React from 'react'
import { StyleImages, StyleImageWrapper } from './style.components';
import {fabric} from 'fabric'
let images = [
     'https://img.favpng.com/17/8/24/cherry-tomato-vegetable-gratis-png-favpng-16qBt9jZYGfxZg5BESH0Zak0N.jpg',
     'https://purepng.com/public/uploads/large/purepng.com-orange-orangeorangefruitbitter-orangeorangesclip-art-17015273374288pjtg.png'
]
const Images = ({canvas}) => {

   
  const addImage = (img) => {
    new fabric.Image.fromURL(
        img,
      (image) => {
        image.scale(0.1);
        canvas.add(image);
        canvas.centerObject(image);
        canvas.renderAll();
      }
    );
  };
    return (
        <StyleImages>
            {images.map(img => {
                return (
                <StyleImageWrapper>
                    <img onClick={() => addImage(img)} width={'100px'} key={img} src={img} alt='fruit'/>
                </StyleImageWrapper>
                )
            })}
        </StyleImages>
    )
}

export default Images;