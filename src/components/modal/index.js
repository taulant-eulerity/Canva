import React, { useEffect } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { gsap } from "gsap";
import { HeaderMd } from "../reusableUI/typography";
import MediaItem from "./Items";

import {useSelector} from 'react-redux'

import facebookCover from "../../assets/images/facebookCover.svg";
import facebookPost from "../../assets/images/facebookPost.svg";
import instagramPost from "../../assets/images/instagramPost.svg";
import presenation from "../../assets/images/presenation.svg";
import socialMedia from "../../assets/images/socialMedia.svg";
import twitterPost from "../../assets/images/twitterPost.svg";
import youtube from "../../assets/images/youtube.svg";


const StyleModalOverlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
  /* opacity: 0.6; */

  :before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-color: black;
  }
`;

const StyleModal = styled.div`
  width: 950px;
  height: 500px;
  background-color: white;
  z-index: 20;
  opacity: 1;
  border-radius: 10px;
  opacity: 0;
  transform: scale(0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .header {
    width: 100%;
    height: 25px;
    border-bottom: 1px solid grey;
    display: flex;
    align-items: center;
    padding: 1rem;
    p {
      margin: 0;
      margin-left: 1rem;
    }
  }
  .image-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 200px);
    grid-template-rows: repeat(2, 200px);
    justify-items: center;
    align-items: center;
  }
`;

const Modal = ({close}) => {
  const canvas = useSelector(state => state.canvas.canvas)
  let images = [
                {icon: presenation, text: {title: 'Presantation', dimentions: '1024x768'}},
                {icon: facebookCover, text: {title: 'Facebook Cover', dimentions: '1702x630'}},
                {icon: facebookPost, text: {title: 'Facebook Post', dimentions: '300x500'}},
                {icon: instagramPost, text: {title: 'Instagram Post', dimentions: '1080x1080'}},
                {icon: socialMedia, text: {title: 'Social Media Story', dimentions: '1080x1920'}},
                {icon: twitterPost, text: {title: 'Twitter Post', dimentions: '1200x675'}},
                {icon: youtube, text: {title: 'Youtube', dimentions: '2560x1440'}}
            ];

  useEffect(() => {
    gsap.to(".animate", { opacity: 1, scale: 1, duration: 0.4 });
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "";
    };
  }, []);

  return ReactDOM.createPortal(
    <StyleModalOverlay
      id="moda"
      onClick={(e) => {
        if (e.target.id === "moda") {
            close(false)
        }
      }}
    >
      <StyleModal className="animate">
        <div className="header">
          <HeaderMd>Start with a blank template</HeaderMd>
        </div>
        <div className="image-wrapper">
          {images.map((data) => {
            return <MediaItem canvas={canvas} close={close} data={data} key={data.text.title} />;
          })}
        </div>
      </StyleModal>
    </StyleModalOverlay>,
    document.getElementById("modal")
  );
};

export default Modal;
