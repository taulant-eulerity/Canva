import styled from "styled-components";

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
    /* transform: scale(0.75); */
    width: 15px;
    height: 15px;
    border: none;
    background-color: #3c415c;
    border-radius: 40px;
    box-shadow: 0px 0px 0px green;
    transition: all 400ms;
    outline: none;
    cursor: pointer;
  }

  input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none !important;
    /* transform: scale(0.75); */
    width: 15px;
    height: 15px;
    border: none;
    background-color: #3c415c;
    border-radius: 30px;
    box-shadow: 0px 0px 0px green;
    transition: all 400ms;
    outline: none;
    cursor: pointer;
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


const Slider = ({onInput, value}) => {
    return (
        <StyleInput>
          <div className="container">
            <div className="slider">
              <input
                value={value}
                type="range"
                min="0"
                max="100"
                onInput={onInput}
              />
              <output id="rangevalue">{Math.round(value)}</output>
            </div>
          </div>
        </StyleInput>
      );
}
export default Slider
