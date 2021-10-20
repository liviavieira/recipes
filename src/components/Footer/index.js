import React from "react";
import * as S from "./styles"

import Link from "../Link";

export default function Footer({
  instagram,
  twitter,
  facebook,
  pinterest,
  about,
  recipes,
  subscribe,
  reference
}) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.IconBox>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" >
            <S.SocialIcon
              src={instagram.url}
              alt="Instagram icon"
            />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" >
            <S.SocialIcon
              src={twitter.url}
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" >
            <S.SocialIcon
              src={facebook.url}
              alt="Facebook icon"
            />
          </a>
          <a href="https://pinterest.com/" target="_blank" rel="noreferrer" >
            <S.SocialIcon
              src={pinterest.url}
              alt="Pinterest icon"
            />
          </a>
        </S.IconBox>

        <S.LinkBox>
          <Link content={about} />
          <Link content={recipes} />
          <Link content={subscribe} />
        </S.LinkBox>
      </S.Wrapper>
      <S.Info>
        <p>{reference}</p>
      </S.Info>
    </S.Container>
  )
}