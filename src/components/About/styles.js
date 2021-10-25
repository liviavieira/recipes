import styled from "styled-components";

export const Container = styled.section`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;

    img,
    div { width: 100%; }
  }
`;

export const Img = styled.img`
  width: 50%;
`;

export const Content = styled.div`
  padding: 10rem 2rem;
  width: 50%;

  @media (max-width: 768px) {
    padding: 4.5rem 1rem;
  }
`;

export const Title = styled.h2`
  position: relative;
  margin: 0 auto 5.5rem;
  width: 8rem;
  color: #373737;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  font: 600 1.6em 'Hurme Geometric Sans', sans-serif;

  &:after {
    content: '';
    position: absolute;
    bottom: -1.5rem; left: 29%;
    width: 3.5rem;
    height: 5px;
    border-radius: 3px;
    background: #373737;
  }

  @media (max-width: 768px) {
    margin: 0 auto 5.2rem;
    font-size: 2.2em;

    &:after {
      bottom: -2rem; left: 27%;
      width: 4rem;
      height: 6px;
    }
  }
`;

export const About = styled.p`
  margin: 0 auto;
  max-width: 411px;
  color: #373737;
  font: 500 .9em/1.6 'Hurme Geometric Sans', sans-serif;

  @media (max-width: 1900px) {
    max-width: 398px;
    font-size: 1.3em;
  }

  @media (max-width: 768px) {
    letter-spacing: .5px;
    font-size: 1.2em;
    line-height: 1.7;
  }
`;