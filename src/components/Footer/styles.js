import styled from "styled-components";

export const Container = styled.footer`
  background: #f2f4f1;
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 6rem 0;
  width: 90%;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12rem;
`;

export const LinkBox = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top: .5rem;
`;

export const SocialIcon = styled.img`
  width: 2.5rem;
`;

export const Info = styled.div`
  padding: 1rem 0;
  letter-spacing: 1.2px;
  font: 500 .7em 'Hurme Geometric Sans', sans-serif;
  color: #ffffff60;
  text-align: center;
  background: #446061;
  transition: .2s;

  &:hover {
    color: #ffffff90;
  }
`;