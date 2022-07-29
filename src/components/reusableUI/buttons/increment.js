import React from "react";
import styled from "styled-components";
import { FiPlus, FiMinus } from "react-icons/fi";
import { SmParagraph } from "../typography";

const StyleIncerement = styled.div`

  input {
    border: none;
    width: 30px;
    display: flex;
    font-size: 16px;
    text-align: center;
    border-top:  1px solid #CFD2CF;
    border-bottom:  1px solid #CFD2CF;

  }
  .increment-wrapper {
    display: flex;
  }
  .border-right,
  .border-left {
    padding: 0.2rem;
    background-color: white;
    cursor: pointer;
    display: grid;
    place-items: center;

  }
  .border-right {
    border: 1px solid #CFD2CF;
  }
  .border-left {
    border: 1px solid #CFD2CF;
  }
`;

const Increment = ({ setValue, value }) => {
  const increment = () => {
    setValue((prew) => prew += 1);
  };
  const decrement = () => {
    setValue((prew) => prew -= 1);
  };
  return (
    <StyleIncerement>
    <SmParagraph>Font size</SmParagraph>
      <div className="increment-wrapper">
        <div className="border-right" onClick={increment}>
          <FiPlus />
        </div>
        <input maxLength={70} value={value} />
        <div className="border-left" onClick={decrement}>
          <FiMinus />
        </div>
      </div>
    </StyleIncerement>
  );
};

export default Increment;
