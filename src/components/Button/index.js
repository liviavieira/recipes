import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  position: relative;
  margin-left: ${props => props.marginLeft && '2rem' };
  padding: 1.1rem 0 .9rem;
  width: ${props => props.width || '12.12rem'};
  background: none;
  color: #373737;
  font: ${props => props.weight || '500'} 1em 'Hurme Geometric Sans', sans-serif;
  border-radius: 3px;
  border: 4px solid #373737;
  text-transform: uppercase;
  letter-spacing: ${props => props.letterSpacing || '1.5px'};
  transition: .5s;
  overflow: hidden;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: 2rem; left: 0;
    width: 200px;
    height: 100px;
    background-color: rgba(255, 255, 255, .2);
    transition: .6s;
    transform: translate3d(-120%, -50px, 0) rotate3d(0, 0, 1, 45deg);
    transition: all 2.1s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:before {
    content: '>';
    position: absolute;
    top: 30%; right: 1rem;
    color: #373737;
    font-size: 1.2em;
    transition: all .8s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  }

  &:hover {
    box-shadow: 0 0 15px #bbb;
    color: #000;

    :after {
      background-color: rgba(255, 255, 255, .5);
      transform: translate3d(120%, -50%, 0) rotate3d(0, 0, 1, 90deg);
    }
    :before {
      color: #000;
      right: .8rem;
    }
  }
`;

export default function Button({
  content,
  width,
  weight,
  letterSpacing,
  marginLeft
}) {
  return (
    <Btn
      width={width}
      weight={weight}
      letterSpacing={letterSpacing}
      marginLeft={marginLeft}
    >
      {content}
    </Btn>
  )
}