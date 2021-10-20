import React from "react";
import * as S from "./styles";

export default function About({
  spoon,
  title,
  about
}) {
  return (
    <S.Container>
      <S.Img src={spoon.url} alt="Image of a spoon of salt" />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.About>{about}</S.About>
      </S.Content>
    </S.Container>
  )
}