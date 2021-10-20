import styled from "styled-components";

export const Container = styled.header`
  margin: 1.5rem;
  height: calc(100vh - 3rem);
  background: url(${props => props.bg || 'https://image.winudf.com/v2/image1/Y29tLmFuZHJvbW8uZGV2OTgwOC5hcHAyMjg5NTFfc2NyZWVuXzJfMTU2Njk5OTAxM18wODM/screen-2.jpg?fakeurl=1&type=.jpg'});
  background-position: center;
  background-size: cover;
`;

export const TextBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 7rem);
`;

export const Title = styled.h1`
  color: #373737;
  letter-spacing: 10px;
  text-transform: uppercase;
  font: 600 6em 'Hurme Geometric Sans', sans-serif;
`;

