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

export const SubBtn = styled.button`
  position: relative;
  margin-left: 1rem;
  padding: 1.1rem 2.5rem .9rem;
  background: none;
  color: #373737;
  font: 500 1em 'Hurme Geometric Sans', sans-serif;
  border-radius: 3px;
  border: 4px solid #373737;
  text-transform: uppercase;
  letter-spacing: 1.5px;
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