import React from "react";
import { ReactComponent as CapLogo } from "./../../assets/images/Logo-CNP.svg";
import { ReactComponent as ChatIcon } from "assets/icons/chatblue.svg";
import { ReactComponent as AccessibilityIcon } from "assets/icons/signs-languageblue.svg";
import * as S from "./Header.style";

const Header = () => {
  return (
    <>
      <S.Header>
        <CapLogo />
        <S.Container>
          <ChatIcon className="chatIcon" />
          <AccessibilityIcon />
        </S.Container>
      </S.Header>
    </>
  );
};

export default Header;
