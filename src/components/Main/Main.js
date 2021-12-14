import React from "react";

// import { Hidden } from "@ds/react";

// import { X_MOBILE, X_DESKTOP } from "./../../constants/breakpoints";

import * as S from "./Main.style";

const Main = ({ children }) => {
  return (
    <S.Main>
      <S.MainContent>
        {/* <Hidden only={X_MOBILE}></Hidden> */}
        <S.Content>{children}</S.Content>
        {/* <Hidden only={X_DESKTOP}></Hidden> */}
      </S.MainContent>
    </S.Main>
  );
};

export default Main;
