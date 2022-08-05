import React, { useEffect, useRef, useState } from "react";
import { StyleImages, StyleImageWrapper } from "./style.components";
import { fabric } from "fabric";
import { PrimaryBtn } from "../../../../reusableUI/buttons/buttons.style";
import { FiUpload } from "react-icons/fi";
import TextHeader from "../../../../reusableUI/TextHeader";
import { HiddenInput } from "../../../../reusableUI/HiddenInput";
import {useSelector} from 'react-redux'
import uniqid from 'uniqid'
let images = [
  "https://images.unsplash.com/photo-1656444699089-bab3ba14aefc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://thumbs.dreamstime.com/b/berry-pie-20808479.jpg",
  "https://knowledgenuts.com/wp-content/uploads/2020/12/f5046c1ebb5cee8368c0fd724b527465.jpeg",
  "https://t3.ftcdn.net/jpg/04/71/96/02/240_F_471960206_um24q8MnMVNXVccOWLS49Nhl6LsqavRD.jpg",
  "https://avatars.mds.yandex.net/i?id=c62f4cd6321a014f2f8561bf2c3b37bb-4504662-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=2747b5ea55eb4dbd43aca9387add0b0d-5238782-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=df0f2c8035ec7c4ddb9096af4a5201f2-5339753-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=37987a18d06e4e9406dbb996470bbf04-5297681-images-thumbs&n=13",
  "https://www.tuv.com/content-media-files/master-content/services/products/0169-tuv-rheinland-recreation-and-sports-equipment/tuv-rheinland-recreation-and-sports-equipment_core_4_3.jpg",
];

//Roboto/Poppins/Square Peg/Mochiy Pop One/Signika Negative/Exo 2/Edu VIC WA NT Beginner

const DisplayImage = ({ images, addImage }) => {
  const [loader, setSt] = useState(true);
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;
    let img = new Image();
    img.src = ref.current.src;
    img.onload = function () {
      setSt(false);
    };
  }, []);

  return (
    <>
      {images.map((img) => {
        return (
          <StyleImageWrapper key={img}>
            <div className="overlay" loader={loader} />
            <img ref={ref} onClick={() => addImage(img)} src={img} alt="fruit" />
          </StyleImageWrapper>
        );
      })}
    </>
  );
};

const Images = () => {

const canvas = useSelector(state => state.canvas.canvas)
  const ref = useRef();
  const addImage = (imgUrl) => {
    fabric.Image.fromURL(
      imgUrl,
      (img) => {
        img.id = uniqid()
        canvas.add(img).setActiveObject(img);

        canvas.centerObject(img);
        canvas.renderAll();
      },
      { crossOrigin: "Anonymous" }
    );
  };
  const handleOnChange = (e) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      const imgObj = new Image();
      imgObj.src = event.target.result;
      imgObj.onload = () => {
        var image = new fabric.Image(imgObj);
        image.id = uniqid()
        image.scale(0.2);
        canvas.centerObject(image);
        canvas.add(image).setActiveObject(image);
        canvas.renderAll();
      };
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div>
      <HiddenInput reference={ref} onChange={handleOnChange} />
      <TextHeader text={"Images"} />
      <PrimaryBtn onClick={() => ref.current.click()}>
        <FiUpload size="20" /> Upload
      </PrimaryBtn>
      <StyleImages>
        <DisplayImage addImage={addImage} images={images} />
      </StyleImages>
    </div>
  );
};

export default Images;
