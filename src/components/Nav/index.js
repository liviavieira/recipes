import React from "react";
import * as S from "./styles";

import Link from "../Link";
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
        <Link content={about} />
        <Link content={recipes} />
        <SubscribeBtn
          content={subscribe}
          marginLeft={true}
        />
      </S.Navigation>
    </S.Menu>
  );
}