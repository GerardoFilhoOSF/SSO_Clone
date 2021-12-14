import React from "react";
import Logo from "./../Logo";
import * as S from "./Header.style";

const Header = () => {
  return (
    <>
      <S.Header data-section="header section">
        <S.HeaderContent>
          <S.SectionMenu>
            <a href="/">
              <Logo data-label="header home logo" />
            </a>
          </S.SectionMenu>
        </S.HeaderContent>
      </S.Header>
    </>
  );
};

export default Header;
