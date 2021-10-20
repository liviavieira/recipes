import React from "react";
import * as S from "./styles";

import SubscribeBtn from "../Button";

export default function Nav({
  logo,
  about,
  recipes,
  subscribe,
}) {
  return (
    <S.Menu>
      <S.Logo src={logo.url} alt="Recipes Logo" />

      <S.Navigation>
        <S.Link href="">{about}</S.Link>
        <S.Link href="">{recipes}</S.Link>
        <SubscribeBtn content={subscribe} />
      </S.Navigation>
    </S.Menu>
  );
}