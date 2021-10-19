import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 95%;
  height: 5rem;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

export const Link = styled.a`
  position: relative;
  width: 7rem;
  color: #373737;
  font: 500 1em 'Hurme Geometric Sans', sans-serif;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: .4s;

  &:after {
    content: '';
    position: absolute;
    top: -10px; right: 0;
    width: 0;
    height: 2px;
    background: #000;
    transition: .6s;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: -10px; left: 0;
    width: 0;
    height: 2px;
    background: #000;
    transition: .6s;
  }

  &:hover {
    letter-spacing: 2px;

    &:before,
    &:after { width: 2rem; }
  }
`;

export const SubBtn = styled.button`
  position: relative;
  margin-left: 2rem;
  padding: .8rem 2.2rem;
  background: none;
  color: #373737;
  font: 500 1em 'Hurme Geometric Sans', sans-serif;
  border-radius: 3px;
  border: 3px solid #000;
  text-transform: uppercase;
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
    top: 26%; right: 1rem;
    font-size: 1.1em;
    transition: all .8s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  }

  &:hover {
    color: #000;

    :after {
      background-color: rgba(255, 255, 255, .5);
      transform: translate3d(120%, -50%, 0) rotate3d(0, 0, 1, 90deg);
    }
    :before {
      right: .8rem;
    }
  }
`;