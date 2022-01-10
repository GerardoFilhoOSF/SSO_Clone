import * as S from "./Header.style";
import React from "react";

import { Link } from "@ds/react";

import { ReactComponent as CNPlogo } from "@root/assets/images/Logo-CNP.svg";
import { ReactComponent as ChatIcon } from "@root/assets/icons/chatblue.svg";
import { ReactComponent as AccessibilityIcon } from "@root/assets/icons/signs-languageblue.svg";
const Header = () => {
  return (
    <>
      <S.Header>
        <S.Container2>
          <Link variant="primary-md-02" className="Link">
            &#8249; Voltar
          </Link>
        </S.Container2>
        <S.Container>
          <CNPlogo className="logo" />
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
