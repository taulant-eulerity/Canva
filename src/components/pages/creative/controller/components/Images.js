import React, {useEffect, useRef, useState} from 'react'
import { StyleImages, StyleImageWrapper } from './style.components';
import {fabric} from 'fabric'

let images = [
      'https://thumbs.dreamstime.com/b/berry-pie-20808479.jpg',
      'https://knowledgenuts.com/wp-content/uploads/2020/12/f5046c1ebb5cee8368c0fd724b527465.jpeg',
      'https://t3.ftcdn.net/jpg/04/71/96/02/240_F_471960206_um24q8MnMVNXVccOWLS49Nhl6LsqavRD.jpg',
      'https://avatars.mds.yandex.net/i?id=c62f4cd6321a014f2f8561bf2c3b37bb-4504662-images-thumbs&n=13'
]

const DisplayImage = ({images, addImage}) => {
  const [loader, setSt] = useState(true)
  const ref = useRef()

  useEffect(() => {
    if(!ref.current) return
    let img = new Image()
    img.src = ref.current.src
       img.onload = function() {

        setSt(false)
       }
  },[])


  return (
    images.map(img => {
      return (
      <StyleImageWrapper key={img}>
        <div className='overlay' loader = {loader} />
        <img ref={ref} onClick={() => addImage(img)} width={'100px'} src={img} alt='fruit'/>
      </StyleImageWrapper>
      )
  })
  )
}

const Images = ({canvas}) => {
  const addImage = (imgUrl) => {

    fabric.Image.fromURL(imgUrl, (img) => {
      canvas.add(img)
      img.scale(0.2);
      canvas.renderAll();

  }, {crossOrigin: 'Anonymous'})
    // new fabric.Image.fromURL(
    //     img,
    //   (image) => {
    //     image.scale(0.1);
    //     canvas.add(image);
    //     canvas.centerObject(image);
    //     canvas.renderAll();
    //   }
    // )
  };
    return (
        <StyleImages>
            <DisplayImage addImage={addImage} images={images} />
        </StyleImages>
    )
}

export default Images;