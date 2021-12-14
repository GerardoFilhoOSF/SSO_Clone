import React from "react";
import * as S from "./CustomDivider.style";

const CustomDivider = ({ orientation = "horizontal", ...props }) => (
  <S.Separator orientation={orientation} {...props} />
);

export default CustomDivider;
