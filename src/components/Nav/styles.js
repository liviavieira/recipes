import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 93%;
  height: 7rem;
`;

export const Logo = styled.img`
  width: 3.5rem;
  cursor: pointer;
  transition: .2s;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

export const Link = styled.a`
  position: relative;
  margin-right: 2rem;
  width: 6rem;
  padding: 10px 0;
  color: #373737;
  font: 500 1em 'Hurme Geometric Sans', sans-serif;
  letter-spacing: 1.5px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: .4s;

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
`;
