import styled from "styled-components";

export const Container = styled.section`
  background: #f2f4f1;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 10rem 0;
  width: 90%;

  @media (max-width: 768px) {
    padding: 5rem 0 1.5rem;
    width: 92%;
  }
`;

export const Title = styled.h2`
  position: relative;
  margin: 0 auto 6rem;
  width: 16rem;
  color: #373737;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  font: 600 1.6em 'Hurme Geometric Sans', sans-serif;

  &:after {
    content: '';
    position: absolute;
    bottom: -1.5rem; left: 31%;
    width: 5rem;
    height: 5px;
    border-radius: 3px;
    background: #373737;
  }

  @media (max-width: 768px) {
    margin: 0 auto 5.3rem;
    width: auto;
    font-size: 2.2em;

    &:after {
      bottom: -2.5rem; left: 36%;
      width: 6.5rem;
      height: 6px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Recipe = styled.figure`
  display: flex;
  flex-direction: column;
  width: 31%;
  height: 34rem;
  border-radius: 50px;
  box-shadow: 0 8px 6px #ccc;
  transition: .4s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px #bbb;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: 78vh;
    box-shadow: none;
  }
`;

export const RecipeImg = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  
  @media (max-width: 768px) {
    height: 48%;
  }
`;

export const Description = styled.figcaption`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  color: #373737;
  font: 500 1.4em 'Hurme Geometric Sans', sans-serif;
  background: #fff;

  p {
    position: relative;
    padding-top: 1.9rem;

    &:after {
      content: '';
      position: absolute;
      top: 0; left: 39%;
      width: 2.4rem;
      height: 4px;
      background: #373737;
    }
  }

  @media (max-width: 768px) {
    height: 52%;
    
    p {
      padding: 1.1rem 0 1rem;
      font-size: 1.4em;
      
      &:after { width: 3.3rem; height: 5px; }
    }
  }
`;