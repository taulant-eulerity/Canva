import styled from "styled-components";


export const PrimaryBtn = styled.div`
    cursor: pointer;
    background-color: #3a36e4;
    color: white;
    padding: .5rem;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    width: ${props => props.width ? props.width : '16.5rem'};
`
