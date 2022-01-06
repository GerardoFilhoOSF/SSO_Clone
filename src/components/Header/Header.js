import React from "react";
import { ReactComponent as CNPlogo } from "assets/icons/Logo-CNP.svg";
import { ReactComponent as ChatIcon } from "assets/icons/chatblue.svg";
import { ReactComponent as AccessibilityIcon } from "assets/icons/signs-languageblue.svg";
import * as S from "./Header.style";

const Header = () => {
  return (
    <>
      <S.Header>
        <CNPlogo />
        <S.Container>
          <ChatIcon className="chatIcon" />
          <AccessibilityIcon />
        </S.Container>
      </S.Header>
      <S.Gap></S.Gap>
    </>
  );
};

export default Header;
