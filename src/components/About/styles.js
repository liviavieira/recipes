import styled from "styled-components";

export const Container = styled.section`
  display: flex;
`;

export const Img = styled.img`
  width: 50%;
`;

export const Content = styled.div`
  padding: 10rem 0;
  width: 50%;
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
    left: 29%;
    bottom: -1.5rem;
    width: 3.5rem;
    height: 5px;
    border-radius: 3px;
    background: #373737;
  }
`;

export const About = styled.p`
  margin: 0 auto;
  max-width: 411px;
  color: #373737;
  font: 500 .9em/1.6 'Hurme Geometric Sans', sans-serif;
`;