import styled from "styled-components";

export const Container = styled.footer`
  background: #f2f4f1;

  @media (max-width: 768px) { background: #fbfbfb; }
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 6rem 0;
  width: 90%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    padding-bottom: 8rem;
    height: 74vh;
  }
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12rem;

  @media (max-width: 768px) { width: 90%; }
`;

export const LinkBox = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top: .5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 65%;

    a { width: 100%; }
  }
`;

export const SocialIcon = styled.img`
  width: 2.5rem;

  @media (max-width: 768px) {
    margin: 0 .5rem;
    width: 3.5rem;
  }

  @media (max-width: 360px) { width: 3rem; }
`;

export const Info = styled.div`
  padding: 1rem 0;
  letter-spacing: 1.2px;
  font: 500 .7em 'Hurme Geometric Sans', sans-serif;
  color: #ffffff60;
  text-align: center;
  background: #446061;
  transition: .2s;

  &:hover { color: #ffffff90; }
`;