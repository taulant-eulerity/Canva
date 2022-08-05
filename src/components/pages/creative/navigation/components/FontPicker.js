import React, { useEffect, useLayoutEffect, useRef , useState} from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import {useSelector} from 'react-redux'
const StyleFontPicker = styled.div`
  position: relative;
  min-width: 160px;
  height: 22px;
  border: 1px solid #DFDFDE;
  padding: 0.2rem;
  /* background-color: #F1F1F1; */
  border-radius: 5px;
  display: grid;
  place-items: center;
`;
const StyleHiddenFontPicker = styled.div`
  position: absolute;
  width: 13rem;
  height: 300px;
  background-color: grey;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;



  top: 30px;
  right: 0;
  background-color: white;
  /* border: 1px solid #DFDFDE; */
  border-radius: 5px;
  /* opacity: 0;
  visibility: hidden; */
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;


  .style-fonts {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .each-font {
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    .p {
        padding-left: 0.3rem;
    }
    :hover {
        background-color: #3a36e4;
        color: white;
    }
  }
`;

const FontPicker = () => {
  const [animation, setAnimation] = useState(null)
  const ref = useRef();
  const fontList = ['Arial', 'Roboto','Poppins','Square Peg','Mochiy Pop One','Signika Negative','Exo 2','Edu VIC WA NT Beginner']
  const [fontFamily, setCurrentFont] = useState(null)
  const canvas = useSelector(state => state.canvas.canvas)
    useEffect(() => {
        const obj = canvas?.getActiveObject()
        setCurrentFont(obj?.fontFamily)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[canvas?.getActiveObject()])

    const handleFontChange = (f) => {
        const obj = canvas.getActiveObject()
        obj.set('fontFamily', f)
        setCurrentFont(obj.fontFamily)
        canvas.renderAll();
    }
        useLayoutEffect(() => {
          setAnimation(gsap.timeline().fromTo(".animate", {opacity: 0, autoAlpha: 0, duration: 0.1}, {opacity: 1,autoAlpha: 1, duration: 0.1}).pause())
        },[])

    const onMouseEnter = () => {
      animation.play()
    }
    const onMouseLeave = () => {
      animation.reverse()
    }

  return (
    <StyleFontPicker onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} hoverd={ref}>
      <p style={{fontFamily: fontFamily}}>{fontFamily ? fontFamily.length > 10 ? fontFamily.slice(0, 10)+'...':fontFamily: 'Font Family'}</p>
      <StyleHiddenFontPicker className="animate">
        <div className="style-fonts">
            {
                fontList.map(f => {
                    return <div className="each-font" onClick={() => handleFontChange(f)} key={f} style={{fontFamily: f}}><p>{f}</p></div>
                })
            }
        </div>
      </StyleHiddenFontPicker>
    </StyleFontPicker>
  );
};

export default FontPicker;
