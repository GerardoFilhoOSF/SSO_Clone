import React from "react";
import Logo from "./../Logo";
import { ReactComponent as CapLogo } from "./../../assets/images/Logo-CNP.svg";
import * as S from "./Header.style";

const Header = () => {
  return (
    <>
      <S.Header data-section="header section">
        <S.HeaderContent>
          <S.SectionMenu>
            <a href="/">
              <Logo data-label="header home logo">
                <CapLogo />
              </Logo>
            </a>
          </S.SectionMenu>
        </S.HeaderContent>
      </S.Header>
    </>
  );
};

export default Header;
