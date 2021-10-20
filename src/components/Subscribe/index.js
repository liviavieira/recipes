import React from "react";
import * as S from "./styles";

import Submit from "../Button";

export default function Subscribe({
  title,
  signup,
  email,
  submit
}) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{signup}</S.Subtitle>

        <S.Subscribe>
          <S.Email type="email" placeholder={email} />
          <Submit
            content={submit}
            width="10.6rem"
            weight="600"
            letterSpacing="4px"
          />
        </S.Subscribe>
      </S.Wrapper>
    </S.Container>
  )
}