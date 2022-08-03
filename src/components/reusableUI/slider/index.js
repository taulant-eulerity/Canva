import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getLastValue } from "../../util/util";

export const Slider = ({ canvas }) => {
  const [slider, setSlider] = useState(1);

 

  useEffect(() => {
    let rgba = canvas?.getActiveObject()?.backgroundColor;
    if (!rgba) return
         let numbers = getLastValue(rgba);
         setSlider(Math.round(numbers[numbers.length - 1] * 100));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
      let rgba = canvas?.getActiveObject()?.backgroundColor;
      if (!rgba) return
        let numbers = getLastValue(rgba);
        canvas?.getActiveObject().set("backgroundColor", `rgba(${numbers.join(",")})`);
        canvas.renderAll();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slider]);

  return (
    <StyleInput>
      <div className="container">
        <div className="slider">
          <input
            value={slider}
            type="range"
            min="0"
            max="100"
            onInput={function (e) {
              setSlider(Math.round(e.target.value));
              const rgba = canvas?.getActiveObject()?.backgroundColor;
              if (rgba) {
                let numbers = getLastValue(rgba);
                numbers[numbers.length - 1] = e.target.value / 100;
                canvas?.getActiveObject().set("backgroundColor", `rgba(${numbers.join(",")})`);
                canvas.renderAll();
              }
            }}
          />
          <output id="rangevalue">{Math.round(slider)}</output>
        </div>
      </div>
    </StyleInput>
  );
};

export const StyleInput = styled.div`
  height: 30px;
  .container {
    height: 30px;
  }

  .slider {
    width: 100%;
  }
  /* track */
  input[type="range"] {
    -webkit-appearance: none !important;
    width: 100%;
    height: 1px;
    background-color: #3c415c;
    border: none;
    border-radius: 10px;
    margin: auto;
    transition: all 400ms;
    outline: none;
    padding: 0;
    margin: 0;
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 1px;
    background-color: #3c415c;
    border: none;
    border-radius: 10px;
    margin: auto;
    transition: all 400ms;
    outline: none;
    padding: 0;
    margin: 0;
  }

  /* thumb */
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    transform: scale(0.75);
    width: 20px;
    height: 20px;
    border: none;
    background-color: #3c415c;
    border-radius: 40px;
    box-shadow: 0px 0px 0px green;
    transition: all 400ms;
    outline: none;
  }
  input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none !important;
    transform: scale(0.75);
    width: 20px;
    height: 20px;
    border: none;
    background-color: #3c415c;
    border-radius: 30px;
    box-shadow: 0px 0px 0px green;
    transition: all 400ms;
    outline: none;
  }

  /* thumb hover */
  input[type="range"]::-webkit-slider-thumb:hover {
    transform: scale(0.85);
  }
  input[type="range"]::-moz-range-thumb:hover {
    transform: scale(0.85);
  }

  /* thumb active */
  input[type="range"]::-webkit-slider-thumb:active {
    transform: scale(1);
  }
  input[type="range"]::-moz-range-thumb:active {
    transform: scale(1);
  }

  /* for ie 
#end{
  position: relative;
  top: -45px;
}

input[type="range"] {
  -webkit-appearance: none !important;
  width: 100%; 
  border: none;
  border-radius: 10px;
  margin: auto;
  transition: all 400ms;
  outline:none;
  padding: 0;
  margin: 0;
}

input[type=range]::-ms-track {
  width: 100%;  
  cursor: pointer; 
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background:   #3C415C;
  border: none;
  border-radius: 10px; 
  height:2px
}
input[type=range]::-ms-fill-upper {
  background:   #3C415C;
  border: none;
  border-radius: 10px;
  height:2px
}
input[type=range]::-ms-thumb {
  transform:scale(0.75);
  width: 20px;
  height: 20px;
  border: none;
  background-color:   #3C415C;
  border-radius: 30px;
  box-shadow: 0px 0px 0px green;
  transition: all 400ms;
  outline:none
}

input[type=range]:hover::-ms-thumb{  
  transform:scale(0.85);
}

input[type=range]:active::-ms-thumb{  
  transform:scale(1);
}

input[type=range]:focus::-ms-fill-lower {
  background:   #3C415C;
}
input[type=range]:focus::-ms-fill-upper {
  background:   #3C415C;
}
*/

  #rangevalue {
    text-align: center;
    font-family: "Quantico", sans-serif;
    font-size: 13px;
    display: block;
    margin: auto;
    padding: 2px 0px;
    width: 100%;
    color: #3c415c;
  }
`;
// #ff5252
