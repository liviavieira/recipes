import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 93%;
  height: 7rem;
  transition: .6s;
  z-index: 1;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${props => props.mobile ? '0' : '100%'};
    flex-direction: column-reverse;
    width: 100vw;
    height: 100vh;
  }
`;

export const Logo = styled.img`
  width: 3.5rem;
  cursor: pointer;
  transition: .6s;
  z-index: 1;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    opacity: ${props => props.mobile ? '1' : '0'};
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  transition: .6s;

  @media (max-width: 768px) {
    position: absolute;
    flex-direction: column;
    padding: 5rem 2rem;
    width: 100%;
    height: 100%;
    border-right: 1.5rem solid ${props => props.mobile ? '#373737' : 'transparent'};
    border-radius: ${props => props.mobile ? '0' : '5px'};
    box-shadow: ${props => props.mobile ? '0 5px 30px' : ''};
    background: #fff;
  }
`;

export const MobileBtn = styled.button`
  position: fixed;
  top: 2rem; right: 2rem;
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
    width: 1.8rem;
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