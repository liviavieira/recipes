import styled from "styled-components";

export const Menu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 93%;
  height: 7rem;

  @media (max-width: 768px) {
    width: calc(100vw - 5rem);
    height: calc(100vh - 5rem);
  }
`;

export const Logo = styled.img`
  width: 3.5rem;
  cursor: pointer;
  transition: .2s;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  transition: .6s;

  @media (max-width: 768px) {
    position: fixed;
    left: ${props => props.mobile ? '0' : '100%'};
    flex-direction: column;
    margin-top: 2rem;
    width: 100%;
    height: 100%;
    border-right: 1.5rem solid ${props => props.mobile ? '#373737' : 'transparent'};
    border-radius: ${props => props.mobile ? '0' : '5px'};
    box-shadow: ${props => props.mobile ? '0 5px 30px' : ''};
    background: #fff;
  }
`;

export const MobileBtn = styled.button`
  position: absolute;
  top: 1.6rem; right: .2rem;
  display: none;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 2rem;
  height: 2rem;
  border: none;
  background: none;
  cursor: pointer;
  z-index: 1;

  &:before,
  &:after {
    position: relative;
    content: '';
    width: 1.5rem;
    height: 4px;
    background: #373737;
    transition: .5s;
  }
  
  &:before {
    top: ${props => props.mobile ? '6px' : '0'};
    transform: ${props => props.mobile ? 'rotate(-45deg)' : ''};
  }
  &:after {
    top: ${props => props.mobile ? '-6px' : '0'};
    transform: ${props => props.mobile ? 'rotate(45deg)' : ''};
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileNav = styled.nav`
  background: #fff;
`;