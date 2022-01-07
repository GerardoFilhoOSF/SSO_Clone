import * as S from "./Header.style";
import React from "react";

import { Link } from "@ds/react";

import { ReactComponent as CNPlogo } from "assets/icons/Logo-CNP.svg";
import { ReactComponent as ChatIcon } from "assets/icons/chatblue.svg";
import { ReactComponent as AccessibilityIcon } from "assets/icons/signs-languageblue.svg";
const Header = () => {
  return (
    <>
      <S.Header>
        <S.Container>
          <Link variant="primary-md-02" className="Link">
            &#8249; Voltar
          </Link>
          <CNPlogo />
          <S.ContainerImg>
            <ChatIcon className="chatIcon" />
            <AccessibilityIcon />
          </S.ContainerImg>
        </S.Container>
      </S.Header>
      <S.Gap></S.Gap>
    </>
  );
};

export default Header;
