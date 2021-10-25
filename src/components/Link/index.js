import React from "react";
import styled from "styled-components";

export const Text = styled.a`
  position: relative;
  margin-left: 1.5rem;
  width: 7.5rem;
  padding: 10px 0;
  color: #373737;
  font: 500 1em 'Hurme Geometric Sans', sans-serif;
  letter-spacing: 1.5px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: .4s;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: 0; right: 0;
    width: 0;
    height: 2px;
    background: #000;
    transition: .6s;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 0;
    height: 2px;
    background: #000;
    transition: .6s;
  }

  &:hover {
    letter-spacing: 3px;
    text-shadow: 5px 5px 0 #bbb;

    &:before,
    &:after { width: 1rem; }
  }

  @media (max-width: 768px) {
    margin-left: 0;
    opacity: ${props => props.mobile ? '1' : '0'};
  }
`;

export default function Link({ content, mobile }) {
  return <Text href="" mobile={mobile}>{content}</Text>
}