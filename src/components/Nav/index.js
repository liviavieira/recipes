import React, { useState } from "react";
import * as S from "./styles";

import Link from "../Link";
import SubscribeBtn from "../Button";

export default function Nav({
  logo,
  about,
  recipes,
  subscribe,
}) {
  const [mobile, setMobile] = useState(false);

  return (
    <S.Menu mobile={mobile}>
      <S.Logo src={logo.url} alt="Recipes Logo" mobile={mobile} />

      <S.Navigation mobile={mobile}>
        <Link content={about} mobile={mobile}/>
        <Link content={recipes} mobile={mobile}/>
        <SubscribeBtn
          content={subscribe}
          marginLeft={true}
          mobile={mobile}
        />
      </S.Navigation>
      <S.MobileBtn onClick={() => setMobile(mobile ? false : true)} mobile={mobile} />
    </S.Menu>
  );
}