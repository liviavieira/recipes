import React from "react";
import * as S from "./styles";

export default function Header({
  children,
  bg,
  title,
}) {
  return (
    <S.Container bg={bg.url}>
      {children}
      <S.TextBox>
        <S.Title>{title}</S.Title>
      </S.TextBox>
    </S.Container>
  );
}