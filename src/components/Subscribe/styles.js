import styled from "styled-components";

export const Container = styled.section`
  background: #dfe4de;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 8rem 0;
  width: 41%;
`;

export const Title = styled.h2`
  color: #373737;
  letter-spacing: 3px;
  text-align: center;
  text-transform: uppercase;
  font: 600 1.6em 'Hurme Geometric Sans', sans-serif;
`;

export const Subtitle = styled.h3`
  margin-top: .8rem;
  color: #373737;
  letter-spacing: 2px;
  text-align: center;
  font: 500 1.4em 'Hurme Geometric Sans', sans-serif;
`;

export const Subscribe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Email = styled.input`
  margin: 2rem 0;
  padding: 2rem 2.3rem 1.8rem;
  width: 100%;
  color: #373737;
  font: 500 1em 'Hurme Geometric Sans', sans-serif;
  border-radius: 3px;
  border: none;
  outline: none;
  background: #eff1ee;
`;