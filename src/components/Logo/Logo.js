import React from "react";
import * as S from "./Logo.style";

const Logo = (props) => <S.Logo {...props}> {props.children} </S.Logo>;

export default Logo;
